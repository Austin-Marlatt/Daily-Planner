//  .ready jQuery method ensures all DOM elements have loaded before running code
$(document).ready(function () {

    // writes current date to header id provided, same format as example used
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  });

  // event listener for the save button
  $(".saveBtn").on("click", function(){
    // declare the chosen time and user input as variables
    let time = $(this).parent().attr("id");
    let description = $(this).siblings(".description").val();
// commit user input and time to local storage
    localStorage.setItem(time, description);
  });

  // function to dynamically color input fields based on current hour
  function hourTracker() {
    // variable to store current hour using dayjs hour method
    let currentTime = dayjs().hour();

    // loop through each section, grab the id, split used to seperate id - hour #
    $(".time-block").each(function() {
      let sectionHour = parseInt($(this).attr("id").split("-")[1]);
    
      // conditional checks hour # against 24 hour number from dayjs to determine location and appropiate styling
      if (sectionHour < currentTime) {
        // hour # less than current -> is in the past
        $(this).addClass("past");
      } else if (sectionHour === currentTime) {
        // hour # same as current -> is present, removes past class
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        // any other conditon -> must be in the future, removes any previous class and sets to future
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
// run function
  hourTracker();

  // interval to check every 30 sec if the time has changed to the next hour
  setInterval(hourTracker, 30000)

  // checks if each timeslot has a saved event, if one is found it is printed to the appropriate time slot
  $('#hour-9  .description').val(localStorage.getItem('hour-9' ));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));