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
    public class TripsController : ApiController
    {
        private DefaultDataContext db = new DefaultDataContext();
        
        // GET a list of trips done by a vehicle.
        public List<Trip> GetTripsByVehicleId(int vehicleId)
        {
            return db.Trips.Where(x => x.Vehicle_Id == vehicleId).ToList();
        }

        // GET a list of trips by the vehicles id within a certain time sapn.
        public List<Trip> GetTripsByDates(int vehicleId, DateTime fromDate, DateTime toDate)
        {
            return db.Trips.Where(x => x.Vehicle_Id == vehicleId && x.TripDate > fromDate && x.TripDate < toDate).ToList();
        }
        
        // GET: api/Trips
        public IQueryable<Trip> GetTrips()
        {
            return db.Trips;
        }

        // GET: api/Trips/5
        [ResponseType(typeof(Trip))]
        public async Task<IHttpActionResult> GetTrip(int id)
        {
            Trip trip = await db.Trips.FindAsync(id);
            if (trip == null)
            {
                return NotFound();
            }
            return Ok(trip);
        }
        
        // PUT: api/Trips/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTrip(int id, Trip trip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (id != trip.Id)
            {
                return BadRequest();
            }
            db.Entry(trip).State = EntityState.Modified;
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TripExists(id))
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
        
        // POST: api/Trips
        [ResponseType(typeof(Trip))]
        public async Task<IHttpActionResult> PostTrip(Trip trip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Trips.Add(trip);
            await db.SaveChangesAsync();
            return Ok(trip);
        }

        // DELETE: api/Trips/5
        [ResponseType(typeof(Trip))]
        public async Task<IHttpActionResult> DeleteTrip(int id)
        {
            Trip trip = await db.Trips.FindAsync(id);
            if (trip == null)
            {
                return NotFound();
            }
            db.Trips.Remove(trip);
            await db.SaveChangesAsync();
            return Ok(trip);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TripExists(int id)
        {
            return db.Trips.Count(e => e.Id == id) > 0;
        }
    }
}