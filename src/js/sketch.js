import ml5 from 'ml5';

const sketch = (p) => {
	const height = window.innerHeight;
	const width = window.innerWidth;

	console.log(width, height)
	
	// run at setup
	p.setup = () => {
		console.log('setup');

		p.createCanvas(width, height);
		p.textSize(width/7);
		p.textAlign('CENTER', 'CENTER');
	}

	// draw function
	p.draw = () => {
		p.background(200);
		p.text(ml5.version, width/2, height/2);
	}

	p.windowResized = () => {
		console.log('resize!');
		p.resizeCanvas(window.innerWidth, window.innerHeight)
	}
}


export default sketch;