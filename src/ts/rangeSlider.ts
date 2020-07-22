
class Slider {
	doc: Document;

	scale: Scale;
	toddler: Toddler;

	constructor(doc: Document) {
		this.doc = doc;
		this.scale = new Scale(doc);
		this.toddler = new Toddler(doc);

		let sliderView = doc.getElementsByClassName('slider')[0];
		sliderView.append(this.scale.view, this.toddler.view);


		let scaleView = doc.getElementsByClassName('scale')[0];

		let toddlerView = doc.getElementById('handler');
		toddlerView!.addEventListener('mousedown', mouseDown, false); // Спросить про false/true

		scaleView.addEventListener('mouseup', mouseUp, false);

		function mouseUp() {
			scaleView.removeEventListener('mousemove', move, true);
		};

		function mouseDown() {
			scaleView.addEventListener('mousemove', move, true);
		};

		function move(event: any) {    // Спросить про тип
			toddlerView!.style.left = event.clientX + 'px';
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


const rangeApp = new Slider(document);












