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

	let doc = document;
	let gameForm = doc.querySelector('.game-form');
	let startButton = gameForm.elements['start-button'];
	let gameInput = doc.querySelector('#game-inputs');
	let timer = doc.querySelector(".timer");
	let score = doc.querySelector(".score");

	startButton.onclick = game;

	function game(event)
	{
		event.preventDefault();

		startButton.style.display = "none";
		gameInput.style.display = "block";
		timer.style.display = "block";
		score.style.display = "block";

		let answerButton = gameForm.elements["submit-answer"];

		// console.log('Hello World!');
	}
}

