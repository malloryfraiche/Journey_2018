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

        [Required]
        public bool Active { get; set; }

        [Required]
        public bool DefaultVehicle { get; set; }

        public List<Trip> Trips { get; set; }

        public virtual User User { get; set; }

        public Vehicle()
        {
            Trips = new List<Trip>();
        }
    }
}