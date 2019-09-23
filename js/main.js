/**First slider */
$(document).on('ready', function() {
    $('.slider-one')
    .slick({
        autoplay:true,
        autoplaySpeed:5000,
        dots:false, //this is for the dots on the bottom of the banner
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        prevArrow:".site-slider .slider-btn .prev",
        nextArrow:".site-slider .slider-btn .next"
    });
});
