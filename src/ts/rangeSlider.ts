
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
		this.view.className = 'toddler'

		this.view.addEventListener("click", () => alert("Hello, bitches!"))
	};
};




const rangeApp = new Slider(document);











