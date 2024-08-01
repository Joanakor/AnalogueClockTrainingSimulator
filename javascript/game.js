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
		let timeRemained; // for the game timer
			
		// Remove Start button and showe game input form
		startButton.style.display = 'none';
		gameInputs.style.display = 'block';
		timer.style.display = 'block';    
		scoreField.style.display = 'block';

		document.querySelector('.congratulation').textContent = '';
		timer.textContent = '01:00';
		scoreField.textContent = '0';

		startTimer(10, timer);

		updateClock();

		// Correct time is shown in console log for testing for now
		console.log(answerTime);

		gameForm.elements['time'].focus();

		let submitButton = gameForm.elements['submit-answer'];

		// On Enter key the answer in the input field is compared to the correct answer
		inputs.forEach(input => {
			input.addEventListener('keydown', function(event) {
				if (event.key === 'Enter') {
					event.preventDefault();
					checkAnswer(event);
				}
			});
		});

		// The input field is also compared if we click Sublit button
		submitButton.onclick = checkAnswer;

		// Checks answer in the inut field with the actual answer and updates the correct answer if the submission was correct (with UpdateClock())
		function checkAnswer(event) {
			event.preventDefault();
			
			let answer = gameForm.elements['time'].value;

			if (answer === answerTime) {
				score++;
				scoreField.textContent = score;
				updateClock();
				gameForm.elements['time'].value = '';
				console.log(answerTime);
				console.log(timeRemained);
			}
		}

		// Turns passed element in a timer
		function startTimer(duration, display) {
            let timer = duration, minutes, seconds;
            let interval = setInterval(function () {
                minutes = Math.floor(timer / 60);
                seconds = timer % 60;

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

				
                timeRemained = display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    clearInterval(interval);
					endGame();
                }
            }, 1000);
        }

		// Updates the correct answer
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

		function endGame()
		{
			startButton.style.display = 'block';
			gameInputs.style.display = 'none';
			timer.style.display = 'none';    
			scoreField.style.display = 'none';

			document.querySelector('.congratulation').textContent = 'Your score is ' + score;
		}
	}
}

