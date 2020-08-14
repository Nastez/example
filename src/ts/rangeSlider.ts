/*
class Slider {
	doc: Document;
	scale: Scale;
	toddler: Toddler;
	coloredScale: ColoredScale;

	constructor(doc: Document) {
		this.doc = doc;
		this.scale = new Scale(doc);
		this.toddler = new Toddler(doc);
		this.coloredScale = new ColoredScale(doc);

		let sliderView = doc.getElementsByClassName('slider')[0];
		sliderView.appendChild(this.scale.view);
		sliderView.appendChild(this.toddler.view);
		sliderView.appendChild(this.coloredScale.view);

		let scaleView = this.scale.view;

		let toddlerView = this.toddler.view;

		this.toddler.view.addEventListener('mousedown', mouseDown, false);

		window.addEventListener('mouseup', mouseUp, false);

		function mouseUp() {
			window.removeEventListener('mousemove', move, true);
		};

		function mouseDown() {
			window.addEventListener('mousemove', move, true);
		};

		function move(event: any) {
			if (event.clientX > 0 && event.clientX <= scaleView.clientWidth - toddlerView.clientWidth) {
				toddlerView.style.left = event.clientX + 'px';
			}
		};
	}
};

class Scale {
	view: HTMLDivElement;

	constructor(doc: Document) {
		this.view = doc.createElement('div');
		this.view.className = 'scale'
	}
};

class Toddler {
	view: HTMLDivElement;

	constructor(doc: Document) {
		this.view = doc.createElement('div');
		this.view.className = 'toddler';
		this.view.id = 'handler';
	};
};

class ColoredScale {
	view: HTMLDivElement;

	constructor(doc: Document) {
		this.view = doc.createElement('div');
		this.view.className = 'coloredScale';
	}
};

const rangeApp = new Slider(document);

*/










