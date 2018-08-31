require('@babel/polyfill');
window.addEventListener('DOMContentLoaded', () => {
var tabY = require('./src/tab.js');
var scrollY = require('./src/scroll.js');
var timerY = require('./src/timer.js');
var modalY = require('./src/modal.js');
var ajaxY = require('./src/ajax.js');
var sliderY = require('./src/slider.js');
var calcY = require('./src/calc.js');


tabY();
scrollY();
timerY();
modalY();
ajaxY();
sliderY();
calcY();   
});