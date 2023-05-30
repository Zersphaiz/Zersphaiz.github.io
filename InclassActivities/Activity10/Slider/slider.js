$(document).ready(function() {
    var slider = $("#slider").bxSlider({
        auto: true,
		pager:true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 250,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        pause: 3000,			//Otomatik gecis pager eklemeden once calisiyordu ancak sonrasinda calismamaya basladi.
        caption: true,
        pagerType: 'short',
        pagerCustom: '#pager',
        onSliderLoad: function(currentIndex) {
            var currentSlide = currentIndex + 1;
            var totalSlides = slider.getSlideCount();
            $(".slider-pager").text(currentSlide + "/" + totalSlides);
        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {
            var currentSlide = newIndex + 1;
            $(".slider-pager").text(currentSlide + "/" + slider.getSlideCount());
        }
    });
    var slideDuration = 3000; 
    slider.on('onSliderLoad', function() {
        setInterval(function() {
            slider.goToNextSlide();
        }, slideDuration);
    });

    $("#slider").on("click", function() {
        slider.startAuto();
    });
});