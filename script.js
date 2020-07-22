//write text in text-area/check
//capture text field values in local storage so that they stay on page after refresh
//add moment.js to header for current day/check
//add event listener for button and capture data in local storage
//color code block for past, present, future

var currentDay = document.getElementById("currentDay");
var saveButton = document.getElementsByClassName("btn");
var timeSlot = {};
var timeArray = ["input-9", "input-10", "input-11", "input-12", "input-13", "input-14", "input-15", "input-16", "input-17"];


function getCurrentDay() {
    let now = moment().format('LL'); 
    return(now);
};
//end getCurrentDay fnct def

var displayCurrentDay = function() {
    $(currentDay).append(getCurrentDay);
}
//end of displayCurrentDay


var saveTextInput = function() {
    // var textInput = document.getElementById("input-event").value;
    // console.log(textInput);
    var j = 9
    for (var i=0; i < timeArray.length; i++) {
        var value = document.getElementById(timeArray[i]).value
        console.log(value)
        if (value !== "") {
            var key = "btn-" + j;
            timeSlot[key] = value;
            localStorage.setItem('timeSlot', JSON.stringify(timeSlot))
            
        }
        j++

    }
    
};

var getTextInput = function() {
    var timeSlot = JSON.parse(localStorage.getItem('timeSlot'));
    var j = 9
    
    for (var i = 0; i < timeArray.length; i++) {
        var element = document.getElementById(timeArray[i])
        
        element.value = timeSlot["btn-" + j];
        
        j++
    }
    
    //for loop , loop thru timeSlot, i < timeSlot, set each value to the corresponding input id
};



getCurrentDay();
displayCurrentDay();

for (var i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", saveTextInput)
}
 
getTextInput();