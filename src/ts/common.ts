
class Model {
	constructor() { }
};
class View {
	

	app: HTMLElement = document.body;
	content: HTMLDivElement = document.createElement('div');
	slider: HTMLDivElement = document.createElement('div');
	slider_touch_left: HTMLDivElement = document.createElement('div');
	slider_span_left: HTMLSpanElement = document.createElement('span');
	slider_touch_right: HTMLDivElement = document.createElement('div');
	slider_span_right: HTMLSpanElement = document.createElement('span');
	slider_line: HTMLDivElement = document.createElement('div');
	slider_span_line: HTMLSpanElement = document.createElement('span');
	result: HTMLDivElement = document.createElement('div');

	constructor() {
		this.content.className = 'content'
		this.slider.className = 'slider'
		this.slider.id = 'my-slider'
		this.slider_touch_left.className = 'slider_touch_left'
		this.slider_touch_right.className = 'slider_touch_right'
		this.slider_line.className = 'slider_line'
		this.result.id = 'result'

		this.slider.setAttribute("min", "-100")
		this.slider.setAttribute("step", "1")
		this.slider.setAttribute("min-value", "40")
		this.slider.setAttribute("max-value", "40")
		this.slider.setAttribute("max", "100")

		this.content.append(this.slider)
		this.slider_touch_left.append(this.slider_span_left)
		this.slider_touch_right.append(this.slider_span_right)
		this.slider.append(this.slider_touch_left, this.slider_touch_right, this.slider_line)
		this.slider_line.append(this.slider_span_line)
		this.app.append(this.content, this.result)
		
	}

};



class Controller {
	model: object;
	view: object;
	constructor(model: object, view: object) {
		this.model = model
		this.view = view
	}
};

const app = new Controller(new Model(), new View());


