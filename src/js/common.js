let add = (a, b) => a + b
console.log(add(2, 6))


/* Radio Buttons */

$(document).ready(function () {
	$('#radio_woman').click(function () {
		$('#radio_woman_id').css('color', 'rgba(31, 32, 65, 0.75)')
		$('#radio_man_id').css('color', 'rgba(31, 32, 65, 0.5)')
	});
	$('#radio_man').click(function () {
		$('#radio_man_id').css('color', 'rgba(31, 32, 65, 0.75)')
		$('#radio_woman_id').css('color', 'rgba(31, 32, 65, 0.5)')
	});
});

/* Like button */

$likeCount = 11;

$('#toggle').on('change', function () {
	$child = $(this).parent().find('[data-likes]');
	if ($(this).prop("checked")) {
		console.log("success")
		$child.each(function () {
			$likeCount++
			$(this).attr('data-likes', $likeCount)
		});
	} else {
		$child.each(function () {
			$likeCount--
			$(this).attr('data-likes', $likeCount)
		});
	}
});

$('#comments_like').on('change', function () {
	$child = $(this).parent().find('[data-likes]');
	if ($(this).prop("checked")) {
		console.log("success")
		$child.each(function () {
			$likeCount++
			$(this).attr('data-likes', $likeCount)
		});
	} else {
		$child.each(function () {
			$likeCount--
			$(this).attr('data-likes', $likeCount)
		});
	}
});

/* Expandable checkbox list */

$(document).ready(function () {
	$('.inputs__dropdowns-pictures-expandable-checkbox').click(function () {
		$('.inputs__dropdowns-pictures-expandable-checkbox-content').toggle();
	});
});

hide(document.querySelectorAll('.inputs__dropdowns-pictures-expandable-checkbox-content'));


/* Range slider */

var slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
	start: [5000, 10000],
	connect: true,
	step: 1000,
	orientation: 'horizontal',
	range: {
		'min': 0,
		'max': 15000
	},
	format: {
		to: function (value) {
			return value.toLocaleString() + '₽';
		},
		from: function (value) {
			return value.replace();
		}
	},
});

var sliderValueElement = document.getElementById('range-slider-value');

slider.noUiSlider.on('update', function (values) {
	sliderValueElement.innerHTML = values.join(' - ');
});



/* Pagination */

function paginate(data) {
	var html = '<ul>';
	$.each(data, function (_index, item) {
		html += '<li>' + item + '</li>';
	});
	html += '</ul>';
	return html;
};

function log(content) {
	window.console && console.log(content);
};

$(function () {
	var container = $('#pagination-container');

	var elementsInPages = 180;

	container.pagination({
		dataSource: function (done) {
			var result = [];
			for (var i = 1; i <= elementsInPages; i++) {
				result.push(i);
			}
			done(result);
		},
		pageNumber: 1,
		pageSize: 12,
		pageRange: 1,
		autoHidePrevious: true,
		autoHideNext: true,
		formatResult: function (data) {
			var result = [];

			result.push(data[0] + " - " + data[data.length - 1] + " из " + elementsInPages + ' вариантов аренды');

			return result;
		},
		callback: function (data, _pagination) {
			var html = paginate(data);
			$('#data-container').html(html);
		}
	});
});


/* Dropdown */

$(document).ready(function () {
	$('.dropdown__rooms-selected').click(function () {
		$('.dropdown-rooms-content').toggle();
	});
});

// Bedrooms

var counter_bedrooms = 0;
var counter_bedrooms_min = 0;
var counter_bedrooms_max = 5;

// Beds
var counter_beds = 0;
var counter_beds_min = 0;
var counter_beds_max = 5;

// Bathrooms
var counter_bathrooms = 0;
var counter_bathrooms_min = 0;
var counter_bathrooms_max = 5;

