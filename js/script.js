// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  var saveButton= $('.saveBtn');
  var textArea = $('.description');
  var hourID = $("div[data-hour]");

  var currentDay = dayjs();

  $('#currentDay').text(currentDay.format('dddd, MMMM D'))

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



saveButton.on('click', function(){
localStorage.setItem('need text area of hour');
});

  

              var currentHour= currentDay.hour();
              console.log(currentHour);

              if (hourID < currentHour){
                textArea.css({"background-color": "#d3d3d3", "color": "white"});
               } else if (hourID > currentHour) {
               textArea.css({"background-color": "#77dd77", "color": "white"});
               } else {
              textArea.css({"background-color": "#ff6961", "color": 'white'})
              }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

              //localStorage.getItem(timeBlock.children(2).text?);

});

