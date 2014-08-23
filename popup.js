//Pomodoro Timer Script


$(document).ready(function() {


	var d = new Date()
	var endworktime = d.getTime() + 3000000 // Add 50 minutes

	var hours, minutes, seconds


	function runclock() {
		setInterval(function() {
			var current_time = new Date().getTime();
			var seconds_left = (endworktime - current_time) / 1000;

			hours = parseInt(seconds_left / 3600);
			seconds_left = seconds_left % 3600;

			console.log("debugseconds: " + seconds_left);

			minutes = parseInt(seconds_left / 60);
			seconds = parseInt(seconds_left % 60);

			var newtime = " " + hours + "h, " + minutes + "m, " + seconds + "s";

			document.getElementbyId("clock").innerHTML = newtime;
			// Is it more efficent to make this a var?

		}, 1000)
	}


    $('button').click(function() {
    	runclock();
    });
});


