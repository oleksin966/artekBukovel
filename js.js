$(window).ready(function() {
	var wHeight = $(window).height();
	$('.slide')
	.height(wHeight)
	.scrollie({
		scrollOffset: -50,
		scrollingInView: function(elem){
			var bgColor = elem.data('background');

			$('body').css('background-color', bgColor);
		}
	});
});



$(document).ready(function(){
      $('.next').click(function(){
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextImage = $('.img').eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');
        event.preventDefault();
        if (nextImageIndex == ($('.img:last').index()+1)) {
          $('.img').eq(0).fadeIn(1000);
          $('.img').eq(0).addClass('curry');
        }else{
          nextImage.fadeIn(1000);
          nextImage.addClass('curry');


        }

      })

    });



$('.sl').slick();