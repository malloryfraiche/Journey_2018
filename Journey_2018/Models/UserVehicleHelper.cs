using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Journey_2018.Models
{
    public class UserVehicleHelper
    {
        public int Id { get; set; }

        [Required]
        public User UserId { get; set; }

        [Required]
        public Vehicle VehicleId { get; set; }

        [Required]
        public bool UserDefaultVehicle { get; set; }
        
    }
}