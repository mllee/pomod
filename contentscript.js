//Pomodoro Timer Script


$(document).ready(function() {


	var d = new Date()
	var endworktime = d.getTime() + (1000*60*50) //1000ms x 60sec x 50min

	var hours, minutes, seconds


	//function runclock() {
		var port = chrome.runtime.connect({name: "timer"});
		port.onMessage.addListener(function(msg) {
			document.getElementById("clock").innerHTML = msg;
		});
		//This function has been moved to content script
		/*
		setInterval(function() {
			var current_time = new Date().getTime();
			var seconds_left = (endworktime - current_time) / 1000;

			hours = parseInt(seconds_left / 3600);
			seconds_left = seconds_left % 3600;

			minutes = parseInt(seconds_left / 60);
			seconds = parseInt(seconds_left % 60);

			var newtime = " " + hours + "h, " + minutes + "m, " + seconds + "s";

			port.postMessage({time: newtime});

		}, 500)
		*/
	//}

    $('button').click(function() {
    	//runclock();
    	
    });
});


