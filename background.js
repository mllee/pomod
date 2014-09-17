//Pomodoro Timer
//Background Script
//$(document).ready(function() {

chrome.runtime.onMessage.addListener( function(message, sender, response) {
	console.log("onMessage listener activated");
	saveStartTime();
});

function saveStartTime() {
	console.log("saveStartTime() running");
	var d;

	if (!localStorage.getItem('time_started')) {
		d = new Date();
		localStorage.setItem("time_started", d.toString());
	}
}