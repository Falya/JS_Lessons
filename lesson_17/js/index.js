
$(document).ready(() => {
  
  setTimeout(() => {
  	$('.transition-loader').fadeOut('slow', function() {
  		$('body').css('overflow', 'visible');
  	});
  }, 1500)
	  
    let numItems = $('li.fancyTab').length;
		
	
			  if (numItems == 12){
					$("li.fancyTab").width('8.3%');
				}
			  if (numItems == 11){
					$("li.fancyTab").width('9%');
				}
			  if (numItems == 10){
					$("li.fancyTab").width('10%');
				}
			  if (numItems == 9){
					$("li.fancyTab").width('11.1%');
				}
			  if (numItems == 8){
					$("li.fancyTab").width('12.5%');
				}
			  if (numItems == 7){
					$("li.fancyTab").width('14.2%');
				}
			  if (numItems == 6){
					$("li.fancyTab").width('16.666666666666667%');
				}
			  if (numItems == 5){
					$("li.fancyTab").width('20%');
				}
			  if (numItems == 4){
					$("li.fancyTab").width('25%');
				}
			  if (numItems == 3){
					$("li.fancyTab").width('33.3%');
				}
			  if (numItems == 2){
					$("li.fancyTab").width('50%');
				}
		  
	 $(".owl-carousel").owlCarousel({
	 	animateOut: 'rotateOutUpRight',
    animateIn: 'rotateInDownLeft',
    smartSpeed:450,
	 	stagePadding: 10,
    loop:true,
    margin:2,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    dots: true
    
	 });

	 $( document ).ready(() => {
  $('.trigger').on('click', function() {
     $('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
     return false;
  });
});
	
		});