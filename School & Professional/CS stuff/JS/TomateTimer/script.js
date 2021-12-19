const TOMATE_MINUTES = 25;

const timerEl = document.querySelector('.timer');
const startTomateBtn = document.querySelector('.start-tomate-btn');

let minutes = TOMATE_MINUTES;
let seconds = 0;
let timerIsRunning = false;

//run the setuptimer function everytime the
startTomateBtn.addEventListener('click', () => {
	initialSetup(timerEl);
	setInterval(function () {
		if (!timerIsRunning) return;
		// time is up!
		if (minutes == 0 && seconds == 0) {
			handleTimeIsUp();
			return;
		}
		// if seconds is 0, decrease minutes and get seconds back to 60
		if (seconds == 0) {
			minutes--;
			seconds = 60;
		}
		seconds--;
		updateTimerText(timerEl, minutes, seconds);
	}, 1000);
});

const updateTimerText = function (timerEl, minutes, seconds) {
	timerEl.textContent = `${minutes}:${
		seconds < 10 ? `0${seconds}` : seconds
	}`;
};

const initialSetup = function (timerEl) {
	timerIsRunning = true;
	minutes = TOMATE_MINUTES;
	seconds = 0;
	updateTimerText(timerEl, minutes, seconds);
};

const handleTimeIsUp = function () {
	alert('time to take a short break buddy!');
	timerIsRunning = false;
};
