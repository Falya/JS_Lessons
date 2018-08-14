let yourBudget,
		shopName,
		time,
		price;

function 	start() {
		yourBudget = prompt("Ваш бюджет на месяц?", "");

		while	( isNaN(yourBudget) || yourBudget	== "" || yourBudget	== null) {
				yourBudget = prompt("Ваш бюджет на месяц?", "");
		}

		shopName = prompt("Название вашего магазина?", "").toUpperCase();

		while	( shopName == "" || shopName	== null) {
				shopName = prompt("Название вашего магазина?", "").toUpperCase();
		}

		time = 20;
}

// start();

let mainList = {
		budget: yourBudget,
		shop: shopName,
		shopGoods: [],
		employers: {},
		open: true,
		discount: true,
		shopItems: [],
		chooseGoods: function chooseGoods() {
			for (let i = 0; i < 5; i++) {
					let a = prompt("Какой тип товаров будем продавать?", "");
					if ((typeof(a)) === "string" && (a !== null && a != "" && a.length < 50 && isNaN(a) ) ) {
							mainList.shopGoods.push(a);
							console.log("Всё верно");
					} else {
							i--;
							console.log("Не верно!");
					}
			}
		},
		workTime: function	workTime(time) {
			if (time < 0) {
					console.log('Такого не может быть!');
			} else if (time > 8 && time < 20) {
							console.log('Время работать!');
							mainList.open = true;
					} else if (time < 24) {
									console.log('Магазин закрыт!');
									mainList.open = false;
							} else {
											console.log('Такого не может быть, в сутках 24 часа!');
									}
		},
		dayBudget: function dayBudget(budget) {
			return (budget / 30).toFixed(1);
		},
		joinEmployers: function joinEmployers() {
			for (let i = 0; i < 4; i++) {
				let a = prompt("Введите имя " + (i + 1) + "-го сотрудника");
				if ( (typeof(a) === 'string') && (a !== null && a != '' && a.length < 30 ) ) {
					mainList.employers[(i + 1)] = ((i + 1) + " - " + a);
						console.log("Всё верно");
				} else {
					i--;
				}
			}
		},
		discountFunc: function discountFunc(cost) {
			if (mainList.discount == true) {
				price = cost * 0.8;
				console.log('Цена с учётом скидки: ' + price);
			} else {
				price = cost;
				console.log('Цена без скидки: ' + price);
			}
		},
	chooseShopItems: function chooseShopItems() {
		let isOk = false;
		
		while (!isOk) {
			let items = prompt('Перечислите через запятую товары', '');
			
			if ((typeof(items)) === "string" && (items !== null && items != "" && isNaN(items)) ) {
				mainList.shopItems = items.split(',');
				mainList.shopItems.push(prompt('Подождите ещё', ''));
				mainList.shopItems.sort();
				isOk = true;
			} else {
				alert('Вы не ввели обязательные данные!');
			}
		}
	}

};

// mainList.joinEmployers();
mainList.chooseGoods();
mainList.chooseShopItems();
// mainList.discountFunc(54);
// mainList.workTime(21);
// alert( mainList.dayBudget(yourBudget) );
document.writeln('У нас вы можете купить:</br>');
mainList.shopItems.forEach( function(item, i, shopItems) {
	document.writeln( '<span style="margin-left: 13%">' + (i + 1) + ": " + item + '</span></br>');
});
for (let key in mainList) {
	console.log("Наш магазин включает в себя: " + key);
}
console.log(mainList);
