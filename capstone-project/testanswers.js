'use strict';

function checkAnswers() {
	// Get the input values
	let q1 = document.querySelector('input[name="q1"]:checked');
	let q2 = document.querySelector('input[name="q2"]:checked');
	let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');
    let q6 = document.querySelector('input[name="q6"]:checked');
    let q7 = document.querySelector('input[name="q7"]:checked');
    let q8 = document.querySelector('input[name="q8"]:checked');
    let q9 = document.querySelector('input[name="q9"]:checked');
    let q10 = document.querySelector('input[name="q10"]:checked');
    let q11 = document.querySelector('input[name="q11"]:checked');
    let q12 = document.querySelector('input[name="q12"]:checked');

	// Check the answers
	let correctAnswers = ["a", "c", "a", "a", "a", "c", "a", "b", "c", "d", "c", "c"];
	let userAnswers = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];

	let numCorrect = 0;
	for (let i = 0; i < correctAnswers.length; i++) {
		if (userAnswers[i] && userAnswers[i].value === correctAnswers[i]) {
			numCorrect++;
		}
	}

	// Display the result
	let result = document.getElementById("result");
    if (numCorrect >= 9) {
        result.innerHTML = "You got " + numCorrect + " out of " + correctAnswers.length + " questions correct!";
    } else {
        result.innerHTML = "You got " + numCorrect + " out of " + correctAnswers.length + " questions correct.";
    }
    document.querySelector('#submitButton').disabled = true;
}
