let date = new Date();
let div = document.createElement('div');
div.classList.add('time');
document.body.appendChild(div);
div.style.color = 'red';
div.style.fontWeight = 'bold';

// Часть 1 и 2
console.log(date);
setInterval(function() {
	let date = new Date();
	let formatedDate = ('0' + date.getHours()).slice(-2) + ':' +
										( + '0' + date.getMinutes()).slice(-2) + 
										':' + ('0' + date.getSeconds()).slice(-2) +
										' ' + ('0' + date.getDate()).slice(-2) + 
										'.' + ('0' + (date.getMonth() + 1)).slice(-2) + 
										'.' + date.getFullYear();
	div.innerHTML = formatedDate;
}, 1000);

// Часть 3
options = {
  weekday: 'long',
};

//Часть 4
let div2 = div.cloneNode(true);
document.body.append(div2);
div2.innerHTML += date.toLocaleString('ru', options);

let div3 = div.cloneNode(true);
document.body.append(div3);

let input1 = document.createElement('input');
input1.setAttribute('id', 'input1');
input1.setAttribute('placeholder', 'dd-mm-yyyy');

let input2 = input1.cloneNode(true);
input2.setAttribute('id', 'input2');
input2.setAttribute('placeholder', 'dd-mm-yyyy');

let input3 = input1.cloneNode(true);
input3.setAttribute('id', 'input3');
input3.setAttribute('placeholder', 'Результат');

let btn = document.createElement('button');
btn.setAttribute('id', 'btn');
btn.innerHTML = "Счёт";

div3.appendChild(input1);
div3.appendChild(input2);
div3.appendChild(input3);
div3.appendChild(btn);

btn.onclick = function() {
	let a = input1.value;
	let b = input2.value;
	console.log(a + b);
	let dateArr1 = a.split('-');
	let dateArr2 = b.split('-');
	let date1 = new Date(dateArr1[2], (dateArr1[1] - 1), dateArr1[0]);
	let date2 = new Date(dateArr2[2], (dateArr1[1] - 1), dateArr2[0]);
	let dif;
	if (date1 =='Invalid Date' && date2 =='Invalid Date') {
		if (date1 > date2) {
		dif = Math.round((date1.getTime() - date2.getTime())/1000/60/60/24);
		console.log('date1 больше');
	} else {
		dif = Math.round((date2.getTime() - date1.getTime())/1000/60/60/24);
		console.log('date2 больше');
	}
	
	input3.setAttribute('value', dif);
	} else {
		alert('Не правильно ввели дату!');
	}
};

	
