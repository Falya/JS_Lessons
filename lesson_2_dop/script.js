let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let date = new Date();

for (let i = 0; i < week.length; i++) {
	switch (week[i]) {
		case 'Суббота':
			if ( (date.getDay()) == (i + 1) ) {
					document.getElementById('out_div').innerHTML += '<strong><i>' + week[i] + '</i></strong></br>';
				} else {
					document.getElementById('out_div').innerHTML += '<strong>' + week[i] + '</strong></br>';
				}
			break;
		case 'Воскресенье':
			if ( (date.getDay()) == (i + 1) ) {
				document.getElementById('out_div').innerHTML += '<strong><i>' + week[i] + '</i></strong></br>';
			} else {
				document.getElementById('out_div').innerHTML += '<strong>' + week[i] + '</strong></br>';
			}
			break;	
		default:
			if ( (date.getDay() ) == (i + 1) ) {
				document.getElementById('out_div').innerHTML += '<i>' + week[i] + '</i></br>';
			} else {
				document.getElementById('out_div').innerHTML += week[i] + '</br>';
			}
			break;
	}
}

// Вторая часть

let arr = [];
let count3 = 0;
let count7 = 0;

while (count3 < 1 && count7 < 1) {
	for (let i = 0; i < 7; i++) {
	arr[i] = ( Math.floor(10000 * Math.random() ) + 10).toString();
	}
	find();
	if (count3 < 1 || count7 < 1) {
		count3 = count7 = 0;
	}
}

 function find() {
 	for (let i = 0; i < arr.length; i++) {
 		let a = arr[i].substring(0, 1);
 		if (a == 3) {
 			count3 = count3 + 1;
 		} else if (a == 7){
 			count7 = count7 + 1;
 		}
 	}
 }

let positiveArr = arr.filter(function(number) {
  return (number.substring(0, 1) == 3 || number.substring(0, 1) == 7);
});

console.log("Исходный массив: " + arr);
console.log("Массив по заданию: " + positiveArr);