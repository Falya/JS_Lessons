function calc() {
    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        if (personsSum == 0 || persons.value != '' && persons.value != 0) {
            personsSum = this.value;
        }
        if ((persons.value == '' && restDays.value == '') || (persons.value == 0 && persons.value != '')) {
            personsSum = 0;
        }
        console.log("personsSum", personsSum);
        total = personsSum * daysSum * 30;
        totalValue.innerHTML = total;
        if (restDays.value == '') {
            totalValue.innerHTML = 0;
            place.options[0];
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
    });

    restDays.addEventListener('change', function() {
        if (daysSum == 0 || restDays.value != '' && restDays.value != 0) {
            daysSum = this.value;
        }
        if ((persons.value == '' && restDays.value == '') || (restDays.value == 0 && restDays.value != '')) {
            daysSum = 0;
        }
        console.log("daysSum", daysSum);
        total = personsSum * daysSum * 30;
        totalValue.innerHTML = total;
        if (persons.value == '') {
            totalValue.innerHTML = 0;
            place.options[0];
        } else {
            totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }
    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
    //  Обработчики событий на инпуты
    persons.addEventListener('keypress', inputValidator);
    restDays.addEventListener('keypress', inputValidator);

    function inputValidator(event) {
        if (event.key.search(/[0-9]/)) {
            if (event.keyCode == 43 || event.keyCode == 101 || event.keyCode == 46 || event.keyCode == 44 || event.keyCode == 45) {
                event.preventDefault();
            }
            console.log(event.key);
            return event.key;
        } else {
            return '';
        }
    }
}
module.exports = calc;