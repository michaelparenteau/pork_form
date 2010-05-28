$(document).ready(function() {
	
	var text_input_ht = $('input[type="text"]').height();
	
	$('input[type="text"]').prev('label').css({'display':'block', 'position':'absolute', 'height':text_input_ht});
	
	$('input[type="text"]').focus(function(){
		$('input[type="text"]').prev('label').animate({'margin-top':'-10px', 'font-size':'10px'},250);
	})
	.blur(function(){
		$('input[type="text"]').prev('label').animate({'margin-top':'0', 'font-size':'16px'},250);
	})
	
	$('textarea').prev('label').css({'display':'block', 'position':'absolute'});
	
	
});