window.addEventListener('DOMContentLoaded', function() {
		let tab = document.getElementsByClassName('info-header-tab'),
				tabContent  =document.getElementsByClassName('info-tabcontent'),
				info = document.getElementsByClassName('info-header')[0],
				navMenu = document.querySelector('header');

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

			let timing = function(timeFraction){
						return (1 - Math.sin(Math.acos(timeFraction)));
					};

			let progress = timing(timeFraction),
					r = 0;

			if (trPosition > 0 ) {
				r = Math.min( (brPosition + progress * 10000 ), (brPosition + trPosition) );
			} else {
				r = Math.max( (brPosition - progress * 10000 ), (brPosition + trPosition) );
			}
			draw(r);

			if ( r != (brPosition + trPosition) ) {
      requestAnimationFrame(scrolling);
    } 

		});
	}

	function draw (r) {
		window.scrollTo(0, r);
	}
		
		navMenu.addEventListener('click', function(e) {
			e.preventDefault();
			let target = e.target;

			if (target.tagName == 'A') {
				let tr = target.getAttribute('href').slice(1),
						targ = document.getElementById(tr).getBoundingClientRect().top - navMenu.clientHeight,
						pos = document.documentElement.scrollTop;

			scrolling(draw, pos, targ, 3000);
			}
		});



		//Скрипт таймера
		let deadline = '2018-03-20',
				isCorrect = true;

		function getTimerRemaining(endtime) {
			let t = Date.parse(endtime) - Date.parse(new Date());

			if (t < 0) {
				t = 0;
				isCorrect = false;
			}

			let seconds = Math.floor((t / 1000) % 60),
					minutes = Math.floor((t / 1000 / 60) % 60),
					hours =  Math.floor(t / (1000 * 60 * 60));

					return {
						'total': t,
						'hours': hours,
						'minutes': minutes,
						'seconds': seconds
					};
		}

		function setClock(id, endtime) {
			let timer = document.getElementById(id),
					hours = timer.querySelector('.hours'),
					minutes = timer.querySelector('.minutes'),
					seconds = timer.querySelector('.seconds');

					function updateClock() {
						let t = getTimerRemaining(endtime);
						hours.innerHTML = ('0' + t.hours).slice(-2);
						minutes.innerHTML = ('0' + t.minutes).slice(-2);
						seconds.innerHTML = ('0' + t.seconds).slice(-2);

						if (t.total <= 0 && isCorrect) {
							clearInterval(timerInterval);
							setClock('timer', '2018-08-23');
						}
					}

					updateClock();
					let timerInterval = setInterval(updateClock, 1000);
		}

		setClock('timer', deadline);


});


