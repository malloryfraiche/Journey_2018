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

        [Required]
        public double StartKilometerReading { get; set; }

        [Required]
        public double StopKilometerReading { get; set; }

        [Required]
        public string StartAddress { get; set; }

        [Required]
        public string DestinationAddress { get; set; }

        [Required]
        public string Errand { get; set; }

        public string Notes { get; set; }

        public Vehicle Vehicle { get; set; }

        public Trip() { }

        public Trip(int id, DateTime tripDate, double startKilometerReading, double stopKilometerReading, string startAddress, string destinationAddress, string errand, string notes, Vehicle vehicle)
        {
            Id = id;
            TripDate = tripDate;
            StartKilometerReading = startKilometerReading;
            StopKilometerReading = stopKilometerReading;
            StartAddress = startAddress;
            DestinationAddress = destinationAddress;
            Errand = errand;
            Notes = notes;
            Vehicle = vehicle;
        }
        
    }
}