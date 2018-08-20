let toggle = document.querySelector('.toggle_menu'),
		sandwich = document.querySelector('.sandwich'),
		spans = sandwich.getElementsByTagName('span');

toggle.addEventListener('click', function() {

	let	start = 0;

	if (!(sandwich.classList.contains('active'))) {
		sandwich.classList.add('active');

		requestAnimationFrame(function animate(time) {
				start++;
				drawOn(start);

				if (start  < 60) {
				requestAnimationFrame(animate);
			} 
			
		});
	} else {
		sandwich.classList.remove('active');

		requestAnimationFrame(function animate(time) {
				drawOff(start);
				start++;

				if (start  < 60) {
				requestAnimationFrame(animate);
			} 
			
		});
	}
});

function drawOn(time){
	spans[0].style.top = time*2 +'px';
	spans[0].style.transform = `rotate(-${time*0.75}deg)`;
	spans[1].style.transform = `rotate(${time*0.75}deg)`;
	spans[2].style.transform = `rotate(${time*3}deg)`;
	spans[2].style.top = 60 - time +'px';
	spans[2].style.opacity = 1 - time/60;
}

function drawOff(time){
	spans[0].style.top = (120 - time*2) + 'px';
	spans[0].style.transform = `rotate(${-44.5 + time*0.75}deg)`;
	spans[1].style.transform = `rotate(${44.5 - time*0.75}deg)`;
	spans[2].style.transform = `rotate(${-time*3.05}deg)`;
	spans[2].style.top = -30 + time*2.5 +'px';
	spans[2].style.opacity = +(getComputedStyle(spans[2]).opacity) + time/60;
}
