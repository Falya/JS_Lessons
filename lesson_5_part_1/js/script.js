let menuItems = document.querySelectorAll('.menu-item');
let elm = menuItems[0].cloneNode(true);
elm.innerHTML = "Пятый пункт";

for (let i = 0; i < menuItems.length; i++) {
	let a = menuItems[i];
	let b = a.textContent.replace('пункт', '').trim();

	switch (b) {
		case 'Первый':
			if (i != 0) {
				a.parentNode.insertBefore(a, menuItems[0]);
			}
			break;
		case 'Второй':
			if (i != 1) {
				a.parentNode.insertBefore(a, menuItems[1]);
			}
			break;
		case 'Третий':
			if (i != 2) {
				a.parentNode.insertBefore(a, menuItems[2]);
			}
			break;
			case 'Четвертый':
			if (i != 3) {
				a.parentNode.insertBefore(a, menuItems[3]);
			}
			break;
		default:
			break;
	}
}
menuItems[0].parentNode.appendChild(elm);
console.log(menuItems);
let bgImg = document.getElementsByTagName('body');
bgImg[0].style.backgroundImage = 'url(./img/apple_true.jpg)';
document.getElementById('title').innerHTML += 'подлинную';
let adv = document.querySelector('.adv');
adv.parentElement.removeChild(adv);

window.onload = function() {
	let howApple = prompt('Как вы относитесь к apple?', '');
document.getElementById('prompt').innerHTML = ('Пользователь ответил: ' + howApple);
};

