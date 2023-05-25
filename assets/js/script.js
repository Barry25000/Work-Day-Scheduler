
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // Add code to display the current date in the header of the page.
  var currentDay = $("#currentDay");
  currentDay.text(dayjs().format("MMM D, YYYY"));
  
    // get current hour for past, present and future.
  var currentHour=dayjs().format('h');
  console.log(currentHour);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    $('.saveBtn').on("click", function(e){
      e.preventDefault();
      
      var description = $(".description");
      saveEventsToStorage();
      console.log(description);
      aClass()
      // var will =$(".description").parent()
      // console.log(will);
    })
    
    //Takes an array of events and saves them to local storage.
          // need a for loop to extract the data from the array, looking for parent element(time block info) snd value (textarea info). I need to apend all the info into 1 element and then save in local storage
          
    function saveEventsToStorage(description) {
      localStorage.setItem('description', JSON.stringify(description));
      // console.log(localStorage);
      // $('#top').parents();
      // console.log($('#top').parents());
    }

    
  
  
  
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    $(".time-block").each(function(){
      console.log($(this).attr("id"));
      if ($(this).attr("id") == currentHour) {
        //this gets the present class
        $(this).addClass("present")
      }
      
      if ($(this).attr("id") < currentHour){
        //this gets the future class
        $(this).addClass("past")
      }
      
      if ($(this).attr("id") > currentHour){
        //this gets the future class
        $(this).addClass("future")
      }
      

    })
    
    // function aClass() {
      
    //   var x=1
      
    //   if (x = 1) {
    //     $('.textarea').addClass('present');
    //   }
    // }
      
    

    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    
  });
  
  