// 1-я часть
let openBtn = document.querySelector('#open-btn');
console.log(openBtn);

// 2-я часть
let mainInfo = document.getElementsByClassName('main-info');
let infoFields = [];
for (var i = 1; i < mainInfo[0].children.length; i++) {
	infoFields.push(mainInfo[0].children[i]);
	i++;
}
console.log(infoFields);

//3-я часть
let mainFunc = document.getElementsByClassName('main-functions');
let catField = mainFunc[0].getElementsByClassName('goods-item');
console.log(catField);

//4-я часть
 let allBtn = mainFunc[0].getElementsByTagName('button');
 console.log(allBtn);

 //5-я часть
 let itemField = mainFunc[0].querySelector('#items');
 console.log(itemField);
 let timeField = mainFunc[0].querySelector('#time');
 console.log(timeField);
 let budgetField = mainFunc[0].querySelector('#budget');
 console.log(budgetField);

 //6-я часть
 let namesEmp = mainFunc[0].querySelectorAll('.hire-employers-item');
  console.log(namesEmp);