$(document).ready(function () {
	initAppartment();

	$('.plus-bedrooms').click(function () {
		if (counter_bedrooms == counter_bedrooms_max) {
			return;
		} else {
			counter_bedrooms++;
			setupBedroomsCount(counter_bedrooms);
		}
	});

	$('.minus-bedrooms').click(function () {
		if (counter_bedrooms == counter_bedrooms_min) {
			return;
		} else {
			counter_bedrooms--;
			setupBedroomsCount(counter_bedrooms);
		}
	});

	$('.plus-beds').click(function () {
		if (counter_beds == counter_beds_max) {
			return;
		} else {
			counter_beds++;
			setupBedsCount(counter_beds);
		}
	});

	$('.minus-beds').click(function () {
		if (counter_beds == counter_beds_min) {
			return;
		} else {
			counter_beds--;
			setupBedsCount(counter_beds);
		}
	});

	$('.plus-bathrooms').click(function () {
		if (counter_bathrooms == counter_bathrooms_max) {
			return;
		} else {
			counter_bathrooms++;
			setupBathroomsCount(counter_bathrooms);
		}
	});

	$('.minus-bathrooms').click(function () {
		if (counter_bathrooms == counter_bathrooms_min) {
			return;
		} else {
			counter_bathrooms--;
			setupBathroomsCount(counter_bathrooms);
		}
	});
});

function setupBedroomsCount(count) {
	$('.inc-bedrooms').text(count);
	setupAppartmentResult();

	$('.minus-bedrooms').prop('disabled', counter_bedrooms == counter_bedrooms_min);
	$('.plus-bedrooms').prop('disabled', counter_bedrooms == counter_bedrooms_max);
	textFromTheFieldForSelectedAppartment();
};

function setupBedsCount(count) {
	$('.inc-beds').text(count);
	setupAppartmentResult();

	$('.minus-beds').prop('disabled', counter_beds == counter_beds_min);
	$('.plus-beds').prop('disabled', counter_beds == counter_beds_max);
	textFromTheFieldForSelectedAppartment();
};

function setupBathroomsCount(count) {
	$('.inc-bathrooms').text(count);
	setupAppartmentResult();

	$('.minus-bathrooms').prop('disabled', counter_bathrooms == counter_bathrooms_min);
	$('.plus-bathrooms').prop('disabled', counter_bathrooms == counter_bathrooms_max);
	textFromTheFieldForSelectedAppartment();
};

function setupAppartmentResult() {

	var bedroomsString = ""
	var bedsString = ""
	var bathroomsString = ""

	if (counter_bedrooms > 0) {
		bedroomsString = counter_bedrooms + getNoun(counter_bedrooms, ' спальня', ' спальни', ' спален')
	}


	if (counter_beds > 0) {
		bedsString = counter_beds + getNoun(counter_beds, ' кровать', ' кровати', ' кроватей')
	}

	if (counter_bathrooms > 0) {
		bathroomsString = counter_bathrooms + getNoun(counter_bathrooms, ' ванная комната', ' ванные комнаты', ' ванных комнат')
	}

	var strings = [];

	if (bedroomsString.length > 0) strings.push(bedroomsString)
	if (bedsString.length > 0) strings.push(bedsString)
	if (bathroomsString.length > 0) strings.push(bathroomsString)

	$('.dropdown__rooms-selected-text').html(strings.join(", "));
};

function textFromTheFieldForSelectedAppartment() {
	if (counter_bedrooms == counter_bedrooms_min && counter_beds == counter_beds_min && counter_bathrooms == counter_bathrooms_min) {
		$('.dropdown__rooms-selected-text').text('Сколько комнат')
	}
};

function getNoun(number, one, two, five) {
	number = Math.abs(number);
	number %= 100;
	if (number >= 5 && number <= 20) {
		return five;
	}
	number %= 10;
	if (number == 1) {
		return one;
	}
	if (number >= 2 && number <= 4) {
		return two;
	}
	return five;
};

function initAppartment() {
	counter_bedrooms = 2;
	counter_beds = 2;
	counter_bathrooms = 0;

	setupBedroomsCount(counter_bedrooms);
	setupBedsCount(counter_beds);
	setupBathroomsCount(counter_bathrooms);
};


function hide(elements) {
	elements = elements.length ? elements : [elements];
	for (var index = 0; index < elements.length; index++) {
		elements[index].style.display = 'none';
	}
}

hide(document.querySelectorAll('.dropdown-rooms-content'));




