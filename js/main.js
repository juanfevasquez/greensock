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

    /*
    TweenMax.from(image, 1, {
        x: -500, ease: Power0.easeIn
    });
    */

    /*
    TweenMax.from(image, 1, {
        x: -500, ease: Elastic.easeInOut
    });
    */ 
    
    /*
    TweenMax.from(image, 1, {
        x: -500, ease: Expo.easeIn
    });
    */

    /*
    TweenMax.from(image, 1, {
        x: -500, ease: Sine.easeIn
    });
    */

    /*
    Visit greensock.com/ease-visualizer to check all the available ease effects
    */

    // CALLBACKS

    TweenMax.from(image, 3, {
        x: -500,
        ease: Power1.easeInOut,
        onStart: onStart,
        onUpdate: onUpdate,
        onComplete: onComplete
    });

    function onStart() {
        console.log('animation started');
    }

    function onUpdate() {
        console.log('animation is in progress');
    }

    function onComplete() {
        console.log('animation completed');
    }

})(jQuery);