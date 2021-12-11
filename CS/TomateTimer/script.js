const TOMATE_MINUTES = 25;

const timer = document.querySelector('.timer');
const startTomatoBtn = document.querySelector('.start-tomate-btn');

let minutes = TOMATE_MINUTES;
let seconds = 0;
let timeIsUp = false;

//run the setuptimer function everytime the
function updateTimer() {
	setInterval(function () {
		if (seconds == 0) {
			minutes--;
			seconds = 60;
		}
		seconds--;
		timer.innerHTML = `${minutes}:${
			seconds < 10 ? `0${seconds}` : seconds
		}`;
		if (minutes == 24 && seconds == 50) {
			timeIsUp = true;
			const audio = new Audio('01 Track 1.mp3');
			audio.play();
		}
	}, 1000);
}

s;

// play an audio when timer gets to
