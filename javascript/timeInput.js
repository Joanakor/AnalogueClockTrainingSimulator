const hourInput = document.getElementById('hour-input');
const minuteInput = document.getElementById('minute-input');

hourInput.addEventListener('input', (event) => {
	let hourValue = hourInput.value.replace(/[^0-9]/g, ''); // Remove non-digit characters

	if (hourValue.length === 1) {
		// If a single digit is entered, pad it with zero
		hourValue = '0' + hourValue;
	}

	if ((hourValue[0] === '0' && (hourValue[1] === '1' || hourValue[1] === '0')) && hourValue.length === 3) {
		// If there are two digits, swap them
		hourValue[0] = '';
		hourValue = hourValue[1] + hourValue[2];
	}

	if (parseInt(hourValue) >= 12) {
		hourValue = 11;
	}

	if (hourValue[1] !== '1' || hourValue === '11') {
		minuteInput.focus();
	}

	hourInput.value = hourValue;
})

hourInput.addEventListener('keydown', (event) => {
		if (event.key === 'Backspace') {
			const cursorPosition = hourInput.selectionStart;

			if (cursorPosition === 2) {
				event.preventDefault(); // Prevent default backspace behavior
				hourInput.value = ''; // Clear the input when backspace is pressed at the second position
			}
 		}
		else if (event.key === 'ArrowRight') {
			// Move focus to the minute input field when right arrow is pressed
			if (hourInput.selectionStart === hourInput.value.length) {
				event.preventDefault();
				minuteInput.focus();
				minuteInput.setSelectionRange(0, 0); // Set cursor at the beginning of minute input
			}
		}
});

minuteInput.addEventListener('input', (event) => {
	let minuteValue = minuteInput.value.replace(/[^0-9]/g, ''); // Remove non-digit characters

	if (minuteValue.length === 1 && minuteValue[0] !== '0') {
		// If a single digit is entered, pad it with zero
		minuteValue = '0' + minuteValue;
	}

	if (minuteValue[0] === '0' && minuteValue.length === 3) {
		// If there are two digits, swap them
		minuteValue = minuteValue[1] + minuteValue[2];
	}

	if (minuteValue.length === 3) {
		minuteValue = minuteValue[0] + minuteValue[1];
	}

	if (parseInt(minuteValue) >= 60) {
		minuteValue = 59;
	}

	// if (minuteValue === '00') {
	// 	// If there are two digits, swap them
	// 	minuteValue = '';
	// }

	
	minuteInput.value = minuteValue;
})


minuteInput.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        const cursorPosition = minuteInput.selectionStart;

        // If the cursor is at the start and the minute input is empty, clear the hour input
        if (cursorPosition === 0 && minuteInput.value === '') {
            event.preventDefault(); // Prevent default backspace behavior
            hourInput.value = ''; // Clear the hour input
            hourInput.focus(); // Focus on the hour input
            hourInput.setSelectionRange(hourInput.value.length, hourInput.value.length); // Move cursor to the end of hour input
        }
    } else if (event.key === 'ArrowLeft') {
        // Move focus to the hour input field when left arrow is pressed
        if (minuteInput.selectionStart === 0) {
            event.preventDefault();
            hourInput.focus();
            hourInput.setSelectionRange(hourInput.value.length, hourInput.value.length); // Set cursor at the end of hour input
        }
    }
});



// 	if (value.length === 1) {
// 		// If a single digit is entered, pad it with zero
// 		value = '0' + value;
// 	}


// 	if ((value[0] === '0' && value[1] === '1') && value.length === 3) {
// 		// If there are two digits, swap them
// 		value[0] = '';
// 		value = value[1] + value[2];
// 		console.log(1);
// 	}

// 	//012345
// 	console.log(value[3] === '0' && value.length === 6);
// 	if (value[3] === '0' && value.length === 6) {
// 		// If there are two digits, swap them
// 		value[3] = value[4];
// 		value[4] = value[5];
// 		value[6] = '';
// 		value = value[1] + value[2];
		
// 	}

// 	if (value.length >= 2) {
// 		// Automatically insert ':'
// 		value = value.slice(0, 2) + ':' + value.slice(2, 5);
// 	}
	

// 	timeInput.value = value;
// });

// timeInput.addEventListener('keydown', (event) => {
// 	if (event.key === ':') {
// 		event.preventDefault(); // Prevent ':' from being typed manually
// 	}

// 	// Allow backspacing through the ':'
// 	if (event.key === 'Backspace' && timeInput.value.charAt(timeInput.selectionStart - 1) === ':') {
// 		// Remove ':' and adjust cursor position
// 		event.preventDefault();
// 		let newValue = timeInput.value.substring(0, timeInput.selectionStart - 2) +
// 					   timeInput.value.substring(timeInput.selectionStart);
// 		timeInput.value = newValue;
// 		timeInput.setSelectionRange(timeInput.selectionStart, timeInput.selectionStart);
// 	}

// 	if (event.key === 'ArrowRight') {
//         // Move cursor to position after ':' and append '00' if necessary
//         const cursorPosition = timeInput.selectionStart;
//         const value = timeInput.value;

//         if (cursorPosition === 3 && value[cursorPosition - 1] === ':') {
//             event.preventDefault(); // Prevent default behavior

//             // Check if seconds part is empty and fill it with '00'
//             if (value.length === 3) { // Length is 3 when it ends with ':'
//                 timeInput.value += '0';
//             }

//             // Move cursor past ':'
//             timeInput.setSelectionRange(4, 4);
//         }
//     }
// });