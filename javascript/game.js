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
	let gameInput = document.querySelector('#game-inputs');
	let timer = document.querySelector('.timer');
	let scoreField = document.querySelector('.score');

	startButton.onclick = game;

	function game(event)
	{
		event.preventDefault();

		let answerTime = "17:05";
		let score = 0;
			
		startButton.style.display = 'none';
		gameInput.style.display = 'block';
		timer.style.display = 'block';
		scoreField.style.display = 'block';

		gameForm.elements['time'].focus();

		let submitButton = gameForm.elements['submit-answer'];

		submitButton.onclick = checkAnswer;

		function checkAnswer(event) {
			event.preventDefault();

			console.log("1");
			
			let answer = gameForm.elements['time'].value;

			if (answer === answerTime) {
				score++;
				scoreField.textContent = score;
			}
		}
	}
}

