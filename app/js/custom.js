jQuery(document).ready(function($){
	/* Placeholder f*/
	$("input[placeholder]").placeholder();
	
	/* WOW Effect */
	new WOW().init();
	
	
	/* Scroll On button click */
	$('.localScroll').localScroll({
        hash: false,
        offset: -68,
        duration: 1000,
		onBefore:function( e, anchor, $target ){
			header_height = 0 - ($('.header_section').height());
			this.offset = {
				top: ($('.header_section').css('position') == 'static') ? 0 : header_height
			}
		},
		onAfter:function( anchor, settings ){
			return false;
		}
	});
	
	
	/* Scroll On Menu Click */
	$('#id_menu').onePageNav({
		changeHash:false,
		scrollOffset: 68, //Height of Navigation Bar
		scrollThreshold: 0.2,
		filter: ':not(.external)',
		begin: function() {
			//I get fired when the animation is starting
			header_height =  ($('.header_section').height());
			this.scrollOffset = header_height;
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});
	
	/* Menu Make More */
	$('#id_menu').flexMenu({'cutoff' :1});
	$(document).on("click",".flexMenu-popup a",function(){
		$('.flexMenu-popup').hide();
	});
	
	/* Resize Slider Background */
	
	$('.wa-slider-bg .cycle-slideshow img').imagesLoaded( function() {
		$('#id_slider_big .wa-slider-bg').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
		$('#id_slider_big .countdown-container').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
		$('#id_slider_big .slider-info-container').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
	});
	
	
	
	$(window).resize(function() {
		if (($(document).width()>992)||($(document).width()<768)) { 
			$('#id_slider_big .wa-slider-bg').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
			$('#id_slider_big .countdown-container').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
			$('#id_slider_big .slider-info-container').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
		
		}
		else {
			$('#id_slider_big .wa-slider-bg').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
			$('#id_slider_big .countdown-container').css("height", Math.round($('#id_slider_big  .wa-slider-bg img').height()) + 'px');
			$('#id_slider_big .slider-info-container').css("height", Math.round($('#id_slider_big  .wa-slider-bg img').height()) + 'px');
		} 
		
	});
	
	$( '.wa-slider-bg' ).on( 'cycle-before', function( event, opts ) {
		if (($(document).width()>992)||($(document).width()<768)) { 
			$('#id_slider_big .wa-slider-bg').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
			$('#id_slider_big .countdown-container').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
			$('#id_slider_big .slider-info-container').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
		
		}
		else {
			$('#id_slider_big .wa-slider-bg').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
			$('#id_slider_big .countdown-container').css("height", Math.round($('#id_slider_big  .wa-slider-bg img').height()) + 'px');
			$('#id_slider_big .slider-info-container').css("height", Math.round($('#id_slider_big  .wa-slider-bg img').height()) + 'px');
		} 
		
	});
	$('.wa-slider-bg' ).on( 'cycle-after', function( event, opts ) {
		if (($(document).width()>992)||($(document).width()<768)) { 
			$('#id_slider_big .wa-slider-bg').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
			$('#id_slider_big .countdown-container').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
			$('#id_slider_big .slider-info-container').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
		
		}
		else {
			$('#id_slider_big .wa-slider-bg').css("height", $('#id_slider_big  .wa-slider-bg img').height() + 'px');
			$('#id_slider_big .countdown-container').css("height", Math.round($('#id_slider_big  .wa-slider-bg img').height()) + 'px');
			$('#id_slider_big .slider-info-container').css("height", Math.round($('#id_slider_big  .wa-slider-bg img').height()) + 'px');
		} 
			
	});
	
	
	
	/* TABS */
	$( ".wa-tabs" ).tabs();
	
	/* ACCORDION */
	$("h3.wa-toggle-trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("fast");return false;
	});
	
	/* COUNTDOWN TIMER */
	 var liftoffTime = new Date(2017, 5 , 22); // Format (Year, Month, Date). (0:January,1:Febuary,2:March,3:April,4:May etc) , date
	 $('#timer').countdown({ 
		  labels: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'], 
          labels1: ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'],
		  until: liftoffTime, format: 'DHMS',
		  layout:'\
			<div class="dash count-day">\
				<div class="dash-number">{dn}</div>\
				<div class="dash-info"><i>days</i></div>\
			</div>\
			<div class="dash count-hour">\
				<div class="dash-number">{hn}</div>\
				<div class="dash-info"><i>hours</i></div>\
			</div>\
			<div class="dash dash-clear count-minute">\
				<div class="dash-number">{mn}</div>\
				<div class="dash-info"><i>minutes</i></div>\
			</div>\
			<div class="dash count-second">\
				<div class="dash-number">{sn}</div>\
				<div class="dash-info"><i>seconds</i></div>\
			</div>\
			<div class="clearfix"></div>\
		  '});
		
	
	//SUBSCRIBE SUBMIT FORM
	$('.form-subscribe').validate({
		rules: {
			input_email: {
				required: true,
				email: true
			}
		},
		submitHandler: function(form) {
			var a=$('.form-subscribe').serialize();
			$.ajax({
				type: "POST",
				url: "subscribe_process.php",
				data:a,
				complete:function(){
				},
				beforeSend: function() {
				
				},
				success: function(data){
					
					if (data=='success') {
						alert('Your email has been processed');
						$('.form-subscribe').find("input[type=text], textarea").val("");
					} else {
						alert(data);
					}
				},
				error : function() {
				
				}
			});
			return false;
		}
	});
	
	//REGISTER SUBMIT FORM
	jQuery.validator.addMethod(
		"math", 
		function(value, element, params) { 
			if (value==='')
				return false;
			return this.optional(element) || value == params[0] + params[1]; 
		},
		jQuery.format("Please enter the correct value for {0} + {1}")
	);
	$('.form-register').validate({
		rules: {
			input_name: {
				minlength: 3,
				required: true
			},
			input_email: {
				required: true,
				email: true
			},
			input_message: {
				minlength: 10,
				required: true
			}
			,
			input_captcha: {
				math: [13, 5]
			}
		},
		submitHandler: function(form) {
			var a=$('.form-register').serialize();
			$.ajax({
				type: "POST",
				url: "contact_process.php",
				data:a,
				complete:function(){
				},
				beforeSend: function() {
				
				},
				success: function(data){
					if (data=='success') {
						$('.form-register').find("input[type=text], textarea").val("");
						alert('Your data has been succesfull to be sent');
					} else {
						alert(data);
					}
				},
				error : function() {
				
				}
			});
			return false;
		}
	});
	
	
});

/*--------- scroll down navigation ----------- */
jQuery(function() {
	
	var bar = jQuery('.header_section');
	var top = bar.css('top');
	var ww = jQuery(window).width();
	var navigationHeight = -jQuery('.header_section').height();
	var mobileTop = Math.floor(navigationHeight - 128);
	
	jQuery(window).scroll(function() {
		if(jQuery(this).scrollTop() > 310) {
			bar.stop().animate({top : '0'}, 300);
		} else {
			if(ww < 768) {
				bar.stop().animate({top : mobileTop}, 200);
			} else {
				bar.stop().animate({top : top}, 300);
			
			}
			
		}
	});
});
/*--------- scroll down navigation end ----------- */