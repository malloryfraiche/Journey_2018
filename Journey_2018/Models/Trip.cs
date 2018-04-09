using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Journey_2018.Models
{
    public class Trip
    {
        public int Id { get; set; }

        public DateTime TripDate { get; set; }

        public string StartAddress { get; set; }

        public string DestinationAddress { get; set; }
        
        public string Errand { get; set; }

        public string Notes { get; set; }
    }
}