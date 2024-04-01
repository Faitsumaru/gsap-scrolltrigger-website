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


    //about animations:
    let aboutANM = () => {
        gsap.from('.about__img', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                scrub: 1.9
            },
            yPercent: 80
        })

        gsap.from('.about__img img', {
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                scrub: 1.9
            },
            scale: 1.6
        })

        gsap.from('.about__text', {
            scrollTrigger: {
                trigger: '.about__box',
                start: 'top bottom',
                scrub: 1.9
            },
            yPercent: 50,
            xPercent: 25
        })
    }
    aboutANM();


    //benefits animations:
    let benefitsANM = () => {
        gsap.from('.benefits__num', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.benefits__list',
                start: 'top bottom',
                scrub: 1.9
            }
        })

        gsap.fromTo('.benefits__paragr', {
            opacity: 0.25,
            rotate: 10
        },
        {
            scrollTrigger: {
                trigger: '.work',
                start: 'top bottom',
                scrub: 1.9,
            },
            opacity: 1,
            rotate: -10
        })
    }
    benefitsANM();


    //portfolio animations
    let portfolioANM = () => {
        gsap.from('.work__item .work__item-num', {
            y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.work',
                start: 'top bottom',
                scrub: 1.9
            }
        })
        
        gsap.from('.work__item-img img', {
            scrollTrigger: {
                trigger: '.work__box',
                start: 'top bottom',
                scrub: 1.9
            },
            scale: 1.6
        })
    }
    portfolioANM();


    //services animations
    let servicesANM = () => {
        gsap.from('.services__item__arrow', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.services__list',
                start: 'top bottom',
                scrub: 3
            }
        })

        gsap.fromTo('.services__item-text', {
            opacity: 0.5,
            rotate: 50,
            scale: .5
        },
        {
            scrollTrigger: {
                trigger: '.services__list',
                start: 'top bottom',
                scrub: 3,
            },
            opacity: 1,
            rotate: 0,
            scale: 1
        })
    }
    servicesANM();

})