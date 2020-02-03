var url = window.location.href;
var fileName = url.substring(url.lastIndexOf('/') + 1)

$(function() {
    $("#includedContent").load(fileName + ".html");
});