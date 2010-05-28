$(document).ready(function() {
	
	var text_input_ht = $('input[type="text"]').height();
	
	//text input label behavior
	$('form.pork_form input[type="text"]').prev('label').css({'display':'block', 'position':'absolute', 'height':text_input_ht});
	$('form.pork_form input[type="text"]').focus(function(){
		$('form.pork_form input[type="text"]').prev('label').animate({'margin-top':'-10px', 'font-size':'10px'},250);
	})
	
	//textarea label behavior
	$('form.pork_form textarea').prev('label').css({'display':'block', 'position':'absolute'});
	$('form.pork_form textarea').focus(function(){
	  $('form.pork_form textarea').prev('label').animate({'margin-top':'-10px', 'font-size':'10px'},250);
	})
	//put label back if field is out of focus
	.blur(function(){
		$('form.pork_form input[type="text"]').prev('label').animate({'margin-top':'0', 'font-size':'16px'},250);
		$('form.pork_form textarea').prev('label').animate({'margin-top':'0', 'font-size':'16px'}, 250);
	})
	
});