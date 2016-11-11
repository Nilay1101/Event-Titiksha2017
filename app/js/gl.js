var full=false;

$('.imgWrap').hover(function () {
 // $(this).css('width', '36%');
   $(this).addClass('current');
  //$(this).siblings().css('width', '16%');  
   $(this).siblings().addClass('notCurrent');
}, function () {
  //$('.imgWrap').css('width', '20%');  
  $('.imgWrap').siblings().removeClass('notCurrent');
  $('.imgWrap').removeClass('current');
 });

$('.imgWrap').click(function () {  
  
  if(!full){
    full = true;
    // $(this).css('width', '100%');
    $(this).addClass('current-full');
  //$(this).siblings().css('width', '0%');  
   $(this).siblings().addClass('notCurrent-full');
  }
});

$('.mfp-close').click(function () {
  full = false;
  $('.imgWrap').siblings().removeClass('notCurrent-full');
  $('.imgWrap').removeClass('current-full');
 
});

$('.gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  }
});
