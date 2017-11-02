$(document).ready(function(){

	var $animation_elements = $('.coin-1, .coin-2, .coin-3, .chart-mask, .data1, .data2, .data3, .data4, .feature-1, .feature-2, .feature-3, .feature-4, .feature-1 .arrows, .feature-2 .combination, .stringsWhite1, .stringsWhite2, .stringsWhite3, .stringsBlue1, .stringsBlue2, .stringsBlue3, .line1, .line2, .line3, .line4, .comp3');
	var $window = $(window);
	
	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	 
	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	 
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      $element.addClass('start');
	    }
	  });
	}
	
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
	
	var media = $('video').not("[autoplay='autoplay']");
            var tolerancePixel = 40;

            function checkMedia(){
                // Get current browser top and bottom
                var scrollTop = $(window).scrollTop() + tolerancePixel;
                var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

                media.each(function(index, el) {
                    var yTopMedia = $(this).offset().top;
                    var yBottomMedia = $(this).height() + yTopMedia;

                    if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
                        $(this).get(0).play();
                    } else {
                        $(this).get(0).pause();
                    }
                });

                //}
            }
            $(document).on('scroll', checkMedia);
	
	
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();
	
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});
	
	$('.responsiveMenu').click(function(){
	    $('nav.mainMenu ul').toggleClass('active');
	});
	
	$('.data1').click(function(){
	    $('.overlaydata1').toggleClass('enlarge');
	}); 
	
	$('.data2').click(function(){
	    $('.overlaydata2').toggleClass('enlarge');
	}); 
	
	$('.data3').click(function(){
	    $('.overlaydata3').toggleClass('enlarge');
	}); 
	
	$('.data4').click(function(){
	    $('.overlaydata4').toggleClass('enlarge');
	});
	
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 50) {
	       $('header').addClass('fixed');
	    }
	    else {
	       $('header').removeClass('fixed');
	    }
	});
	
	$('#home').click(function(){
		$('html, body').animate({scrollTop : 0},800);
	});
	
	
});



