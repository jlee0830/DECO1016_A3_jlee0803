document.addEventListener('scroll', () => {
	let scroll_position = window.scrollY;
	if (scroll_position > 800) {
		header.style.backgroundColor = '#29555c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});