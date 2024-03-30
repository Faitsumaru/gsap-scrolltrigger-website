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
})