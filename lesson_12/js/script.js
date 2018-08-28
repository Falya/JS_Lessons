window.addEventListener('DOMContentLoaded', () => {
    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0],
        navMenu = document.querySelector('header'),
        divInfo = document.querySelector('.info');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(e) {
        let target = e.target;
        if (target.className == 'info-header-tab') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Скролл
    let start = Date.now();

    function scrolling(draw, brPosition, trPosition, duration) {
        let start = Date.now();

        let scroll = requestAnimationFrame(function scrolling() {
            let timePassed = Date.now() - start,
                timeFraction = timePassed / duration;

            if (timePassed > duration) {
                timePassed = duration;
            }

            if (timeFraction > 1) {
                timeFraction = 1;
            }

            let timing = function(timeFraction) {
                return (1 - Math.sin(Math.acos(timeFraction)));
            };

            let progress = timing(timeFraction),
                r = 0;

            if (trPosition > 0) {
                r = Math.min((brPosition + progress * 10000), (brPosition + trPosition));
            } else {
                r = Math.max((brPosition - progress * 10000), (brPosition + trPosition));
            }
            draw(r);

            if (r != (brPosition + trPosition)) {
                requestAnimationFrame(scrolling);
            }

        });
    }

    function draw(r) {
        window.scrollTo(0, r);
    }

    navMenu.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target.tagName == 'A') {
            let tr = target.getAttribute('href').slice(1),
                targ = document.getElementById(tr).getBoundingClientRect().top - navMenu.clientHeight,
                pos = document.documentElement.scrollTop;

            scrolling(draw, pos, targ, 1200);
        }
    });



    //Скрипт таймера
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

    //Модальное окно

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        overlayPopup = overlay.querySelector('.popup');

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        setAnimation(drawModalIn);
    });

    close.addEventListener('click', function() {
        more.classList.remove('more-splash');
        setAnimation(drawModalOut);

    });

    // Привязка модального окна к кнопкам “Узнать подробнее” в табах

    divInfo.addEventListener('click', function(e) {
        let target = e.target;
        if (target.className == 'description-btn') {
            setAnimation(drawModalIn);

        }
    });

    // Анимация для всех браузеров
    function animationModal(draw, duration, posStart) {
        let start = Date.now(),
            animTimer = requestAnimationFrame(function animationModal() {
                let timer = Date.now() - start,
                    progress = timer / duration;

                if (timer > duration) {
                    timer = duration;
                }

                if (progress > 1) {
                    progress = 1;
                }
                let r = +posStart + timer / (duration / 100);
                draw(progress, r);
                if (timer < duration) {
                    requestAnimationFrame(animationModal);
                }
            });
    }
    // Анимация открытия
    function drawModalIn(a, r) {
        overlay.style.opacity = a;
        overlayPopup.style.left = `${r}%`;
    }
    // Анимация закрытия
    function drawModalOut(a, r) {
        overlay.style.opacity = 1 - a;
        overlayPopup.style.left = `${r}%`;

        if (overlay.style.opacity == 0) {
            overlay.style.display = '';
        }
    }

    //Проверка и установка анимации
    function setAnimation(draw) {
        let browser = navigator.userAgent;
        console.log(browser);
        // Edge и IE
        if (browser.search(/Edge/) > 0 || browser.search(/Trident/) > 0) {
            if (document.body.style.overflow == 'hidden') {
                overlayPopup.classList.remove('slide-in');
                overlay.style.display = '';
                document.body.style.overflow = '';
            } else {
                overlayPopup.classList.add('slide-in');
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';

            }
            //Смартфоны
        } else if ((browser.search(/iPhone/) > 0) || browser.search(/Android/) > 0 ||
            browser.search(/Mobile/) > 0 || browser.search(/Presto/) > 0) {

            if (document.body.style.overflow == 'hidden') {
                overlay.style.display = '';
                document.body.style.overflow = '';
            } else {
                overlay.classList.remove('fade');
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            // Все остальные
        } else {
            overlay.classList.remove('fade');
            let posStart1 = '-50',
                posStart2 = '50';

            if (document.body.style.overflow != 'hidden') {
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
                animationModal(draw, 500, posStart1);
            } else {
                animationModal(draw, 500, posStart2);
                document.body.style.overflow = '';
            }

        }
    }

    // Задание 10

    class Options {
        constructor(height, width, bg, fontSize, textAlign, margin) {
            this.height = height;
            this.width = width;
            this.background = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.margin = margin;
        }

        createDiv() {
            let d = document.createElement('div'),
                footer = document.querySelector('footer'),
                div = footer.parentElement.insertBefore(d, footer);

            for (let opt in this) {
                switch (opt) {
                    case 'fontSize':
                        div.style.cssText += `font-size: ${this[opt]}; \\`;
                        break;
                    case 'textAlign':
                        div.style.cssText += `text-align: ${this[opt]}; \\`;
                        break;
                    default:
                        div.style.cssText += `${opt}: ${this[opt]}; \\`;
                        break;
                }
            }
            div.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reprehenderit, odit atque accusantium totam debitis eveniet, quo molestias saepe illum voluptas tempora repudiandae nulla minus magni perferendis obcaecati, facere fugit!';
        }
    }
    let div = new Options('200px', '400px', '#00B8D4', '20px', 'center', '5% auto');
    div.createDiv();

    //Form
    let message = new Object();
    message.failure = 'Что-то пошло не так...';

    let formModul = document.getElementsByClassName('main-form')[0],
        form = document.getElementById('form'),
        contact = document.querySelector('.contact-form');

    //Вызов функций отображения процесса отправки
    formSubmit(formModul, 'status', formModul);
    formSubmit(form, 'm-f', contact);
    // Функция отображения процесса отправки и отправки 
    // forName - имя формы, extra - добавляемый класс, container - куда добавляем message
    function formSubmit(formName, extra, container) {
        let input = formName.getElementsByTagName('input'),
            statusMessage = document.createElement('div'),
            divCircle = document.createElement('div'),
            divComplete = document.createElement('div');

        statusMessage.classList.add(extra, 'fade');
        formName.addEventListener('submit', function(event) {
            event.preventDefault();
            container.appendChild(statusMessage);

            // AJAX
            let formData = new FormData(formName);

            function postData(data) {

                return new Promise((resolve, reject) => {

                    let request = new XMLHttpRequest();
                    request.open("POST", "server.php");
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


                    request.onreadystatechange = () => {

                        if (request.readyState < 4) {
                            resolve();
                            console.log('loading');
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                console.log('success');
                                resolve();
                            } else {
                                reject();
                                console.log('fail');
                            }
                        }
                    };
                    request.send(formData);
                });
            } // End postData
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData(formData)
                .then(() => {
                    statusMessage.style.display = 'block';
                    statusMessage.appendChild(divCircle);
                    divCircle.appendChild(divComplete);
                    divCircle.classList.add('circle-loader');
                })
                .then(() => {
                    divCircle.classList.add('load-complete');
                    divComplete.classList.add('draw', 'checkmark');
                    setTimeout(() => {
                        statusMessage.classList.add('fadeOut');
                        statusMessage.classList.remove('fade');
                        divCircle.classList.remove('load-complete');
                        divComplete.classList.remove('draw', 'checkmark');
                        setTimeout(() => {
                            statusMessage.style.display = 'none';
                            statusMessage.classList.remove('fadeOut');
                        }, 1500);
                    }, 2000);
                })
                .catch(() => {
                    statusMessage.classList.remove(extra, 'fade');
                    statusMessage.cssText = '';
                    statusMessage.innerHTML = message.failure;
                })
                .then(clearInput);
        });
    }

    //Slider

    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dot = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        for (let i = 0; i < dot.length; i++) {
            dot[i].classList.remove('dot-active');
        }

        slides[slideIndex - 1].style.display = 'block';
        dot[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => {
        plusSlide(-1);
    });

    next.addEventListener('click', () => {
        plusSlide(1);
    });

    dotsWrap.addEventListener('click', (event) => {
        let target = event.target;
        for (let i = 0; i <= dot.length; i++) {
            if (target.classList.contains('dot') && target == dot[i - 1]) {
                currentSlide(i);
            }
        }
    });

    //Calculator

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
        if (persons.value == '' && restDays.value == '') {
            personsSum = 0;
        }
        console.log("personsSum", personsSum);
        total = personsSum * daysSum * 30;
        totalValue.innerHTML = total;
        if (restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        if (daysSum == 0 || restDays.value != '' && restDays.value != 0) {
            daysSum = this.value;
        }
        if (persons.value == '' && restDays.value == '') {
            daysSum = 0;
        }
        console.log("daysSum", daysSum);
        total = personsSum * daysSum * 30;
        totalValue.innerHTML = total;
        if (persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
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
});