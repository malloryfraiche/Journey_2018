using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Journey_2018.Models
{
    public class Vehicle
    {
        public int Id { get; set; }

        public string RegistrationNumber { get; set; }

        public int Kilometers { get; set; }

        public List<Trip> Trips { get; set; }

        public Vehicle()
        {
            Trips = new List<Trip>();
        }
        
    }
}