document.addEventListener('DOMContentLoaded', () => {

    `use strict`

    Splitting()
    luxy.init()
    gsap.registerPlugin(ScrollTrigger)

    const gsapTL = gsap.timeline()
    gsapTL.from('.header__title .char', 1, { 
        opacity: 0,
        yPercent: 130,
        stagger: .06,
        ease: 'back.out'
    })
    
    gsapTL.to('.header__img', 4, {
        clipPath: 'polygon(0% 15%, 100% 100%, 100% 0%, 85% 0%)',
        scale: 1.25,
        ease: 'expo.out',
    }, "-=1")

    gsapTL.from('.header__ribbon', 2, {
        opacity: 0,
        yPercent: 100,
        ease: 'expo.out'
    }, "-=1.5")

    
    const gsapSQUARE = gsap.utils.toArray('.section-title__square');
    gsapSQUARE.forEach((gsapKey, item) => {
        const rotate = gsap.from(gsapKey, 3, {
            rotation: 720,
            scale: 2.5
        });
        ScrollTrigger.create({
            trigger: gsapKey,
            animation: rotate,
            start: 'top bottom',
            scrub: 1.9
        })
    }) 


    //header animations:
    let headerANM = () => {
        gsap.to('.header__title-parallax', {
            scrollTrigger: {
                trigger: ".header",
                start: 'top top',
                scrub: 1.9
            },
            yPercent: -150
        })

        gsap.to('.header__title-stroke', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: 50
        })

        gsap.to('.header__img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: 30
        })

        gsap.to('.header__img img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            scale: 1.3,
            rotate: 30
        })

        gsap.to('.header__ribbon-box', {
            scrollTrigger: {
                trigger: 'header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: -50
        })

        gsap.to('.header__ribbon-star', {
            scrollTrigger: {
                trigger: 'header',
                start: 'top top',
                scrub: 1.9
            },
            rotate: -720
        })
    }
    headerANM();


})