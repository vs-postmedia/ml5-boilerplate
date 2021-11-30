// CSS
import normalize from './css/normalize.css';
import colours from './css/colors.css';
import fonts from './css/fonts.css';
import css from './css/main.css';

// JS
import p5 from 'p5';
import sketch from './js/sketch.js'


const init = async () => {
	console.log('hello, ml5');

	// Initializing p5.js
	// p5 requires two arguments: new p5(sketch function, target DOM element)
	new p5(sketch, document.getElementById('app'))
};

init();