window.addEventListener('DOMContentLoaded', function() {
	// 1-я часть
let openBtn = document.getElementById('open-btn'),
		closeBtn = document.querySelector('#close-btn'),
		mainInfo = document.getElementsByClassName('main-info')[0],
		nameValue = mainInfo.getElementsByClassName('name-value')[0],
		budgetValue = mainInfo.getElementsByClassName('budget-value')[0],
		goodsValue = mainInfo.getElementsByClassName('goods-value')[0],
		itemsValue = mainInfo.getElementsByClassName('items-value')[0];
		employersValue = mainInfo.getElementsByClassName('employers-value')[0],
		isopenValue = mainInfo.getElementsByClassName('isopen-value')[0],
		discountValue = mainInfo.getElementsByClassName('discount-value')[0],
		mainFunc = document.getElementsByClassName('main-functions')[0],
		catField = mainFunc.getElementsByClassName('goods-item'),
		allBtn = mainFunc.getElementsByTagName('button'),
		itemField = mainFunc.querySelector('#items'),
		timeField = mainFunc.querySelector('#time'),
		budgetField = mainFunc.querySelector('#budget'),
		namesEmp = mainFunc.querySelectorAll('.hire-employers-item'),
		discountField = mainFunc.querySelector("#discount-btn");

let yourBudget,
shopName,
	price;

openBtn.addEventListener('click', () => {
	yourBudget = prompt("Ваш бюджет на месяц?", "");

	while	( isNaN(yourBudget) || yourBudget	== "" || yourBudget	== null) {
			yourBudget = prompt("Ваш бюджет на месяц?", "");
	}

	budgetValue.textContent = yourBudget;
	allBtn[1].disabled = false;
	discountField.disabled = false;

	shopName = prompt("Название вашего магазина?", "").toUpperCase();
	
	while	( shopName == "" || shopName	== null) {
			shopName = prompt("Название вашего магазина?", "").toUpperCase();
	}

	nameValue.textContent = shopName;
	mainInfo.style.display = 'flex';
	mainFunc.style.display = 'block';
	openBtn.style.display = 'none';
	closeBtn.style.display = 'flex';

});

closeBtn.addEventListener('click', function() {
	nameValue .textContent = '';
budgetValue.textContent  = '';
goodsValue .textContent = '';
itemsValue.textContent  = '';
employersValue.textContent  = '';
timeField.value = '';
budgetField.value = '';
yourBudget = '';
mainList.shopName = '';
allBtn[1].disabled = true;
discountField.disabled =true;
closeBtn.style.display = 'none';
openBtn.style.display = '';
allBtn[0].disabled =true;
for (let i = 0; i < catField.length; i++) {
	catField[i].value = '';
}

});

allBtn[0].addEventListener('click', () => {

	goodsValue.textContent = '';

	for (let i = 0; i < catField.length; i++) {

		let a = catField[i].value;

		if ((typeof(a)) === "string" && (a !== null && a.length < 50) ) {
			console.log("Всё верно");

			if ( (i + 1) == catField.length || a == '') {
				goodsValue.textContent += a;
			} else {
			goodsValue.textContent += a + ', ';
			}
			mainList.shopGoods.push(a);
		} 
	}
});

itemField.addEventListener('change', () => {
	let items = itemField.value;
	if ((typeof(items)) === "string" && (items !== null && items != "" && isNaN(items)) ) {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();
		itemsValue.textContent = mainList.shopItems;
	} 
});

timeField.addEventListener('change', () => {
	let time = timeField.value;
	if (time < 0) {
		console.log('Такого не может быть!');
		mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
	} else if (time < 24) {
		console.log('Магазин закрыт!');
		mainList.open = false;
	} else {
		console.log('Такого не может быть, в сутках 24 часа!');
		mainList.open = false;
	}
	if (mainList.open) {
		isopenValue.style.backgroundColor = '#38ef7d';
	} else {
		isopenValue.style.backgroundColor = '#FF464C';
	}
});
	budgetField.setAttribute('readOnly', true);
	allBtn[1].addEventListener('click', () => {

		budgetField.value = (yourBudget / 30).toFixed(1);
	});

	allBtn[2].addEventListener('click', () => {
		employersValue.textContent = '';
		for (let i = 0; i < namesEmp.length; i++) {
				let a = namesEmp[i].value;
				if ( (typeof(a) === 'string') && (a !== null && a.length < 30 && isNaN(a) ) ) {
					mainList.employers[(i + 1)] = ((i + 1) + " - " + a);
					console.log("Всё верно");
					if ((i + 1) == namesEmp.length || a == ''){
						employersValue.textContent += a;
					} else {
						employersValue.textContent += a + ', ';
					}
				} 
			}
	});

discountField.addEventListener('click', () => {
	if (discountField.checked){
		discountValue.style.backgroundColor = '#38ef7d';
	} else {
		discountValue.style.backgroundColor = '#FF464C';
	}
});

if (nameValue.textContent == '') {

	for (let i = 0; i < allBtn.length; i++) {
		allBtn[i].disabled = true;
	}
	discountField.disabled = true;
}



mainFunc.addEventListener('change', () => {
	let emp_count = 0;
	let item_count = 0;
	for (let i = 0; i < catField.length; i++) {

		if (catField[i].value != '') {
			item_count++;
		}
	}

	if ( (item_count > 0 && yourBudget	!= null) || item_count > 0 && yourBudget	!= '') {
		allBtn[0].disabled = false;
	}else{
		allBtn[0].disabled = true;
	}

	for (let i = 0; i < namesEmp.length; i++) {
		if (namesEmp[i].value != '') {

			emp_count++;
		}
	}

	if (emp_count > 0 && yourBudget	!= null) {
		allBtn[2].disabled = false;
	}else{
		allBtn[2].disabled = true;
	}

	 if (yourBudget != null || yourBudget != '') {
			allBtn[1].disabled = false;
	} else {
		allBtn[1].disabled = true;
	}



});
for (let i = 0; i < namesEmp.length; i++) {
	namesEmp[i].onkeypress = check;
}
function check(e){
	console.log('Работает паттерн');
		let evt =  e || window.event;
		let code = (document.all) || evt.keyCode || evt.charCode;
		if ((code < 1040) || (code > 1103)) {
			if (code == 1105) {
				return true;
			}
			return false;
		}
	}


let mainList = {
		budget: yourBudget,
		shop: shopName,
		shopGoods: [],
		employers: {},
		open: true,
		discount: true,
		shopItems: [],
	

		discountFunc: function discountFunc(cost) {
			if (mainList.discount == true) {
				price = cost * 0.8;
				console.log('Цена с учётом скидки: ' + price);
			} else {
				price = cost;
				console.log('Цена без скидки: ' + price);
			}
		},
};

// 

});