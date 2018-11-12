"use strict";
const userBox = document.getElementById('userBox'),
	loginButtonMenu = document.getElementById('loginButtonMenu'),
	weightCat = document.getElementById('weightCat'),
	catList = document.getElementById('catList'),
	  userIconBox = document.getElementById('userIconBox'),
	  userIcon = document.getElementById('userIcon');

catList.addEventListener('click', (event) => {
	event.stopPropagation();
	weightCat.style.color = 'black';
	weightCat.innerHTML = event.target.innerHTML;
	weightCat.value = event.target.value;
	catList.classList.remove('listAnimeIn');
	catList.classList.add('listAnimeOut');
});

weightCat.addEventListener('click', () => {
	event.stopPropagation();
	if (!catList.classList.contains('listAnimeIn')) {
		catList.classList.remove('listAnimeOut');
		catList.classList.add('listAnimeIn');
	} else {
		catList.classList.remove('listAnimeIn');
		catList.classList.add('listAnimeOut');
	}
});


window.addEventListener('click', (event) => {
	if (!event.target.matches('#weightCat')) {
		if (catList.classList.contains('listAnimeIn')) {
			catList.classList.replace('listAnimeIn', 'listAnimeOut');
		}

	}
});

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
