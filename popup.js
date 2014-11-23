//Pomodoro Timer
//Popup Script

//window.open("background.js","bg","background");

//var backgroundpage = chrome.extension.getBackgroundPage();
//var APP_CLOCK = backgroundpage.APP_CLOCK; // for cross script

console.log("popup.js now running");

$(document).ready(function() {
	//localStorage.clear(); // for development purposes.

	var port = chrome.runtime.connect({name: "blocker"});
	port.postMessage({time: "test"});


	if (!localStorage.getItem("extra_time")) {
		localStorage.setItem("extra_time", 0);
	}
	if (localStorage.getItem("time_started")) {
		updateClock();
	}

	$("#plus1").click(function() {
		console.log("Adding 30 min");
		startClock(30);
	})
	$("#plus2").click(function() {
		console.log("Adding 60 min");
		startClock(60);
	})
	$("#plus3").click(function() {
		console.log("Adding 90 min");
		startClock(90);
	})

	function startClock(added_time) {
		var user_input = parseInt(localStorage.getItem("extra_time"));
		var user_input = user_input + 60000*added_time;
		localStorage.setItem("extra_time", user_input);

		if (!localStorage.getItem('time_started')) {
			d = new Date();
			localStorage.setItem("time_started", d.toString());
		}
 	   	setTimeout(function(){
 	   		updateClock();
 	   	}, 10);
	}


});

function updateClock() {
	console.log("updateClock() running");

	var endworktime;
	var hours, minutes, seconds;
	var seconds_left, current_time;
	var mainClockTime;
	var totalClockTime;

	setInterval(function() {

		//console.log("A:"+Date.parse(localStorage.getItem('time_started')));
        //console.log("B:"+parseInt(localStorage.getItem('extra_time')));

		endworktime = Date.parse(localStorage.getItem('time_started'))
			+ parseInt(localStorage.getItem('extra_time'));
        localStorage.setItem("endtime", endworktime);
        // endwork time is an integer string

		seconds_left = calculateTime(endworktime);

		// 2 function calls here
		mainClockTime = mainClock(seconds_left);
		totalClockTime = totalClock(seconds_left);

		document.getElementById("total_clock").innerHTML = totalClockTime;
		document.getElementById("main_clock").innerHTML = mainClockTime;

		if (seconds_left <= 0) {
			localStorage.removeItem("time_started");
			localStorage.removeItem("extra_time");
			document.getElementById("total_clock").innerHTML = "Time's Up!";
			document.getElementById("main_clock").innerHTML = "0:00";
			return;
		}
	}, 1000);
}


// Calculates the time left and parses it into a string.
function calculateTime(endworktime) {
	current_time = new Date();
	current_time = current_time.getTime();
	seconds_left = (endworktime - current_time)/1000;

	return seconds_left;
}

function mainClock(seconds_left) {
	// parses out time that's not in this immediate cycle
	seconds_left = seconds_left % (1800);

	minutes = parseInt(seconds_left / 60);
	seconds = parseInt(seconds_left % 60);

	if (minutes >= 5) {
		minutes = minutes-5;
	}

	mainClockTime = minutes + ":" + seconds;
	return mainClockTime;
}

function totalClock(seconds_left) {
	hours = parseInt(seconds_left / 3600);
	seconds_left = seconds_left % 3600;
	minutes = parseInt(seconds_left / 60);
	seconds = parseInt(seconds_left % 60);

	totalClockTime = " " + hours + ":" + minutes + ":" + seconds;
	return totalClockTime;
}


//localStorage.clear();
