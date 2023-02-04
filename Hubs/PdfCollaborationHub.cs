using Microsoft.AspNetCore.SignalR;
namespace SignalR_Pdf_Blazor.Hubs
{
    public class PdfCollaborationHub : Hub
    {
        public async Task SendPdfCommand(string command)
        {
            await Clients.All.SendAsync("ReceivePdfCommand", command);
        }
    }
}
