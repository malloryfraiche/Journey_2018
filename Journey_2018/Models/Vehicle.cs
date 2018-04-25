using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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

        [ForeignKey("User")]
        public int User_Id { get; set; }

        public User User { get; set; }
        
    }
}