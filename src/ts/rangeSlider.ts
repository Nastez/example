class rangeSlider {
	slider: object;
	scale: object;
	toddler: object;

	constructor(slider: object, scale: object, toddler: object) {
		this.slider = slider
		this.scale = scale
		this.toddler = toddler
	};
};

class slider {
	app: HTMLElement = document.body;
	slider: HTMLDivElement = document.createElement('div');

	constructor() {
		this.slider.className = 'slider'
	}
};

class scale extends slider {
	scale: HTMLDivElement = document.createElement('div');
	constructor() {
		super()
		this.scale.className = 'scale'
		this.slider.append(this.scale)
	}
};

class toddler extends scale {
	toddler: HTMLDivElement = document.createElement('div');
	constructor() {
		super()
		this.app.append(this.slider)
		this.toddler.className = 'toddler'
		this.slider.append(this.toddler)
	}
};

const rangeApp = new rangeSlider(new slider(), new scale(), new toddler());












