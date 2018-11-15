"use strict";
const userBox = document.getElementById('userBox'),
	loginButtonMenu = document.getElementById('loginButtonMenu');


loginButtonMenu.addEventListener('click', () => {
	event.stopPropagation();
	if (!userBox.classList.contains('listAnimeIn')) {
		userBox.classList.remove('listAnimeOut');
		userBox.classList.add('listAnimeIn');
	} else {
		userBox.classList.remove('listAnimeIn');
		userBox.classList.add('listAnimeOut');
	}
});
