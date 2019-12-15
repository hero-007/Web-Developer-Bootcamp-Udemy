// all functions
function initSquares() {
	for (var i = 0; i < squareList.length; i++) {
		squareList[i].style.backgroundColor = color[i];

		// adding event handler to all the squares
		squareList[i].addEventListener('click', function() {
			var cl = this.style.backgroundColor;
			if (cl !== selectedColor) {
				this.style.backgroundColor = '#232323';
				displayMessage.textContent = 'Try Again';
			} else {
				displayMessage.textContent = 'Correct!';
				// change the color of all the squares to match the right answer
				h1.style.backgroundColor = selectedColor;
				reset.textContent = 'Play Again?';
				changeAllSquare();
			}
		});
	}
}

function changeAllSquare() {
	for (var j = 0; j < squareList.length; j++) {
		squareList[j].style.backgroundColor = selectedColor;
	}
}

function pickRandomColor() {
	return Math.floor(Math.random() * color.length);
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		// generate random color and push it into array
		arr.push(generateColor());
	}

	return arr;
}

function generateColor() {
	var red_content = Math.floor(Math.random() * 256); // generate a random value between 0 - 255
	var green_content = Math.floor(Math.random() * 256); // generate a random value between 0 - 255
	var blue_content = Math.floor(Math.random() * 256); // generate a random value between 0 - 255
	var cl = 'rgb(' + red_content + ', ' + green_content + ', ' + blue_content + ')';
	return cl;
}

function myDebug() {
	for (var k = 0; k < color.length; k++) console.log(color[k]);

	console.log(selectedColor);
}

var numSquares = 6;

var color = generateRandomColors(numSquares);

var selectedColor = color[pickRandomColor()];
var displayMessage = document.querySelector('#display-message');
var target = document.getElementById('target');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var squareList = document.querySelectorAll('.square');
var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var container = document.querySelector('#container');

target.textContent = selectedColor;

initSquares(); // this will initialize all the squares and add eventlistener to them

//myDebug();
reset.addEventListener('click', function() {
	reset.textContent = 'New Colors';
	displayMessage.textContent = '';
	color = generateRandomColors(numSquares);
	selectedColor = color[pickRandomColor()];
	target.textContent = selectedColor;
	h1.style.backgroundColor = 'steelblue';
	initSquares();
});

easy.addEventListener('click', function() {
	// numSquares = 3
	easy.classList.add('selected');
	hard.classList.remove('selected');

	numSquares = 3;
	container.innerHTML = '<div class="square"></div><div class="square"></div><div class="square"></div>';
	reset.textContent = 'New Colors';
	displayMessage.textContent = '';
	squareList = document.querySelectorAll('.square');
	color = generateRandomColors(numSquares);
	selectedColor = color[pickRandomColor()];
	target.textContent = selectedColor;
	h1.style.backgroundColor = 'steelblue';
	myDebug();
	initSquares();
});

hard.addEventListener('click', function() {
	// numSquares = 6
	easy.classList.remove('selected');
	hard.classList.add('selected');

	numSquares = 6;
	container.innerHTML =
		'<div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div>';
	reset.textContent = 'New Colors';
	displayMessage.textContent = '';
	squareList = document.querySelectorAll('.square');
	color = generateRandomColors(numSquares);
	selectedColor = color[pickRandomColor()];
	target.textContent = selectedColor;
	h1.style.backgroundColor = 'steelblue';
	initSquares();
});
