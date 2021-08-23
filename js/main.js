const MAIN = document.getElementById('IDmain');
const BUTTONACTIVE = document.querySelector('.container-items');
const ICON = document.getElementById('IDicons');


MAIN.onclick = function() {
	MAIN.classList.toggle('active');
	ICON.classList.remove('fas', 'fa-plus');
	if (MAIN.classList.contains('active') == true) {
		BUTTONACTIVE.setAttribute("style","transform: scale(1); transition: 0.5s; transition-delay: 0.1s;");
		ICON.classList.remove('fas', 'fa-plus');
		ICON.classList.add('fas', 'fa-times')
	} else {
		BUTTONACTIVE.removeAttribute('style');
		ICON.classList.remove('fas', 'fa-times');
		ICON.classList.add('fas', 'fa-plus');
	};
};