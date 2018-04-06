using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Journey_2018.Models
{
    public class UserVehicleHelper
    {
        public int Id { get; set; }

        public User UserId { get; set; }

        public Vehicle VehicleId { get; set; }
        
        public bool UserDefaultVehicle { get; set; }

        //public enum DefaultVehicleStatus { Inactive = 0, Active = 1 }
         
    }
}