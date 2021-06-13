// GSAP ANIMATIONS
// SECTION 2 IPHONE MODELS

if (window.screen.width > 991) {
    gsap.fromTo(".iphone-model-group .iphone2 img", { x: "-50%" }, { x: "48%", duration: 2, ease: "power3.out", scrollTrigger: {trigger: ".iphone-model-group .iphone2 img", start: "top 50%"}});
    gsap.fromTo(".iphone-model-group .iphone3 img", { x: "-50%" }, { x: "-148%", duration: 2, ease: "power3.out", scrollTrigger: {trigger: ".iphone-model-group .iphone3 img", start: "top 50%"}});
    gsap.fromTo(".iphone-model-group .iphone4 img", { x: "-50%" }, { x: "160%", delay: 1, duration: 2, ease: "power3.out", scrollTrigger: {trigger: ".iphone-model-group .iphone4 img", start: "top 50%"}});
    gsap.fromTo(".iphone-model-group .iphone5 img", { x: "-50%" }, { x: "-260%",delay: 1, duration: 2, ease: "power3.out", scrollTrigger: {trigger: ".iphone-model-group .iphone5 img", start: "top 50%"}});
}
else {
    gsap.fromTo(".iphone-model-group .iphone2 img", { x: "-50%" }, { x: "65%", duration: 2, ease: "power3.out", scrollTrigger: {trigger: ".iphone-model-group .iphone2 img", start: "top 50%"}});
    gsap.fromTo(".iphone-model-group .iphone3 img", { x: "-50%" }, { x: "180%", duration: 3, ease: "power3.out", scrollTrigger: {trigger: ".iphone-model-group .iphone3 img", start: "top 50%"}});
    gsap.fromTo(".iphone-model-group .iphone4 img", { x: "-50%" }, { x: "295%", duration: 4, ease: "power3.out", scrollTrigger: {trigger: ".iphone-model-group .iphone4 img", start: "top 50%"}});
    gsap.fromTo(".iphone-model-group .iphone5 img", { x: "-50%" }, { x: "410%", duration: 5, ease: "power3.out", scrollTrigger: {trigger: ".iphone-model-group .iphone5 img", start: "top 50%"}});
}

