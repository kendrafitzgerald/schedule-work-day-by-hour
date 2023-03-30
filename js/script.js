
$(function () {
  // This variable corresponds to each HTML element with the listed class, or each save button icon on page.
  var saveButton= $('.saveBtn');
// These variables utilize dayJS to retrieve the current day and time.
  var currentDay = dayjs();
  var currentHour= dayjs().hour();
  //These variables correspond to the text area and the entire container element of the page
  var textArea = $(".description");
  var containerEl = $(".container-lg")

  //This variable corresponds to the hour listed in the data-hour atttribute in HTML
  var hourID = containerEl.children().data("hour")

  // This line of code accesses the header, with an ID of current day, and renders the current date on the 
  // page by attributing the text of the dayjs variable.
  $('#currentDay').text(currentDay.format('dddd, MMMM D'));

  //These conditional statements state that if hour id in the data-hour attribute divs is less than the current
  //hour given by dayJS, then the text area will be given a class of past, or grey. If the hourID is greater
  //than the current hour, it will be given a class of future and will be red. Lastly, if the hour times are
  //equal, or it is presently that hour, the text area will be given a class of present or red.
  if (hourID < currentHour){
    textArea.attr("class", "past")
    } else if (hourID > currentHour) {
    textArea.attr("class", "future");
   } else {
   textArea.attr("class", "present");
   }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



saveButton.on('click', function(event){

var saveIcon = $(event.target);

var dailyTasks = {

    time: saveIcon.parent().attr("id"),
    userInput: saveIcon.prev().val(),

  }

 var storedTasks = JSON.parse(localStorage.getItem(dailyTasks))


        if (storedTasks === null) {
            storedTasks= [];
        }
        storedTasks.push(dailyTasks);

        localStorage.setItem("dailyTasks", JSON.stringify(storedTasks));

 });



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

        

});

