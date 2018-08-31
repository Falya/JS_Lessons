function scrollPage() {
    let navMenu = document.querySelector('nav');

    function scrollingAll(draw, brPosition, trPosition, duration) {
        let start = Date.now();

        let scroll = requestAnimationFrame(function scrollingAll() {
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
                requestAnimationFrame(scrollingAll);
            }

        });
    }

    function draw(r) {
        window.scrollTo(0, r);
    }

    function scrollingEdge(draw, duration) {
        let start = Date.now();

        let scroll = requestAnimationFrame(function scrollingEdge() {
            let timePassed = Date.now() - start;


            if (timePassed > duration) {
                timePassed = duration;
            }

            draw(timePassed);

            if (timePassed < duration) {
                requestAnimationFrame(scrollingEdge);
            }

        });
    };

    navMenu.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target,
            browser = navigator.userAgent;
        if (target.tagName == 'A') {
            let tr = target.getAttribute('href').slice(1);

            if (browser.search(/Edge/) > 0) {
                scrollingEdge(function(timePassed) {
                	let trg = document.getElementById(tr);
                    window.scrollBy(0, trg.getBoundingClientRect().top / 20 - 3);
                }, 1200);
            } else {
                let targ = document.getElementById(tr).getBoundingClientRect().top - navMenu.clientHeight,
                    pos = document.documentElement.scrollTop;
                scrollingAll(draw, pos, targ, 1200);
            }

        }
    });


}

module.exports = scrollPage;