import { parse } from "path";

class TestSlider {
	doc: Document;
	track: TestTrack;
	thumb: TestThumb;
	progressBar: TestProgressBar;

	// Options
	id: string;
	range: object;
	width: number;
	handles: number[];
	displayValue: boolean;

	constructor(doc: Document, id: string, range: object, width: number, handles: number[], displayValue: boolean) {
		this.id = id;
		this.range = range ? range : { min: 0, max: 100 };
		this.width = width ? width : 150;
		this.handles = handles ? handles : [0];
		this.displayValue = displayValue ? displayValue : false;

		this.doc = doc;
		this.track = new TestTrack(doc);
		this.thumb = new TestThumb(doc);
		this.progressBar = new TestProgressBar(doc);

		const sliderContainerView = <HTMLElement>document.getElementById(this.id);
		const track = this.track.trackView;
		const progressBar = this.progressBar.progressBarView;
		const thumb = this.thumb.thumbView;
		const sliderContainerWidth: number = sliderContainerView.offsetWidth;
		const sliderContainerLeft: number = sliderContainerView.offsetLeft;

		const widthTest = this.width;

		sliderContainerView.appendChild(this.track.trackView);
		sliderContainerView.appendChild(this.thumb.thumbView);
		track.appendChild(this.progressBar.progressBarView);

		let percentage: number = 20;
		let dragging: boolean = false;
		let translate: number;

		function setPercentage() {
			progressBar.style.transform = 'scaleX(' + percentage / 100 + ')';
			thumb.style.transform = 'translate(-50%) translateX(' + (percentage / 100 * sliderContainerWidth) + 'px)';
		};
		setPercentage();

		this.thumb.thumbView.addEventListener('mousedown', function (e: MouseEvent) {
			dragging = true;
		});

		doc.addEventListener('mousemove', function (e: MouseEvent) {
			if (dragging) {
				if (e.clientX < sliderContainerLeft) {
					percentage = 0;
				} else if (e.clientX > sliderContainerWidth + sliderContainerLeft) {
					percentage = 100;
				} else {
					translate = e.clientX - sliderContainerLeft;
					percentage = translate / sliderContainerWidth * 100;
				}
				setPercentage();
			}
		});

		doc.addEventListener('mouseup', function (e: MouseEvent) {
			dragging = false;
		});
		function init() {
			sliderContainerView.style.width = widthTest + "px";

			
		}

		init();

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


let rangeApp = new TestSlider(document, "EXSlider", { min: 0, max: 200 }, 300, [0], true);