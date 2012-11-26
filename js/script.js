(function($){	
  $(function(){

        var slider = $('#slider').bxSlider({
                mode: 'fade',
                auto: true,
				nextSelector: '#slider-next',
				prevSelector: '#slider-previous',
				nextText: '<img src="images/next-arrow.png" />',
				prevText: '<img src="images/previous-arrow.png" />',
                onAfterSlide: function(currentSlide, totalSlides){
                  $('.slide-pager a').removeClass('pager-active');
                  $('.slide-pager a').eq(currentSlide).addClass('pager-active');
                }
        });
  
        $('.slide-pager a').click(function(){
          var thumbIndex = $('.slide-pager a').index(this);
          slider.goToSlide(thumbIndex);
        
          $('.slide-pager a').removeClass('pager-active');
          $(this).addClass('pager-active');
          return false;
        });

        $('.slide-pager a:first').addClass('pager-active');
        
  });}(jQuery))



$(document).ready(function(){

if(!Modernizr.input.placeholder){

        $('[placeholder]').focus(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
          }
        }).blur(function() {
          var input = $(this);
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
          }
        }).blur();
        $('[placeholder]').parents('form').submit(function() {
          $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                  input.val('');
                }
          })
        });

}

});



$(document).ready(function(){
	$('#contact-form').jqTransform();

	$("button").click(function(){

		$(".formError").hide();

	});

	var use_ajax=true;
	$.validationEngine.settings={};

	$("#contact-form").validationEngine({
		inlineValidation: false,
		promptPosition: "centerRight",
		success :  function(){use_ajax=true},
		failure : function(){use_ajax=false;}
	 })

	$("#contact-form").submit(function(e){

			if(!$('#subject').val().length)
			{
				$.validationEngine.buildPrompt(".jqTransformSelectWrapper","* This field is required","error")
				return false;
			}
			
			if(use_ajax)
			{
				$('#loading').css('visibility','visible');
				$.post('submit.php',$(this).serialize()+'&ajax=1',
				
					function(data){
						if(parseInt(data)==-1)
							$.validationEngine.buildPrompt("#captcha","* Wrong verification number!","error");
							
						else
						{
							$("#contact-form").hide('slow').after('<h1>Thank you!</h1>');
						}
						
						$('#loading').css('visibility','hidden');
					}
				
				);
			}
			e.preventDefault();
	})

});