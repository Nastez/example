import { parse } from "path";



/*
class Model {
	constructor() { }
};
class View {

	app: HTMLElement = document.body;
	//content: HTMLDivElement = document.createElement('div');
	slider: HTMLDivElement = document.createElement('div');
	//slider_touch: HTMLDivElement = document.createElement('div');
	slider_touch: HTMLButtonElement = document.createElement('button');
	slider_touch2: HTMLButtonElement = document.createElement('button');
	slider_span: HTMLSpanElement = document.createElement('span');
	slider_line: HTMLDivElement = document.createElement('div');
	slider_span_line: HTMLSpanElement = document.createElement('span');
	result: HTMLDivElement = document.createElement('div');

	constructor() {
		//this.content.className = 'range'
		this.slider.className = 'range-slider'
		this.slider.id = 'my-slider'
		this.slider_touch.className = 'slider_touch'
		this.slider_touch.id = 'slider_button'
		this.slider_touch2.id = 'slider_button2'
		this.slider_touch2.className = 'slider_touch2'
		this.slider_line.className = 'slider_line'
		this.slider_line.id = 'range_between'
		this.result.id = 'result'

		//this.slider.setAttribute("min", "-100")
		//this.slider.setAttribute("step", "1")
		//this.slider.setAttribute("min-value", "40")
		//this.slider.setAttribute("max-value", "40")
		//this.slider.setAttribute("max", "100")


		//this.slider_touch.append(this.slider_span)
		//this.slider.append(this.slider_touch, this.slider_line)
		//this.slider_line.append(this.slider_span_line)
		//this.app.append(this.result, this.slider)

		this.app.append(this.result, this.slider)
		this.slider.append(this.slider_line)
		this.slider_line.append(this.slider_touch, this.slider_touch2)
	};
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


*/



function isOdd(n: number) {
	return Math.abs(n % 2) == 1;
};

//console.log(isOdd(29));



//let array: number[] = [1, 1, 1, 2, 2, 3, 3];

function checkIfDuplicateExists(w: number[]) {
	return new Set(w).size !== w.length
};
//console.log(checkIfDuplicateExists([1, 1, 1, 2, 2, 3, 3]))






const findOdd = (xs: number[]): number => {

	xs.sort(function (a: number, b: number) {
		return a - b
	});

	let current: number | null = null;
	let cnt = 0;
	for (let i = 0; i < xs.length; i++) {
		if (xs[i] != current) {
			if (cnt > 0 && Math.abs(cnt % 2) === 1) {
				if (current != null) {
					return current;
				}
			}
			current = xs[i];
			cnt = 1;
		} else {
			cnt++;
		}
	};
	if (cnt > 0 && Math.abs(cnt % 2) === 1) {
		if (current != null) {
			return current;
		}
	};

	return cnt;
}

//console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));



class Challenge {
	static getMiddle(s: string) {
		// return the middle charater(s)
		let position;
		let length;
		if (s.length % 2 === 1) {
			position = s.length / 2;
			length = 1;
		} else {
			position = s.length / 2 - 1;
			length = 2;
		}

		return s.substring(position, position + length)

	}

};


//console.log(Challenge.getMiddle("hann"));


function positiveSum(arr: number[]): number {
	let positive: number[] = [];


	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			positive.push(arr[i]);
		}
	};

	return positive.reduce((a, b) => a + b, 0);
};


//console.log(positiveSum([-1, 2, 3, 4, 6]));



class G964 {

	public static longest = (s1: string, s2: string) => {
		let result = s1.concat(s2);
		let unique = [...new Set(result)];
		unique.sort();
		let newString = unique.toString();
		let stringWithoutCommon = newString.replace(/,/g, "");
		return stringWithoutCommon;
	}
};

//console.log(G964.longest("inmanylanguages", "theresapairoffunctions"));


