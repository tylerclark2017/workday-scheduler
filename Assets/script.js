// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  $('.time-block').each(function() {
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    document.getElementById('currentDay').textContent = currentDate;
  });
  
  var timeSlots = [ 
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM"
];

var idHour = 12
for (var i = 0; i < timeSlots.length; i++) {
  var timeBlock = $("<div>").addClass("row time-block");
  timeBlock.attr("id",idHour);
  idHour++
  var hourElement = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(timeSlots[i]);
  var textareaElement = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", "3");
  var saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html('<i class="fas fa-save" aria-hidden="true"></i>');

  timeBlock.append(hourElement, textareaElement, saveButton);
  $("#time-blocks-container").append(timeBlock);
  
}
$(".time-block").each(function () {
  var timeBlockId = $(this).attr('id');
  var hour = parseInt(timeBlockId);
    var currentHour = dayjs().hour();
    $(this).removeClass('past present future')
    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    
    }
})


  $('.saveBtn').click(function() {

    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    
    localStorage.setItem(timeBlockId, userInput); 

  });
  for (var i = 9; i < 18; i++) {
    $("#"+i+" .description").val(localStorage.getItem(i))
  }
  }
);


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

