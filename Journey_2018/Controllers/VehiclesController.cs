﻿using System;
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
        public IQueryable<Vehicle> GetVehicles()
        {
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
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Vehicles.Add(vehicle);

            // here is where you can have for example: db.UserVehicleHelper.Add() so
            // when you POST a new vehicle then it takes the users id who is logged on and
            // the new created vehicle id and adds the info into the UserVehicleHelper DB table...

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
//        // checks if the vehicle is already in the DB.
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