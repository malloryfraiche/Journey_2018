using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Journey_2018.DataAccess;
using Journey_2018.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Journey_2018.Controllers
{
    public class VehiclesController : ApiController
    {
        private DefaultDataContext db = new DefaultDataContext();

        // log4net interface variable.
        private readonly log4net.ILog _log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        // GET: api/Vehicles
        [HttpGet]
        [Route("api/Vehicles")]
        public IQueryable<Vehicle> GetVehicles()
        {
            return db.Vehicles;
        }

        // GET: api/VehiclesByUser
        [HttpGet]
        [Route("api/VehiclesByUser")]
        public IQueryable<Vehicle> GetVehiclesByUser(Vehicle vehicle)
        {
            ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
            var username = principal.Claims.Where(c => c.Type == "user_name").Single().Value;
            IdentityUser user = db.Users.SingleOrDefault(u => u.UserName == username);
            vehicle.User_Id = user.Id;
            return db.Vehicles;
        }

        // GET: api/Vehicles/5
        [ResponseType(typeof(Vehicle))]
        public async Task<IHttpActionResult> GetVehicle(int id)
        {
            Vehicle vehicle = await db.Vehicles.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }
            return Ok(vehicle);
        }
        
        // PUT: api/Vehicles/5
        [HttpPut]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutVehicle(int id, Vehicle vehicle)
        {
            ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
            var username = principal.Claims.Where(c => c.Type == "user_name").Single().Value;
            IdentityUser user = db.Users.SingleOrDefault(u => u.UserName == username);
            vehicle.User_Id = user.Id;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (id != vehicle.Id)
            {
                return BadRequest();
            }
            db.Entry(vehicle).State = EntityState.Modified;
            // To have only one vehicle in DB save as the default vehicle.
            if (vehicle.DefaultVehicle == true)
            {
                List<Vehicle> otherVehicles = db.Vehicles.Where(x => x.DefaultVehicle == true).ToList();
                otherVehicles.Select(x => { x.DefaultVehicle = false; return x; }).ToList();
            }
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Vehicles
        [ResponseType(typeof(Vehicle))]
        [HttpPost]
        [Route("api/Vehicles")]
        public async Task<IHttpActionResult> PostVehicle(Vehicle vehicle)
        {
            // try-catch for an example of log4net functionality.
            try
            {
                ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
                var username = principal.Claims.Where(c => c.Type == "user_name").Single().Value;
                IdentityUser user = db.Users.SingleOrDefault(u => u.UserName == username);
                vehicle.User_Id = user.Id;
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                db.Vehicles.Add(vehicle);
                await db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _log.Error(ex);
            }
            return Ok(vehicle);
        }

        // DELETE: api/Vehicles/5
        [ResponseType(typeof(Vehicle))]
        public async Task<IHttpActionResult> DeleteVehicle(int id)
        {
            Vehicle vehicle = await db.Vehicles.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }
            db.Vehicles.Remove(vehicle);
            await db.SaveChangesAsync();
            return Ok(vehicle);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VehicleExists(int id)
        {
            return db.Vehicles.Count(e => e.Id == id) > 0;
        }
    }
}