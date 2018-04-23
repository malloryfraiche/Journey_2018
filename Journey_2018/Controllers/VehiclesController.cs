using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Journey_2018.DataAccess;
using Journey_2018.Models;

namespace Journey_2018.Controllers
{
    public class VehiclesController : ApiController
    {
        private DefaultDataContext db = new DefaultDataContext();

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
        public IQueryable<Vehicle> GetVehiclesByUser()
        {
            //TODO: Add filter for User
            //so i can get a List of the vehicles that are connected to the User.

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
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vehicle.Id)
            {
                return BadRequest();
            }
            
            db.Entry(vehicle).State = EntityState.Modified;
            
            //foreach (var defaultVehicle in db.Vehicles)
            //{
            //    if (defaultVehicle.DefaultVehicle == true)
            //    {

            //    }
            //    else
            //    {

            //    }
            //}
            
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
            //Vehicle vehicleToAdd = null;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Vehicles.Add(vehicle);

            await db.SaveChangesAsync();

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





//[ResponseType(typeof(Vehicle))]
//[Route("api/Vehicles")]
//public async Task<IHttpActionResult> PostVehicle(Vehicle vehicle)
//{
//    Vehicle vehicleToUpdate = null;

//    if (vehicle.Id > 0)
//    {
//        
//        vehicleToUpdate = db.Vehicles.Include(x => x.Trips).First(i => i.Id == vehicle.Id);
//    }
//    else
//    {
//        // if not creates a new Vehicle instance.
//        vehicleToUpdate = new Vehicle();
//    }

//    // data to be filled into the Model from the new instance.
//    vehicleToUpdate.RegistrationNumber = vehicle.RegistrationNumber;
//    foreach (var trip in db.Trips)
//    {
//        if (!vehicle.Trips.Any(item => item.Id == trip.Id))
//        {
//            vehicleToUpdate.Trips.Remove(trip);
//        }
//        else
//        {
//            vehicleToUpdate.Trips.Add((trip));
//        }
//    }

//    if (vehicle.Id > 0)
//    {
//        db.Entry(vehicleToUpdate).State = EntityState.Modified;
//    }
//    else
//    {
//        db.Vehicles.Add(vehicleToUpdate);
//    }

//    await db.SaveChangesAsync();
//    return Ok(vehicle);
//}