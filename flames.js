
function getNames() {
	var firstPerson = document.getElementById('your-name').value.toLowerCase();
	var secondPerson = document.getElementById('dream-partner').value.toLowerCase();
	if((firstPerson=='')||(secondPerson=='')) {
		alert('Please put a name.');
	}
	return [firstPerson, secondPerson];
}

function nameToCharacterArray(peopleArray) {
	var firstPersonCharacterArray = peopleArray[0].split('');
	var secondPersonCharacterArray = peopleArray[1].split('');
	return [firstPersonCharacterArray, secondPersonCharacterArray];
}

function countCharacterMatches(peopleCharacterArray) {
	var firstPersonCharacterArray = peopleCharacterArray[0];
	var secondPersonCharacterArray = peopleCharacterArray[1];
	
	var charArray = firstPersonCharacterArray.filter(function(val) {
		return secondPersonCharacterArray.indexOf(val) !== -1;
    });

	return charArray.length;
}



var flames = [' FRIENDS', ' LOVERS', ' ANGRY', ' MARRIED', ' ENEMIES', ' SOULMATES']


function getFlames() {
	var peopleArray = getNames();
	var peopleCharacterArray = nameToCharacterArray(peopleArray);
	var numberOfMatchedCharacters = countCharacterMatches(peopleCharacterArray);
	console.log(numberOfMatchedCharacters);

	if (numberOfMatchedCharacters === 0) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[0] + '!';
	} else if (numberOfMatchedCharacters === 1) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[1] + '!';
	} else if (numberOfMatchedCharacters === 2) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[2] + ' at each other!';
	} else if (numberOfMatchedCharacters === 3) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[3] + '!';
	} else if (numberOfMatchedCharacters === 4) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[4] + '!';
	} else if (numberOfMatchedCharacters === 5) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[5] + '!';
	} else if (numberOfMatchedCharacters === 6) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[0] + '!';
	} else if (numberOfMatchedCharacters === 7) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[1] + '!';
	} else if (numberOfMatchedCharacters === 8) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[2] + ' at each other!';
	} else if (numberOfMatchedCharacters === 9) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[3] + '!';
	} else if (numberOfMatchedCharacters === 10) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[4] + '!';
	} else if (numberOfMatchedCharacters === 11) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[5] + '!';
	} else if (numberOfMatchedCharacters === 12) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[0] + '!';
	} else if (numberOfMatchedCharacters === 13) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[1] + '!';
	} else if (numberOfMatchedCharacters === 14) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[2] + ' at each other!';
	} else if (numberOfMatchedCharacters === 15) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[3] + '!';
	} else if (numberOfMatchedCharacters === 16) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[4] + '!';
	} else if (numberOfMatchedCharacters === 17) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[5] + '!';
	} else if (numberOfMatchedCharacters === 18) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[0] + '!';
	} else if (numberOfMatchedCharacters === 19) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[1] + '!';
	} else if (numberOfMatchedCharacters === 20) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[2] + ' at each other!';
	} else if (numberOfMatchedCharacters === 21) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[3] + '!';
	} else if (numberOfMatchedCharacters === 22) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[4] + '!';
	} else if (numberOfMatchedCharacters === 23) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[5] + '!';
	} else if (numberOfMatchedCharacters === 24) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[0] + '!';
	} else if (numberOfMatchedCharacters === 25) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[1] + '!';
	} else if (numberOfMatchedCharacters === 26) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[2] + ' at each other!';
	} else if (numberOfMatchedCharacters === 27) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[3] + '!';
	} else if (numberOfMatchedCharacters === 28) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[4] + '!';
	} else if (numberOfMatchedCharacters === 29) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[5] + '!';
	} else if (numberOfMatchedCharacters === 30) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[0] + '!';
	} else if (numberOfMatchedCharacters === 31) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[1] + '!';
	} else if (numberOfMatchedCharacters === 32) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[2] + ' at each other!';
	} else if (numberOfMatchedCharacters === 33) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[3] + '!';
	} else if (numberOfMatchedCharacters === 34) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[4] + '!';
	} else if (numberOfMatchedCharacters === 35) {
		document.getElementById("flames-result").innerHTML = 'You are' + flames[5] + '!';
	} 

}