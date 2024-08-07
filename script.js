function navAnimation (){
  var nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function(){
  let tl = gsap.timeline()
  tl.to(".nav-bottom",{
    height:"10.6vw",
    duration: .2
  })
  tl.to(".nav-part-2 h5",{
    display: "block",
    duration: .2
  })
  tl.to(".nav-part-2 h5 span",{
    y:0,
    stagger:{
      amount:0.5
    },
    duration:0.2
  })
  })
nav.addEventListener("mouseleave", function(){
  let tl = gsap.timeline()
  tl.to(".nav-part-2 h5 span",{
    y:25,
    stagger:{
      amount:0.1  
    },
    // duration:0.2
  })
  tl.to(".nav-part-2 h5", {
    display: "none",
    duration: .2
  })
  tl.to(".nav-bottom", {
    height: 0,
    duration: .1
  })
})
}
navAnimation();