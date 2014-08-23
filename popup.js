//Pomodoro Timer Script

(function ($) {
   $(document);
}(jQuery));

$(document).ready(function() {

	var d = new Date(0)
	var endworktime = document.getElementbyId("clock").innerHTML = d.getTime();
	endworktime += (3000000) // Add 50 minutes

	var clock = document.getElementbyId("clock");

	var hours, minutes, seconds

	function runclock() {
		setInterval(function() {
			var current_time = new Date().getTime();
			var seconds_left = (endworktime - current_time) / 1000;

			hours = parseInt(seconds_left / 3600);
			seconds_left = seconds_left % 3600;

			minutes = parseInt(seconds_left / 60);
			seconds = parseInt(seconds_left % 60);

			var newtime = " " + hours + "h, " + minutes + "m, " + seconds + "s";

			clock.innerHTML = newtime;

		}, 1000)
	}


    $('button').click(function() {
    	runclock();
    });
});


