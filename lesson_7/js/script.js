window.addEventListener('DOMContentLoaded', function() {
	if (document.title == 'Yoga') {
		let tab = document.getElementsByClassName('info-header-tab'),
			tabContent  =document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

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
	} else {
		//Скрипт таймера

		let content = document.getElementsByClassName('content')[0];
		content.style.minHeight = window.innerHeight + 'px';
		content.style.marginTop = '-150px';
		let timer = document.getElementsByClassName('hours')[0];
		setInterval(function() {
		let date = new Date();
		let formatedDate = ('0' + date.getHours()).slice(-2) + ' : ' +
										 ('0' + date.getMinutes()).slice(-2) + 
										' : ' + ('0' + date.getSeconds()).slice(-2);
		timer.innerHTML = formatedDate;
		}, 1000);
	}
});


