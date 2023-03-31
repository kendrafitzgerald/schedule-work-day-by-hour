$(function () {
  
  // These variables utilize dayJS to retrieve the current day and time.
    var currentDay = dayjs();
    var currentHour= dayjs().hour();
  
  
    var storedTasks= [];

  
  
  
      $(".time-block").each(function() {

        var hourBlock = parseInt($(this).attr("id"));
        console.log(typeof hourBlock)

        if (hourBlock < currentHour) {
          $(this).attr("class", "past");
        } else if (hourBlock > currentHour) {
          $(this).attr("class", "future");
        } else {
          $(this).attr("class", "present");
        }
      

      })
  
    // This line of code accesses the header, with an ID of current day, and renders the current date on the 
    // page by attributing the text of the dayjs variable.
    $('#currentDay').text(currentDay.format('dddd, MMMM D'));
    
  
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  
  
  
  containerEl.on('click', ".saveBtn", function(event){
  
  var saveButton = $(event.target);
  console.log();
  
  var dailyTasks = {
  
      time: saveButton.parent().attr("id"),
      userInput: saveButton.prev().val(),
  
    }
  
   var storedTasks = JSON.parse(localStorage.getItem("storedTasks"));
  
  
          if (storedTasks === null) {
              storedTasks= [];
          }
          storedTasks.push(dailyTasks);
  
    localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
  
   });
  
  
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  
          
  
  });

