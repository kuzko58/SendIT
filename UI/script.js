"use strict";
const mainMenuBox = document.getElementById('mainMenuBox'),
	userBox = document.getElementById('userBox'),
	menuIconBox = document.getElementById('menuIconBox'),
	login = document.getElementById('login'),
	weightCat = document.getElementById('weightCat'),
	catList = document.getElementById('catList');

menuIconBox.addEventListener('click', function () {
	event.stopPropagation();
	if (!mainMenuBox.classList.contains('listAnimeIn')) {
		mainMenuBox.classList.remove('listAnimeOut');
		mainMenuBox.classList.add('listAnimeIn');
	} else if (mainMenuBox.classList.contains('listAnimeIn')) {
		mainMenuBox.classList.remove('listAnimeIn');
		mainMenuBox.classList.add('listAnimeOut');
	}
	menuIconBox.classList.toggle('grayColor');
});


login.addEventListener('click', function () {
	event.stopPropagation();
	if (!userBox.classList.contains('listAnimeIn')) {
		userBox.classList.remove('listAnimeOut');
		userBox.classList.add('listAnimeIn');
	} else if (userBox.classList.contains('listAnimeIn')) {
		userBox.classList.remove('listAnimeIn');
		userBox.classList.add('listAnimeOut');
	}
});



catList.addEventListener('click', function (event) {
	event.stopPropagation();
	weightCat.style.color = 'black';
	weightCat.innerHTML = event.target.innerHTML;
	catList.classList.remove('listAnimeIn');
	catList.classList.add('listAnimeOut');
});

weightCat.addEventListener('click', function () {
	event.stopPropagation();
	if (!catList.classList.contains('listAnimeIn')) {
		catList.classList.remove('listAnimeOut');
		catList.classList.add('listAnimeIn');
	} else if (catList.classList.contains('listAnimeIn')) {
		catList.classList.remove('listAnimeIn');
		catList.classList.add('listAnimeOut');
	}
});


window.addEventListener('click', function (event) {
	if (!event.target.matches('#menuIconBox')) {
		if (mainMenuBox.classList.contains('listAnimeIn')) {
			mainMenuBox.classList.replace('listAnimeIn', 'listAnimeOut');
			menuIconBox.classList.toggle('grayColor');
		}

	}
	if (!event.target.matches('#weightCat')) {
		if (catList.classList.contains('listAnimeIn')) {
			catList.classList.replace('listAnimeIn', 'listAnimeOut');
		}

	}
});
