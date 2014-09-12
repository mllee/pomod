//Pomodoro Timer
//Popup Script


$(document).ready(function() {

	// Set up the Message passing 
	var port = chrome.runtime.connect({name: "timer"});
	// Set up a listener that will update the clock
	port.onMessage.addListener(function(msg) {
			document.getElementById("clock").innerHTML = msg;
	 	});


    $('button').click(function() {
    	turnOnClock();
    });
});


