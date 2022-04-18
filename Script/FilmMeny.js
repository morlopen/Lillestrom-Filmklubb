document.addEventListener('DOMContentLoaded', function () {
    highlightNextDate();
}, false);

// Highlists the next film date
function highlightNextDate() {
    var firstDateFound = false;
    var dateElements = document.getElementsByClassName("filmDate");
    var filmDateStr;
    var i;
    var now = new Date();
    var currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    for (i = 0; i < dateElements.length; i++)
    {
        var dateElement = dateElements[i];
        
        var timeElement = dateElement.childNodes[0];
        filmDateStr = timeElement.getAttribute("datetime");
        var dateTime = Date.parse(filmDateStr);

        if (dateTime >= currentDate.getTime() && !firstDateFound)
        {
            if (!dateElement.classList.contains("filmDateNext")) {
                dateElement.classList.add("filmDateNext");
            }

            firstDateFound = true;
        }
    }
}   