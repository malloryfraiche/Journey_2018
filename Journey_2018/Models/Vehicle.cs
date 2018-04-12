using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Journey_2018.Models
{
    public class Vehicle
    {
        public int Id { get; set; }

        [Required]
        public string RegistrationNumber { get; set; }

        // because can count out the kilometers from the different start and end addresses from the Trip model it is connected to?
        //public int Kilometers { get; set; }

        public List<Trip> Trips { get; set; }

        public Vehicle()
        {
            Trips = new List<Trip>();
        }     
    }
}