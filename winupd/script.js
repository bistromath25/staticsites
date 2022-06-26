// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
// https://stackoverflow.com/questions/6962658/randomize-setinterval-how-to-rewrite-same-random-after-random-interval

let percent = 21;

document.addEventListener('keydown', function(e) {
	if (e.key === 'm') {
	    toggleFullScreen();
	} else {
		e.preventDefault();
	}
}, false);

function toggleFullScreen() {
	if (!document.fullscreenElement) {
   	 	document.documentElement.requestFullscreen();
  	} else {
    	if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
}

function updatePercent() {
	if (percent < 99) percent++;
	document.getElementById('percent').innerHTML = percent;
	
	if (percent < 40) {
		document.getElementById('message-1').innerHTML = "Configuring updates for Windows 10";
		document.getElementById('message-2').innerHTML = "Please keep your computer on and plugged in";
	} else if (percent < 70) {
		document.getElementById('message-1').innerHTML = "Working on updates";
		document.getElementById('message-2').innerHTML = "Please keep your computer on";
	} else {
		document.getElementById('message-1').innerHTML = "Working on updates";
		document.getElementById('message-2').innerHTML = "Don't turn off your computer";
	}
}

(function loop() {
	var interval = Math.floor(Math.random() * 20000) + 500;
	console.log(interval);
	setTimeout(function() {
		updatePercent();
		loop();
	}, interval); 
}());