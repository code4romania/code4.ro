(function() {
	var buttons = document.querySelectorAll('.navbar-burger');

	if (!buttons.length)
		return;

	for (var i = buttons.length - 1; i >= 0; i--) {
		var button = buttons[i];

		button.addEventListener('click', function() {
			var target = document.getElementById( button.dataset.target );

			button.classList.toggle('is-active');
			target.classList.toggle('is-active');
		});
	}
})();
