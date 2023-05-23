jQuery(document).ready(function($){
	$(document).ready(function() {
     
     
		$("a.topLink").click(function() {
			 $("html, body").animate({
					scrollTop: $($(this).attr("href")).offset().top + "px"
			 }, {
					duration: 500,
					easing: "swing"
			 });
			 return false;
		});

 });
});



// 	$('.menu-burger__header').click(function(){
//         $('.menu-burger__header').toggleClass('open-menu');
//         $('.header__nav').toggleClass('open-menu');
//         $('body').toggleClass('fixed-page');

// 				$("href").toggleClass('open-menu');
// 	});

// 	$("href").click(function(){
// 		$("href").toggleClass('open-menu');
// });

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');	


