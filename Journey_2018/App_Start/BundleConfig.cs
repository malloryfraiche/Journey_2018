using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Journey_2018.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/js/script").Include(
                      "~/Scripts/jquery-3.3.1.min.js",
                      "~/Scripts/angular.min.js",
                      "~/Scripts/angular-route.min.js",
                      "~/Scripts/angular-touch.min.js",
                      "~/Scripts/bootstrap.min.js",
                      "~/Journey_SPA/JourneyScripts/app.js",
                      "~/Journey_SPA/JourneyScripts/createNewAccount.js",
                      "~/Journey_SPA/JourneyScripts/login.js",
                      "~/Journey_SPA/JourneyScripts/manageVehicles.js",
                      "~/Journey_SPA/JourneyScripts/myTrips.js",
                      "~/Journey_SPA/JourneyScripts/registerNewTrip.js",
                      "~/Journey_SPA/JourneyScripts/report.js",
                      "~/Journey_SPA/JourneyScripts/start.js",
                      "~/Journey_SPA/JourneyScripts/support.js",
                      "~/Scripts/angular-animate.min.js",
                      "~/Scripts/angular-aria.min.js",
                      "~/Scripts/angular-messages.min.js",
                      "~/Scripts/angular-material.min.js",
                      "~/Scripts/Chart.min.js",
                      "~/Scripts/angular-chart.min.js",
                      "~/Scripts/jquery.signalR-2.2.3.min.js"));

            bundles.Add(new StyleBundle("~/css/style").Include(
                      "~/Content/bootstrap/bootstrap.min.css",
                      "~/Content/angular-material.min.css",
                      "~/Journey_SPA/customStyle.min.css"));
        }
    }
}
