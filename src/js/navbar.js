module.exports = function() {
	var buttons = document.querySelectorAll('.navbar-burger');

	if (!buttons.length)
		return;

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			let target = document.getElementById( button.dataset.target );

			button.classList.toggle('is-active');
			target.classList.toggle('is-active');
		});
	});
}
