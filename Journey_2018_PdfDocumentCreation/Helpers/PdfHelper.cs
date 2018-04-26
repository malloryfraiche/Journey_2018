﻿using Journey_2018.Controllers;
using Journey_2018_PdfDocumentCreation.Models;
using System.Web.Http;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Journey_2018.Models;
using System;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace Journey_2018_PdfDocumentCreation.Helpers
{
    class PdfHelper
    {
        public static string GetVehicleTripsPdfUrl(DownloadModel downloadModel)
        {
            var vehicleTrips = TripsController.GetTripsByVehicleId(downloadModel.VehicleId);
            var vehicle = VehiclesController.GetVehicles().FirstOrDefault(x => x.Id == downloadModel.VehicleId);
            var url = BuildPdfAndReturnUrl(vehicleTrips, vehicle, fromDate, toDate);

            return url;
        }

        private static string BuildPdfAndReturnUrl(List<Trip> vehicleTrips, Vehicle vehicle, DateTime fromDate, DateTime toDate)
        {
            var destination = @"/documents";
            var fileSuffix = string.Format("/{0}_trips.pdf", vehicle.RegistrationNumber);

            //Create destination folder if it doesn't exist
            if (!Directory.Exists(System.Web.HttpContext.Current.Server.MapPath(destination)))
                Directory.CreateDirectory(destination);

            using (Document document = new Document(PageSize.A4))
            {
                var internalPath = @"C:\Temp";

                using (PdfWriter writer = PdfWriter.GetInstance(document, new FileStream(internalPath + destination + fileSuffix, FileMode.Create)))
                {
                    ////this event will trigger for each page in the document that gets created.
                    //PageEvent pageEvent = new PageEvent();
                    //writer.PageEvent = pageEvent;

                    // Creating the pdf-document.
                    document.Open();

                    BaseFont baseHelvetica = BaseFont.CreateFont(BaseFont.HELVETICA, BaseFont.CP1252, false);
                    Font helvetica = new Font(baseHelvetica, 20, Font.BOLD, BaseColor.BLACK);

                    var para = new Paragraph("Vehicle report for: " + vehicle.RegistrationNumber, helvetica);
                    para.Alignment = 1;
                    para.SpacingAfter = 20;
                    document.Add(para);

                    // Loop through each Trip of the selected Vehicle and build a table row for each...
                    foreach (var trip in vehicleTrips)
                    {
                        // (2) is the number of columns.
                        PdfPTable table = new PdfPTable(2);
                        PdfPCell cell = new PdfPCell(new Phrase("Trip Id Number: " + trip.Id));
                        cell.Colspan = 2;
                        cell.BackgroundColor = BaseColor.BLUE;

                        // 0 = Left, 1 = Center, 2 = Right
                        cell.HorizontalAlignment = 1;
                        cell.Padding = 5;
                        table.AddCell(cell);

                        table.AddCell("Trip Date");
                        table.AddCell(trip.TripDate.ToString());

                        table.AddCell("Start Address");
                        table.AddCell(trip.StartAddress);

                        table.AddCell("Destination Address");
                        table.AddCell(trip.DestinationAddress);

                        table.AddCell("Total Distance (km)");
                        table.AddCell(((trip.StopKilometerReading)-(trip.StartKilometerReading)).ToString());

                        table.AddCell("Errand");
                        table.AddCell(trip.Errand);

                        table.AddCell("Notes");
                        table.AddCell(trip.Notes);

                        table.PaddingTop = 10;
                        table.SpacingAfter = 10;
                        document.Add(table);
                    }

                    document.Close();

                }
            }

        }

        // To add a footer to each page that is created in the document.
        protected class PageEvent : PdfPageEventHelper
        {
            Font footerFont = new Font(Font.FontFamily.HELVETICA, 10, Font.ITALIC);

            public override void OnEndPage(PdfWriter writer, Document document)
            {
                //TODO: Have footer text here instead of Image.

                PdfContentByte cb = writer.DirectContent;
                var pageNumber = writer.CurrentPageNumber;
                Phrase footer = new Phrase("JOURNEY 2018", footerFont);
                
            }
        }





    }
}
