import { parse } from "path";

class Slider {
	doc: Document;
	track: Track;
	thumb: Thumb;
	progressBar: ProgressBar;

	constructor(doc: Document) {
		this.doc = doc;
		this.track = new Track(doc);
		this.thumb = new Thumb(doc);
		this.progressBar = new ProgressBar(doc);

		const sliderContainerView = <HTMLElement>document.getElementsByClassName('slider-container')[0];
		const track = this.track.trackView;
		const progressBar = this.progressBar.progressBarView;
		const thumb = this.thumb.thumbView;
		const sliderContainerWidth: number = sliderContainerView.offsetWidth;
		const sliderContainerLeft: number = sliderContainerView.offsetLeft;

		sliderContainerView.appendChild(this.track.trackView);
		sliderContainerView.appendChild(this.thumb.thumbView);
		track.appendChild(this.progressBar.progressBarView);

		let percentage: number = 50;
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
	};
};

class Track {
	trackView: HTMLDivElement;

	constructor(doc: Document) {
		this.trackView = doc.createElement('div');
		this.trackView.className = 'track';
	}
};

class ProgressBar {
	progressBarView: HTMLDivElement;

	constructor(doc: Document) {
		this.progressBarView = doc.createElement('div');
		this.progressBarView.className = 'progress';
	}
};

class Thumb {
	thumbView: HTMLDivElement;

	constructor(doc: Document) {
		this.thumbView = doc.createElement('div');
		this.thumbView.className = 'thumb';
	}
};

const rangeApp = new Slider(document);