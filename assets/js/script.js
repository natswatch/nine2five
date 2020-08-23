var events = {};

var createEvent = function (eventText) {
    
}

$(".saveBtn").click(function() {
    var eventText = $("#eventForm").val();
    var eventTime = $(this)
        .closest(".row")
        .attr("id");

    var events = [{
        time: eventTime,
        description: eventText
    }];

    console.log(events);
});

var loadEvents = function() {
    events = JSON.parse(localStorage.getItem("events"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!events) {
      events = [{time: 0, description: ""}];
    }
  
    // loop over object properties
    arr.forEach(function(events) {
        createTask(events.time, events.description);
      });
  };

var saveEvent = function() {
    localStorage.setItem("events", JSON.stringify(events));
};