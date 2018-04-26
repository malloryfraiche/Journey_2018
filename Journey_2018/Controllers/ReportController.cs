using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Journey_2018.Controllers
{
    public class ReportController : ApiController
    {
        // POST: api/reports/generate
        [Route("api/reports/generate")]
        [HttpPost]
        public IHttpActionResult GeneratePdfUrl(DownloadModel downloadModel)
        {
            var url = PdfHelper.GetVehicleTripsPdfUrl(downloadModel);
            return Ok(url);
        }
    }
}
