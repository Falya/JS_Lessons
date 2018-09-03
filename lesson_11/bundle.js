(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.addEventListener('DOMContentLoaded', function () {
    var tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0],
        navMenu = document.querySelector('header'),
        divInfo = document.querySelector('.info');

    function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
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

    info.addEventListener('click', function (e) {
        var target = e.target;
        if (target.className == 'info-header-tab') {
            for (var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Скролл
    var start = Date.now();

    function scrolling(draw, brPosition, trPosition, duration) {
        var start = Date.now();

        var scroll = requestAnimationFrame(function scrolling() {
            var timePassed = Date.now() - start,
                timeFraction = timePassed / duration;

            if (timePassed > duration) {
                timePassed = duration;
            }

            if (timeFraction > 1) {
                timeFraction = 1;
            }

            var timing = function timing(timeFraction) {
                return 1 - Math.sin(Math.acos(timeFraction));
            };

            var progress = timing(timeFraction),
                r = 0;

            if (trPosition > 0) {
                r = Math.min(brPosition + progress * 10000, brPosition + trPosition);
            } else {
                r = Math.max(brPosition - progress * 10000, brPosition + trPosition);
            }
            draw(r);

            if (r != brPosition + trPosition) {
                requestAnimationFrame(scrolling);
            }
        });
    }

    function draw(r) {
        window.scrollTo(0, r);
    }

    navMenu.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target;

        if (target.tagName == 'A') {
            var tr = target.getAttribute('href').slice(1),
                targ = document.getElementById(tr).getBoundingClientRect().top - navMenu.clientHeight,
                pos = document.documentElement.scrollTop;

            scrolling(draw, pos, targ, 1200);
        }
    });

    //Скрипт таймера
    var deadline = '2018-03-24',
        isCorrect = true;

    function getTimerRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());

        if (t < 0) {
            t = 0;
            isCorrect = false;
        }

        var seconds = Math.floor(t / 1000 % 60),
            minutes = Math.floor(t / 1000 / 60 % 60),
            hours = Math.floor(t / (1000 * 60 * 60));

        return {
            'total': t,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function setClock(id, endtime) {
        var timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function updateClock() {
            var t = getTimerRemaining(endtime);
            hours.innerHTML = ('0' + t.hours).slice(-2);
            minutes.innerHTML = ('0' + t.minutes).slice(-2);
            seconds.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0 && isCorrect) {
                clearInterval(timerInterval);
                setClock('timer', Date.now());
            }
        }

        updateClock();

        var timerInterval = setInterval(updateClock, 1000);
    }

    setClock('timer', deadline);

    //Модальное окно

    var more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        overlayPopup = overlay.querySelector('.popup');

    more.addEventListener('click', function () {
        this.classList.add('more-splash');
        setAnimation(drawModalIn);
    });

    close.addEventListener('click', function () {
        more.classList.remove('more-splash');
        setAnimation(drawModalOut);
    });

    // Привязка модального окна к кнопкам “Узнать подробнее” в табах

    divInfo.addEventListener('click', function (e) {
        var target = e.target;
        if (target.className == 'description-btn') {
            setAnimation(drawModalIn);
        }
    });

    // Анимация для всех браузеров
    function animationModal(draw, duration, posStart) {
        var start = Date.now(),
            animTimer = requestAnimationFrame(function animationModal() {
            var timer = Date.now() - start,
                progress = timer / duration;

            if (timer > duration) {
                timer = duration;
            }

            if (progress > 1) {
                progress = 1;
            }
            var r = +posStart + timer / (duration / 100);
            draw(progress, r);
            if (timer < duration) {
                requestAnimationFrame(animationModal);
            }
        });
    }
    // Анимация открытия
    function drawModalIn(a, r) {
        overlay.style.opacity = a;
        overlayPopup.style.left = r + '%';
    }
    // Анимация закрытия
    function drawModalOut(a, r) {
        overlay.style.opacity = 1 - a;
        overlayPopup.style.left = r + '%';

        if (overlay.style.opacity == 0) {
            overlay.style.display = '';
        }
    }

    //Проверка и установка анимации
    function setAnimation(draw) {
        var browser = navigator.userAgent;
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
        } else if (browser.search(/iPhone/) > 0 || browser.search(/Android/) > 0 || browser.search(/Mobile/) > 0 || browser.search(/Presto/) > 0) {

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
            var posStart1 = '-50',
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

    var Options = function () {
        function Options(height, width, bg, fontSize, textAlign, margin) {
            _classCallCheck(this, Options);

            this.height = height;
            this.width = width;
            this.background = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.margin = margin;
        }

        _createClass(Options, [{
            key: 'createDiv',
            value: function createDiv() {
                var d = document.createElement('div'),
                    footer = document.querySelector('footer'),
                    div = footer.parentElement.insertBefore(d, footer);

                for (var opt in this) {
                    switch (opt) {
                        case 'fontSize':
                            div.style.cssText += 'font-size: ' + this[opt] + '; \\';
                            break;
                        case 'textAlign':
                            div.style.cssText += 'text-align: ' + this[opt] + '; \\';
                            break;
                        default:
                            div.style.cssText += opt + ': ' + this[opt] + '; \\';
                            break;
                    }
                }
                div.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem reprehenderit, odit atque accusantium totam debitis eveniet, quo molestias saepe illum voluptas tempora repudiandae nulla minus magni perferendis obcaecati, facere fugit!';
            }
        }]);

        return Options;
    }();

    var div = new Options('200px', '400px', '#00B8D4', '20px', 'center', '5% auto');
    div.createDiv();

    //Form
    var message = new Object();

    message.loading = 'Загрузка...';
    message.success = 'Спасибо! Мы скоро с Вами свяжемся!';
    message.failure = 'Что-то пошло не так...';

    var formModul = document.getElementsByClassName('main-form')[0],
        form = document.getElementById('form');
    formSubmit(formModul);
    formSubmit(form);

    function formSubmit(formName) {
        var input = formName.getElementsByTagName('input'),
            statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
        formName.addEventListener('submit', function (event) {
            event.preventDefault();
            formName.appendChild(statusMessage);

            // AJAX
            var request = new XMLHttpRequest();
            // 1) Создаём объект запроса

            request.open("POST", "server.php");

            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            var formData = new FormData(formName);
            request.send(formData);
            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                }
            };
            for (var i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        });
    }
});

},{}]},{},[1]);
