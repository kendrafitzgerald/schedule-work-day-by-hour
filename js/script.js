// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


// var timeBlock= $('.row.time-block');
// var saveButton= $('.saveBtn');
// var containerEl=$(".container");
// var hour= $("div").data("hour"); 

var currentDay = dayjs();

$('#currentDay').text(currentDay.format('dddd, MMMM D'));
console.log(currentDay);



//below is the each method which iterates through each element that has the class of 
//.row.text-block and grabs the attribute of id from each of these elements
//i need to figure out how to get rid of the number in each id, so it targets only the hour aspect


// saveButton.on('click', function(){
// localStorage.setItem('need text area of hour');
// });
//the this references each element in the DOM that has the attr of id and class of row time block
//as referenced in the above code

    //create a variable using each method that grabs onto those dives
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

              //  var currentHour= dayjs().hour;
              //  if (hour < currentHour){
              //    timeBlock.attr('.past');
              //  } else if (hour > currentHour) {
              //   timeBlock.attr('.future');
              //  } else {
              //   timeBlock.attr('.present')
              // }
              //how do i retrieve these ids ? should I use attr or another manner?
              //potential code for this 

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

              //localStorage.getItem(timeBlock.children(2).text?);
  
  // TODO: Add code to display the current date in the header of the page.
});

//use data hour to traverse throuhg on each thing