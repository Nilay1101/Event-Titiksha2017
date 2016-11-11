jQuery(document).ready(function($){	
	
	$('#wa-style-switcher .wa-styleswitcher-head').on('click',function(){
		if ($(this).parent().css('left')=='0px') {
			$(this).parent().animate({'left' : '-200px'}, 500);
		} else {
			$(this).parent().animate({'left' : '0px'}, 500);
		}
	});
		
	function wa_get_style_url(color) {
		return 'http://www.wpamanuke.com/html/sujib/style/'+ color +'/style.css';
		//return 'http://localhost/tf/html/xevent/html/3/PREVIEW/style/'+ color +'/style.css';
	}
	if($.cookie('css') != undefined) { 
		$("#ponzi_css_less-css").attr("href",wa_get_style_url($.cookie('css')));
		$('select[name="wa-styleswitcher-color"]').val($.cookie('css'));
	}
	$('select[name="wa-styleswitcher-color"]').on('change',function(){
		$("#sujib_css").attr("href",wa_get_style_url($(this).val()));
		$.cookie("css",$(this).val(), {expires: 365, path: '/'});
	});
	
});