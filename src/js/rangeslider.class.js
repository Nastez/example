
class RangeSlider {
	// @param id:string 
	// @param range: object
	// @param width: number
	// @param handles: array
	// @param displayValues: boolean

	constructor(options) {

		// Get container
		this.id = options.id;
		this.container = document.getElementById(this.id);

		// Set the default values

		this.range = (options.range) ? options.range : {
			min: 0,
			max: 100
		};
		this.width = (options.width) ? options.width : 150;
		this.handles = (options.handles) ? options.handles : [0];
		this.displayValue = (options.displayValue) ? options.displayValue : false;

		// pixels per unit
		this.pixelsPerUnit = this.width / (this.range.max - this.range.min);


		this.handleDOMs = [];

		this.init();

	}

	init() {
		this.container.style.width = this.width + "px";
		this.container.classList.add("range-slider");

		// Creating seekbar
		this.seekbar = document.createElement("div");
		this.seekbar.classList.add("seekbar");
		this.container.appendChild(this.seekbar);

		// Creating handles
		for (let i = 0; i < this.handles.length; i++) {
			let position = this.handles[i];
			let handle = new Handle(this, position, i);
			this.handleDOMs.push(handle);

		}
	}
}

class Handle {

	constructor(slider, position, index) {
		this.slider = slider;
		this.position = position;
		this.index = index;

		this.init();
	}

	init() {
		this.handle = document.createElement("div");
		this.handle.classList.add("handle");

		this.handle.style.left = (this.position - this.slider.range.min) * this.slider.pixelsPerUnit + "px";

		this.slider.container.appendChild(this.handle);

		if (this.slider.displayValue) {
			this.valueContainer = document.createElement("div");
			this.valueContainer.classList.add("value");
			this.valueContainer.innerHTML = this.position - this.slider.range.min;
			this.handle.appendChild(this.valueContainer);
		}
		this.handle.addEventListener("mousedown", (e) => this.onMouseDown(e));

		this.minLimit = 0;
		this.maxLimit = this.slider.width;

	}

	onMouseDown(e) {
		e = e || window.event;
		e.preventDefault();

		document.onmousemove = (e) => this.onMouseMove(e);
		document.onmouseup = (e) => this.onMouseUp(e);

		// find left side handle and set minimum limit
		if (this.index > 0) {
			this.minLimit = parseInt(this.slider.handleDOMs[this.index - 1].handle.style.left);
		} else {
			this.minLimit = 0;
		}

		// find right side handle and set maximum limit
		if (this.index < this.slider.handleDOMs.length - 1) {
			this.maxLimit = parseInt(this.slider.handleDOMs[this.index + 1].handle.style.left);
		} else {
			this.maxLimit = this.slider.width;
		}

	}

	onMouseMove(e) {
		e = e || window.event;
		e.preventDefault();

		this.moveHandle(e);
	}

	moveHandle(e) {
		let currentPos = parseInt(this.handle.style.left);

		if (currentPos < this.minLimit) {
			this.handle.style.left = this.minLimit + "px";
		} else if (currentPos > this.maxLimit) {
			this.handle.style.left = this.maxLimit + "px";
		} else {
			this.handle.style.left = e.movementX + currentPos + "px";
		}

		if (this.slider.displayValue) {
			let value = parseInt(this.handle.style.left) / this.slider.pixelsPerUnit;

			if (value < 0) {
				value = 0;
			}

			if (value > this.slider.range.max) {
				value = this.slider.range.max;
			}

			this.valueContainer.innerHTML = parseInt(value);
		}
	}

	onMouseUp(e) {
		this.moveHandle(e)
		document.onmousemove = null;
		document.onmouseup = null;
	}
};

var slider1 = new RangeSlider({
	id: "slider1",
	range: {
		min: 0,
		max: 200
	},
	handles: [0],
	width: 300,
	displayValue: true
});

var slider2 = new RangeSlider({
	id: "slider2",
	range: {
		min: 100,
		max: 250
	},
	handles: [120, 220],
	width: 300,
	displayValue: true
});

var slider3 = new RangeSlider({
	id: "slider3",
	range: {
		min: 0,
		max: 800
	},
	handles: [50, 250, 800],
	width: 300,
	displayValue: true
});