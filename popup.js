//Pomodoro Timer
//Popup Script

//window.open("background.js","bg","background");

var backgroundpage = chrome.extension.getBackgroundPage();
var APP_CLOCK = backgroundpage.APP_CLOCK; // for cross script

console.log("popup.js now running");
	

$(document).ready(function() {
	if (APP_CLOCK.isrunning) {
		updateClock();
	}
	else {
		$('button').click(function() {
			//document.getElementById('start').setEnabled = false;
			console.log("Button Clicked");
 	   		chrome.runtime.sendMessage({command: "turnon"});
 	   		updateClock();
		})
	}
});

function updateClock() {
	console.log("Popup updating");
	var hours, minutes, seconds;
	var newtime;

	setInterval(function() {
		seconds_left = APP_CLOCK.time;

		hours = parseInt(seconds_left / 3600);
		seconds_left = seconds_left % 3600;
		minutes = parseInt(seconds_left / 60);
		seconds = parseInt(seconds_left % 60);
		newtime = " " + hours + "h, " + minutes + "m, " + seconds + "s";

		document.getElementById("clock").innerHTML = newtime;
	}, 100);
}

