//Часть 1
let str = "урок-3-был слишком лёгким";
str = str.replace(str[0], str[0].toUpperCase());

// Часть 2
str = str.replace(/-/g, " ");
console.log(str);

//Часть 3
let res1 = str.match("лёгким")[0];
let res2 = res1.replace(res1.slice(-2), "оо");
str = str.replace(res1, res2);
document.writeln(str);

//Часть 4
let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;

for (let i = 0; i <  arr.length; i++) {
	if (Number.isInteger(arr[i])) {
		sum = sum + Math.pow(arr[i], 3);
	} else {
		let a = arr[i].length;
		sum = sum + Math.pow(a, 3);
	} 
}

let sqrt = Math.sqrt(sum);
console.log('Квадратный корень сумм: ' + sqrt);

//Часть 5
function strWork(string) {

	if(!isNaN(string) || string == "" || string == null){
		alert("Нет переданной строки!");
		isString = false;
	} else {
			isString = true;
			console.log('Полученная строка: ' + string);
			string = string.trim();
			console.log("Строка без пробелов: " + string);

			if (string.length > 50) {
				let shortString = string.replace(string.substring(50), "...");
				console.log('Обрезанная строка: ' + shortString);
		}
	}
}
let isString = false;
let strPrompt;

while (!isString) {
	strPrompt = prompt("Введите строку", "");
	strWork(strPrompt);
}
