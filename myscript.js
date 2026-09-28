gsap.to("#pizza", {rotation: 360, transformOrigin: "center", ease: "none", duration: 30, repeat: -1});
gsap.from('#bodyleft h1,h6',{
    x:100,
    duration:1.5,
    opacity:-1
});
gsap.from('#line1',{
    y:500,
    duration:2
    
})
gsap.from('#line2',{
    y:-500,
    duration:2
});
gsap.to('#cover',{
    y:-1000,
    duration:2,
    delay:2.1
});
