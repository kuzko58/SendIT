"use strict";
const userBox = document.getElementById('userBox'),
	loginButtonMenu = document.getElementById('loginButtonMenu'),
	  userIconBox = document.getElementById('userIconBox'),
	  userIcon = document.getElementById('userIcon');


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


userIconBox.addEventListener('click', () => {
	event.stopPropagation();
	if (!userBox.classList.contains('listAnimeIn')) {
		userBox.classList.remove('listAnimeOut');
		userBox.classList.add('listAnimeIn');
		userIcon.src = 'close.jpg';
	} else {
		userBox.classList.remove('listAnimeIn');
		userBox.classList.add('listAnimeOut');
		userIcon.src = 'userIcon.png';
	}
});