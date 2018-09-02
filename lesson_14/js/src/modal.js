function modalModule () {
	let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        overlayPopup = overlay.querySelector('.popup'),
        divInfo = document.querySelector('.info');

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        setAnimation(drawModalIn);
    });

    close.addEventListener('click', function() {
        more.classList.remove('more-splash');
        setAnimation(drawModalOut);

    });

    // Привязка модального окна к кнопкам “Узнать подробнее” в табах

    divInfo.addEventListener('click', (e) => {
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
}

module.exports = modalModule;