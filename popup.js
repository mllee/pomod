//Pomodoro Timer
//Popup Script

//window.open("background.js","bg","background");

//var backgroundpage = chrome.extension.getBackgroundPage();
//var APP_CLOCK = backgroundpage.APP_CLOCK; // for cross script

console.log("popup.js now running");
	

$(document).ready(function() {
	// If the timer has not been set yet
	if (!localStorage.getItem('time_started', function(){})) {
		$('button').click(function() {
 	   		chrome.runtime.sendMessage({command: "start_time"});	
 	   		updateClock();
 	   	})
	}
	else { // If the timer has already been started
		updateClock();
	}
});

function updateClock() {
	console.log("updateClock() running");

	var endworktime = Date.parse(localStorage.getItem('time_started')) + 1000*50*60;
	
	var hours, minutes, seconds;
	var newtime, current_time;

	setInterval(function() {
		current_time = new Date();
		current_time = current_time.getTime();
		seconds_left = (endworktime - current_time)/1000 ;

		hours = parseInt(seconds_left / 3600);
		seconds_left = seconds_left % 3600;
		minutes = parseInt(seconds_left / 60);
		seconds = parseInt(seconds_left % 60);
		newtime = " " + hours + "h, " + minutes + "m, " + seconds + "s";

		document.getElementById("clock").innerHTML = newtime;
	}, 100);
}

