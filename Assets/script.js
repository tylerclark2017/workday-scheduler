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