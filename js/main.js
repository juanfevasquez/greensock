(function($) {
    var header = $('.header'),
        h1 = $('.header-title'),
        intro = $('.intro'),
        firstItem = $('li:first-child'),
        secondItem = $('li:nth-child(2)'),
        lastItem = $('li:last-child'),
        image = $('.image');

    
    /*
    TweenMax.to(header, 1, {
        opacity: 0,
        y: 50
    });
    */

    /*
    TweenMax.fromTo(image, 1, {
        x: -400
    },
    {
        x: 200
    });

    //set method: it set an element to a starting position so no time property should be included
    TweenMax.set(h1, {
        color: "red"
    });

    TweenMax.from(intro, 1, {
        autoAlpha: 0, //opacity to 0 and visibility hidden
        delay: 1
    });
    */

    //EASING

    TweenMax.from(image, 1, {
        x: -500, ease: Power4.easeIn
    });

})(jQuery);