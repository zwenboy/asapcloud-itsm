const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

setTicketInfo(urlParams.get('id'));

function setTicketInfo(id) {
    if (id == null) {
        window.location = "https://asapcloud.netlify.com/tickets";
    }
    document.title = id + " - ITSM";
    document.getElementById("ticketIdTitle").innerHTML = 'Ticket ' + id;
}