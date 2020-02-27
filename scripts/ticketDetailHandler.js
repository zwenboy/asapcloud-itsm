const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

setTicketInfo(urlParams.get('id'));

function setTicketInfo(id) {
    document.title = id + " - ITSM";
    document.getElementById("ticketIdTitle").innerHTML = 'Ticket ' + id;
}