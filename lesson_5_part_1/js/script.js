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
 
 str = document.getElementById('title').textContent;
 str1 = str.substring(0, (str.indexOf('технику')));
 str2 = str.substring(str.indexOf('технику'));
 document.getElementById('title').innerHTML = str1 + 'подлинную ' + str2;
let adv = document.querySelector('.adv');
adv.parentElement.removeChild(adv);

window.onload = function() {
	let howApple = prompt('Как вы относитесь к apple?', '');
document.getElementById('prompt').innerHTML = ('Пользователь ответил: ' + howApple);
};

