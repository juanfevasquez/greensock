(function() {
    // How to Animate one element after another

    var title = document.querySelector('.header-title'),
        intro = document.querySelector('.intro'),
        subtitle = document.querySelector('.header-subtitle'),
        list = document.querySelector('.list')
        image = document.querySelector('.image');

    // Use TimelineMax library: included with TweenMax

    // Set a new variable for the TimelineMax
    var tl = new TimelineMax();
    /* 
    tl.from(title, 0.3, {
        y: -30,
        autoAlpha: 0,
        ease: Power1.easeOut,
    })
    .from(intro, 0.3, {
        y: -30,
        autoAlpha: 0,
        ease: Power1.easeOut
    }, '-=0.15')
    .from(subtitle, 0.3, {
        y: -30,
        autoAlpha: 0,
        ease: Power1.easeOut
    }, '-=0.15')
    .from(list, 0.3, {
        y: -30,
        autoAlpha: 0,
        ease: Power1.easeOut
    }, 3)
    .fromTo(image, 2, {
        scale: 0,
        ease: Bounce.easeInOut
    },
    {
        scale: 0.5
    });
    */

    // How to use labels
    // What is a label: is a tool that allows me to point to a time in the timeline where I want some
    // animation to be triggered. eg:

    /**/
    tl.from(title, 0.6, {
        y: -30,
        autoAlpha: 0,
        ease: Power1.easeOut,
    })
    .add('start_image_animation')
    .from(intro, 2, {
        y: -30,
        autoAlpha: 0,
        ease: Power1.easeOut
    })
    .from(subtitle, 1, {
        y: -30,
        autoAlpha: 0,
        ease: Power1.easeOut
    })
    .from(list, 0.3, {
        y: -30,
        autoAlpha: 0,
        ease: Power1.easeOut
    })
    .from(image, 0.3, {
        autoAlpha: 0,
        ease: Power1.easeInOut
    }, 'start_image_animation');
    



    //--------------- Timeline Playback

    var btn_play = document.querySelector('.btn-play'),
        btn_pause = document.querySelector('.btn-pause'),
        btn_resume = document.querySelector('.btn-resume'),
        btn_reverse = document.querySelector('.btn-reverse'),
        btn_restart = document.querySelector('.btn-restart');

    //Stop all animation from the beginning of the timeline
    tl.pause();

    btn_play.addEventListener('click', function() {
        tl.play();
    });

    btn_pause.addEventListener('click', function() {
        tl.pause();
    });

    btn_resume.addEventListener('click', function() {
        tl.resume();
    });

    btn_reverse.addEventListener('click', function() {
        tl.reverse();
    });

    btn_restart.addEventListener('click', function() {
        tl.restart();
    });

})();