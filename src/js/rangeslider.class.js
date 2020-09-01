document.addEventListener('DOMContentLoaded', function () {
	var sliders = document.querySelectorAll('.my-slider');

	[].forEach.call(sliders, function (el, i) {
		var btn = el.firstElementChild,
			span = el.nextElementSibling.querySelector('span'),
			isMoving = false;

		var move = function (e) {
			if (isMoving) {
				var min = 0,
					max = el.offsetWidth - btn.offsetWidth,
					mousePos = (e.pageX - el.offsetLeft - (btn.offsetWidth / 2)),
					position = (mousePos > max ? max : mousePos < min ? min : mousePos),
					value = Math.floor((position / max) * 100);

				btn.style.marginLeft = position + 'px';
				btn.value = value;
				span.textContent = value;
			}
		};

		el.addEventListener('mousedown', function (e) {
			isMoving = true;
			move(e);
		});

		document.addEventListener('mouseup', function (e) {
			isMoving = false;
		});

		document.addEventListener('mousemove', function (e) {
			move(e);
		});
	});
});