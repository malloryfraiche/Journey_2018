﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Journey_2018.Models;
using Microsoft.AspNet.SignalR;

namespace Journey_2018.SignalR
{
    [Authorize]
    public class SupportHub : Hub
    {
        [Authorize]
        public void Send(string name, string message)
        {
            Clients.All.broadcastMessage(name, message);
        }
        
        public override Task OnConnected()
        {
            // trigger when someone connects to hub.
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            // trigger when someone disconnects from hub.
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            // triggers when someone re-connects to hub.
            return base.OnReconnected();
        }
    }
}