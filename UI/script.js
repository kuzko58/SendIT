"use strict";
const userBox = document.getElementById('userBox'),
	userIcon = document.getElementById('userIcon'),
	weightCat = document.getElementById('weightCat'),
	catList = document.getElementById('catList');


userIcon.addEventListener('click', function () {
	event.stopPropagation();
	if (!userBox.classList.contains('listAnimeIn')) {
		userBox.classList.remove('listAnimeOut');
		userBox.classList.add('listAnimeIn');
		userIcon.src = 'close.jpg';
	} else if (userBox.classList.contains('listAnimeIn')) {
		userBox.classList.remove('listAnimeIn');
		userBox.classList.add('listAnimeOut');
		userIcon.src = 'userIcon.png';
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
	if (!event.target.matches('#weightCat')) {
		if (catList.classList.contains('listAnimeIn')) {
			catList.classList.replace('listAnimeIn', 'listAnimeOut');
		}

	}
});
