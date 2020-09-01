import { parse } from "path";
import { version } from "@babel/core";

class TestSlider {

	doc: Document;
	track: TestTrack;
	thumb: TestThumb;
	progressBar: TestProgressBar;
	value: TestValue;

	// Options
	id: string;
	range: { min: number, max: number };
	width: number;
	handles: number[];
	displayValue: boolean;

	constructor(doc: Document, id: string, range: { min: number, max: number }, width: number, handles: number[], displayValue: boolean) {
		this.id = id;
		this.range = range ? range : {
			min: 0,
			max: 100
		};
		this.width = width ? width : 150;
		this.handles = handles ? handles : [0];
		this.displayValue = displayValue ? displayValue : false;

		this.doc = doc;
		this.track = new TestTrack(doc);
		this.thumb = new TestThumb(doc);
		this.progressBar = new TestProgressBar(doc);
		this.value = new TestValue(doc);

		const sliderContainerView = <HTMLElement>document.getElementById(this.id);
		const maxWidth: number = this.width;
		sliderContainerView.style.width = maxWidth + 'px';
		const track = this.track.trackView;
		const progressBar = this.progressBar.progressBarView;
		const thumb = this.thumb.thumbView;
		const sliderContainerWidth: number = sliderContainerView.offsetWidth;
		const sliderContainerLeft: number = sliderContainerView.offsetLeft;

		const handlesTest = this.handles;
		sliderContainerView.appendChild(this.track.trackView);
		sliderContainerView.appendChild(this.thumb.thumbView);
		track.appendChild(this.progressBar.progressBarView);

		let maxRange = this.range.max;
		let minRange = this.range.min;
		let viewValue = this.value.valueView;

		let firstHandler = handlesTest[0];
		let dragging: boolean = false;
		let translate: number;

		let pixelsPerUnit = maxWidth / (maxRange - minRange);

		function setPosition() {
			progressBar.style.transform = 'scaleX(' + firstHandler / maxRange + ')';
			thumb.style.transform = 'translate(-50%) translateX(' + (firstHandler / maxRange * sliderContainerWidth) + 'px)';
		};
		setPosition();

		function initValue() {
			if (displayValue) {
				let testViewValue = firstHandler - minRange;
				let testStringViewValue = testViewValue.toString();
				viewValue.innerHTML = testStringViewValue;
				thumb.appendChild(viewValue);
			};
		};
		initValue();

		function moveHandle(e: MouseEvent) {
			if (displayValue) {
				let value = firstHandler;

				if (value < minRange) {
					value = minRange;
				}

				if (value > maxRange) {
					value = maxRange;
				}

				let stringValue = value.toString();
				let intValue = parseInt(stringValue);
				let currentValue = intValue.toString();
				viewValue.innerHTML = currentValue;
			}
		}

		thumb.addEventListener('mousedown', function (e: MouseEvent) {
			dragging = true;
		});

		doc.addEventListener('mousemove', function (e: MouseEvent) {
			if (dragging) {
				if (e.clientX < sliderContainerLeft) {
					firstHandler = minRange;
				} else if (e.clientX > sliderContainerWidth + sliderContainerLeft) {
					firstHandler = maxRange;
				} else {
					translate = e.clientX - sliderContainerLeft;
					firstHandler = translate / sliderContainerWidth * maxRange;
				}
				setPosition();
				moveHandle(e);
			}
		});

		doc.addEventListener('mouseup', function (e: MouseEvent) {
			dragging = false;
		});
	};
};

class TestTrack {
	trackView: HTMLDivElement;

	constructor(doc: Document) {
		this.trackView = doc.createElement('div');
		this.trackView.className = 'track';
	}
};

class TestProgressBar {
	progressBarView: HTMLDivElement;

	constructor(doc: Document) {
		this.progressBarView = doc.createElement('div');
		this.progressBarView.className = 'progress';
	}
};

class TestThumb {
	thumbView: HTMLDivElement;

	constructor(doc: Document) {
		this.thumbView = doc.createElement('div');
		this.thumbView.className = 'thumb';
	}
};

class TestValue {
	valueView: HTMLDivElement;

	constructor(doc: Document) {
		this.valueView = doc.createElement('div');
		this.valueView.className = 'value';
	}
};

let rangeApp = new TestSlider(document, "EXSlider", { min: 0, max: 20 }, 500, [10], true);

