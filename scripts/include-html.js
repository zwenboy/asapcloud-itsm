var fileName = window.location.href.substring(url.lastIndexOf('/') + 1)

$(function() {
    $("#includedContent").load(fileName + ".html");
});