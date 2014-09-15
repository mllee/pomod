//Pomodoro Timer
//Background Script
//$(document).ready(function() {
var APP_CLOCK = {}; // set up global object for cross script comms

chrome.runtime.onMessage.addListener( function(message, sender, response) {
	console.log("Message Testing");
	turnOnClock();
})

function turnOnClock() {
	console.log("background clock running!");

	var d = new Date(); //1000ms x 60sec x 50min
	var endworktime = d.getTime() + (1000*60*50);

	var current_time;
	var seconds_left;

	setInterval(function() { 

		current_time = new Date().getTime();
		seconds_left = (endworktime - current_time) / 1000;
		
		APP_CLOCK.time = seconds_left;
	}, 100)
};