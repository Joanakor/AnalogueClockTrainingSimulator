/* game.js
================================================
Script for the whole game
================================================ */
'use strict';

window.onerror=function(message,url,line) {
alert(`Error: ${message}\n${url}: ${line}`);
};

init();

function init() {


	let gameForm = document.querySelector('.game-form');
	let startButton = gameForm.elements['start-button'];
	let gameInputs = document.querySelector('#game-inputs');
	let timer = document.querySelector('.timer');
	let scoreField = document.querySelector('.score');

	// Prevent form submission on Enter key press
	gameForm.addEventListener('submit', function(event) {
		event.preventDefault();
	});

	// Prevent Enter key from submitting the form in input fields
	const inputs = gameForm.querySelectorAll('input');

	startButton.onclick = game;

	function game(event)
	{
		
		event.preventDefault();

		let answerTime;
		let score = 0;
			
		startButton.style.display = 'none';
		gameInputs.style.display = 'block';
		timer.style.display = 'block';
		scoreField.style.display = 'block';

		startTimer(60, timer);

		updateClock();
		console.log(answerTime);

		gameForm.elements['time'].focus();

		let submitButton = gameForm.elements['submit-answer'];

		inputs.forEach(input => {
			input.addEventListener('keydown', function(event) {
				if (event.key === 'Enter') {
					event.preventDefault();
					checkAnswer(event);
				}
			});
		});

		submitButton.onclick = checkAnswer;

		function checkAnswer(event) {
			event.preventDefault();
			
			let answer = gameForm.elements['time'].value;

			if (answer === answerTime) {
				score++;
				scoreField.textContent = score;
				updateClock();
				gameForm.elements['time'].value = '';
				console.log(answerTime);
			}
		}

		function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            let interval = setInterval(function () {
                minutes = Math.floor(timer / 60);
                seconds = timer % 60;

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    clearInterval(interval);
                    display.textContent = "Time's up!";
                }
            }, 1000);
        }

		function updateClock()
		{
			let hours, minutes;

			hours = Math.floor(Math.random()*24)+1;
			if(String(hours).length === 1) {
				hours = '0' + hours;
			}

			minutes = Math.floor(Math.random()*60)+1;

			if(String(minutes).length === 1) {
				minutes = '0' + minutes;
			}

			answerTime = hours + ':' + minutes;
		}
	}
}

