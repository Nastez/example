//import './js/lk/'


/* Dropdown for guests */

$(document).ready(function () {
	$('.dropdown__guests-selected').click(function () {
		$('.dropdown-guests-content').toggle();
		$('.inputs__card_pick-up-a-number-button').toggle();
	});
	$('.click-clear')
		.css('cursor', 'default')
		.click(function () {
			initGuests();
		});
	$('.click-apply')
		.css('cursor', 'default')
		.click(function () {
			applyChanges();
		})
});


// Adults
var counter_adults = 0;
var counter_adults_min = 0;
var counter_adults_max = 5;

// Children
var counter_children = 0;
var counter_children_min = 0;
var counter_children_max = 5;

// Babies
var counter_babies = 0;
var counter_babies_min = 0;
var counter_babies_max = 5;



$(document).ready(function () {
	initGuests();

	$('.plus-adults').click(function () {
		if (counter_adults == counter_adults_max) {
			return;
		} else {
			counter_adults++;
			setupAdultCount(counter_adults);
		}
		localStorageForAdults();
	});

	$('.minus-adults').click(function () {
		if (counter_adults == counter_adults_min) {
			return;
		} else {
			counter_adults--;
			setupAdultCount(counter_adults);
		}
		localStorageForAdults();
	});

	$('.plus-children').click(function () {
		if (counter_children == counter_children_max) {
			return;
		} else {
			counter_children++;
			setupChildrenCount(counter_children);
		}
		localStorageForChildren();
	});

	$('.minus-children').click(function () {
		if (counter_children == counter_children_min) {
			return;
		} else {
			counter_children--;
			setupChildrenCount(counter_children);
		}
		localStorageForChildren();
	});

	$('.plus-babies').click(function () {
		if (counter_babies == counter_babies_max) {
			return;
		} else {
			counter_babies++;
			setupBabiesCount(counter_babies);
		}
		localStorageForBabies();
	});
	$('.minus-babies').click(function () {
		if (counter_babies == counter_babies_min) {
			return;
		} else {
			counter_babies--;
			setupBabiesCount(counter_babies);
		}
		localStorageForBabies();
	});
});

const KEY_ADULTS = 'key_adults';
localStorageForAdults = function () {
	localStorage.setItem(KEY_ADULTS, counter_adults);
};

const KEY_CHILDREN = 'key_children';
localStorageForChildren = function () {
	localStorage.setItem(KEY_CHILDREN, counter_children);
};

const KEY_BABIES = 'key_babies';
localStorageForBabies = function () {
	localStorage.setItem(KEY_BABIES, counter_babies);
};

function setupAdultCount(count) {
	$('.inc-adults').text(count);
	setupGuestsResult();
	numberOfGuests();

	$('.minus-adults').prop('disabled', counter_adults == counter_adults_min);
	$('.plus-adults').prop('disabled', counter_adults == counter_adults_max);
	textFromTheFieldForSelectedGuests();
};

function setupChildrenCount(count) {
	$('.inc-children').text(count);
	setupGuestsResult();
	numberOfGuests();

	$('.minus-children').prop('disabled', counter_children == counter_children_min);
	$('.plus-children').prop('disabled', counter_children == counter_children_max);
	textFromTheFieldForSelectedGuests();
};

function setupBabiesCount(counter_babies) {
	$('.inc-babies').text(counter_babies);
	setupGuestsResult();
	numberOfGuests();

	$('.minus-babies').prop('disabled', counter_babies == counter_babies_min);
	$('.plus-babies').prop('disabled', counter_babies == counter_babies_max);
	textFromTheFieldForSelectedGuests();
};

function setupGuestsResult() {
	var adultsString = ""
	var childrenString = ""
	var babiesString = ""

	if (counter_adults > 0) {
		adultsString = counter_adults
	}

	if (counter_children > 0) {
		childrenString = counter_children
	}

	if (counter_babies > 0) {
		babiesString = counter_babies + getNoun(counter_babies, ' младенец', ' младенца', ' младенцев')
	}

	var stringsGuests = [];

	if (adultsString.length > 0) stringsGuests.push(adultsString)
	if (childrenString.length > 0) stringsGuests.push(childrenString)
	if (babiesString.length > 0) stringsGuests.push(babiesString)

	$('.dropdown__guests-selected-text').html(stringsGuests.join(", "));
};

function numberOfGuests() {
	var counterGuests = [counter_adults, counter_children],
		sum = 0;
	$.each(counterGuests, function () {
		sum += parseInt(this) || 0;
	});
	if (sum > 0) {
		$('.dropdown__guests-selected-text').html(sum + getNoun(sum, ' гость', ' гостя', ' гостей'));

	}
	if (counter_babies > 0 && sum > 0) {
		$('.dropdown__guests-selected-text').html(sum + getNoun(sum, ' гость', ' гостя', ' гостей') + ", " + counter_babies + getNoun(counter_babies, ' младенец', ' младенца', ' младенцев'));
	}
};

