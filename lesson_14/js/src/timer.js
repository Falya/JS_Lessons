function timerModule (argument) {
	 let deadline = '2018-03-24',
        isCorrect = true;

    function getTimerRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());

        if (t < 0) {
            t = 0;
            isCorrect = false;
        }

        let seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));

        return {
            'total': t,
            hours,
            minutes,
            seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimerRemaining(endtime);
            hours.innerHTML = (`0${t.hours}`).slice(-2);
            minutes.innerHTML = (`0${t.minutes}`).slice(-2);
            seconds.innerHTML = (`0${t.seconds}`).slice(-2);

            if (t.total <= 0 && isCorrect) {
                clearInterval(timerInterval);
                setClock('timer', Date.now());
            }
        }

        updateClock();

        let timerInterval = setInterval(updateClock, 1000);
    }

    setClock('timer', deadline);
}

module.exports = timerModule;