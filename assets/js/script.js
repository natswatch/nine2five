
var toDay = function() {
    var current = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    var todaysDate = $("#currentDay").text(current);
}

setInterval(toDay, 1000);

$(".saveBtn").click(function() {
    
    var eventTime = $(this)
        .closest(".row")
        .attr("id");
        
    var eventText = $(this)
         .closest(".row")
         .find("textarea")
         .val();

    localStorage.setItem(eventTime, eventText);
    
});

var loadEvents = function() {

    for (var i=0; i<localStorage.length; i++) {
        var time = localStorage.key(i);
        var description = localStorage.getItem(time);

        var timeId = ("#" + time);
        $(timeId).find("textarea").val(description);
    }

};

var currentTimeId = function() {
    var currentHour = moment().format('h');
    var amPm = moment().format('A');
    var timeId = "#" + currentHour + "-" + amPm; 
    return timeId;
};

var colorCode = function() {



};



loadEvents();
