using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Journey_2018.Models
{
    public class Trip
    {
        public int Id { get; set; }

        [Required]
        public DateTime TripDate { get; set; }

        // TODO: start and stop egenskaper
        //[Required]
        //public double TotalTripLength { get; set; }

        [Required]
        public string StartAddress { get; set; }

        [Required]
        public string DestinationAddress { get; set; }

        [Required]
        public string Errand { get; set; }

        public string Notes { get; set; }
    }
}