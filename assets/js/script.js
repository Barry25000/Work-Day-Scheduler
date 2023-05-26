
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // getFromStorage();
  var storedText
  // code to display the current date in the header of the page.
  var currentDay = $("#currentDay");
  currentDay.text(dayjs().format("MMM D, YYYY"));

  // get current hour for past, present and future.
  var currentHour = dayjs().hour();
  console.log(currentHour);

  // listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //Takes an array of events and saves them to local storage.


  $('.time-block').on('click', '.saveBtn', function () {
    var description = $(this).siblings('.description').val();
    var buttonId = $(this).parent().attr("id");
    // console.log(description);
    localStorage.setItem(buttonId, description);

  });


  // need a for loop to extract the data from the array, looking for parent element(time block info) snd value (textarea info). I need to apend all the info into 1 element and then save in local storage


  

  // code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  $(".time-block").each(function () {
    console.log($(this));

    if ($(this).attr("id") < currentHour) {
      //this gets the future class
      $(this).addClass("past")
    }

    if ($(this).attr("id") == currentHour) {
      //this gets the present class
      $(this).addClass("present")
    }


    if ($(this).attr("id") > currentHour) {
      //this gets the future class
      $(this).addClass("future")
    }


  })


  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for (var t = 9; t < 18; t++) {
    $('#' + t + ' textarea').val(localStorage.getItem(t))
  }
  

});