function textFromTheFieldForSelectedGuests() {
	if (counter_adults == counter_adults_min && counter_children == counter_children_min && counter_babies == counter_babies_min) {
		$('.dropdown__guests-selected-text').text('Сколько гостей');
		$('.click-clear').hide();
	} else {
		$('.click-clear').show();
	}
};

function applyChanges() {
	$('.dropdown-guests-content').hide();
	if ($('.dropdown__guests-selected-text').click()) {
		$('.inputs__card_pick-up-a-number-button').show();
	}
}

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

function initGuests() {

	counter_adults = localStorage.getItem(KEY_ADULTS, counter_adults);
	counter_children = localStorage.getItem(KEY_CHILDREN, counter_children);
	counter_babies = localStorage.getItem(KEY_BABIES, counter_babies);

	setupAdultCount(counter_adults);
	setupChildrenCount(counter_children);
	setupBabiesCount(counter_babies);
};

function hide(elements) {
	elements = elements.length ? elements : [elements];
	for (var index = 0; index < elements.length; index++) {
		elements[index].style.display = 'none';
	};
};

hide(document.querySelectorAll('.dropdown-guests-content'));

$('.inputs__column_dropdown-guests-items ').clone().appendTo('.inputs__card_reservation-appartment-a-number-of-guests');


/* Datepicker */

$('.datepicker-filter').datepicker({
	dateFormat: 'dd M',
});

$('.datepicker-here').datepicker({
	navTitles: {
		days: 'MM <i>yyyy</i>',
	},
	clearButton: true,
});

$('.datepicker-content__buttons').appendTo('.datepicker--content');

$(document).ready(function () {
	$('.calendar, .calendar-for-reservation').hide();
});

$('.datepicker-pick-a-number-card-arrival, .datepicker-pick-a-number-card-exit').click(function () {
	$('.calendar').toggle()
});

$('.datepicker-reservation-card-arrival, .datepicker-reservation-card-exit').click(function () {
	$('.calendar-for-reservation').toggle()
});

$(function () {
	$(".calendar-for-reservation").datepicker({
		onSelect: function (e) {
			$('#start_coming').val(e)
		},
		onSelect: function (formattedDate) {
			let formattedDates = formattedDate.split("-");
			$("#start_coming").val(formattedDates[0]);
			$("#end_departure").val(formattedDates[1]);
		},
	});
});

var dateFrom
var dateTo

$(function () {
	$(".calendar").datepicker({
		onSelect: function (e) {
			$("#start_arrival").val(e)
		},
		onSelect: function (formattedDate, date) {
			let formattedDates = formattedDate.split("-");
			$("#start_arrival").val(formattedDates[0]);
			$("#end_exit").val(formattedDates[1]);

			if (date[0] != null && date[1] != null) {
				var dTime = date[1] - date[0];
				var dayCount = dTime / (24 * 60 * 60 * 1000);
				var nDays = document.getElementById('number-of-days')
				nDays.value = dayCount + ' суток';

				var priceForDays = dayCount * costForOneDay;
				var finalCost = document.getElementById('day-cost')
				finalCost.value = priceForDays.toLocaleString() + "₽";
				var sumPrice = priceForDays + fee - discount;
				var totalPrice = document.getElementById('total_cost')
				totalPrice.value = sumPrice.toLocaleString() + "₽";
			}
			dateFrom = date[0];
			dateTo = date[1];
			setupDatesFrom();
			setupDatesTo();

		},
	});
});

setupDatesFrom = function () {
	const dtf = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	})
	const [{
		value: mo
	}, , {
		value: da
	}, , {
		value: ye
	}] = dtf.formatToParts(dateFrom);

	$('#start_coming').val(`${da}.${mo}.${ye}`);

};

setupDatesTo = function () {
	const dTo = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit'
	})
	const [{
		value: mo
	}, , {
		value: da
	}, , {
		value: ye
	}] = dTo.formatToParts(dateTo);
	$("#end_departure").val(`${da}.${mo}.${ye}`);
};

var priceForRoom = $('.cost-for-room').val();
var costForOneDay = parseInt(priceForRoom)

var valueFromPriceForRoom = costForOneDay.toLocaleString();
var valueFromCostOneDay = document.getElementById('rubles-for-days')
valueFromCostOneDay.value = valueFromPriceForRoom + "₽";

var finalPriceForDays = document.getElementById('day-cost')
finalPriceForDays.value = valueFromPriceForRoom + "₽";

var discount = 2179;
var fee = 300;

var valueSumPrice = document.getElementById('total_cost')
var discountedTotal = costForOneDay + fee - discount;
valueSumPrice.value = discountedTotal.toLocaleString() + "₽";



/* Slick-carousel */

$('.inputs__carousel-pictures').slick({
	dots: true,
})