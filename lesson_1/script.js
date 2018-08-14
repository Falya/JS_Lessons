let yourBudget = prompt("Ваш бюджет на месяц?", "");
let shopName = prompt("Название вашего магазина?", "");
let	mainList = {
		budget: yourBudget,
		shop: shopName,
		shopGoods: [],
		employers: {},
		open: true
	};

	for (let i = 0; i < 3; i++) {
				mainList.shopGoods.push( prompt("Какой тип товаров будем продавать?", "") );
	}

	alert( "Ваш бюджет на 1 день составляет: " + (mainList.budget / 30).toFixed(1) );
	console.log(mainList);