// 1-я часть
let openBtn = document.getElementById('open-btn');
console.log(openBtn);

// 2-я часть
let mainInfo = document.getElementsByClassName('main-info')[0];
let nameValue = mainInfo.getElementsByClassName('name-value')[0];
let budgetValue = mainInfo.getElementsByClassName('budget-value')[0];
let goodsValue = mainInfo.getElementsByClassName('goods-value')[0];
let itemsValue = mainInfo.getElementsByClassName('items-value')[0];
let employersValue = mainInfo.getElementsByClassName('employers-value')[0];
let isopenValue = mainInfo.getElementsByClassName('isopen-value')[0];

console.log(nameValue);
console.log(budgetValue);
console.log(goodsValue);
console.log(itemsValue);
console.log(employersValue);
console.log(isopenValue);


//3-я часть
let mainFunc = document.getElementsByClassName('main-functions')[0];
let catField = mainFunc.getElementsByClassName('goods-item')[0];
console.log(catField);

//4-я часть
 let allBtn = mainFunc.getElementsByTagName('button');
 console.log(allBtn);

 //5-я часть
 let itemField = mainFunc.querySelector('#items');
 console.log(itemField);
 let timeField = mainFunc.querySelector('#time');
 console.log(timeField);
 let budgetField = mainFunc.querySelector('#budget');
 console.log(budgetField);

 //6-я часть
 let namesEmp = mainFunc[0].querySelectorAll('.hire-employers-item');
  console.log(namesEmp);