function navAnimation (){
var nav = document.querySelector(".nav-part-2");

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

function page2Animation(){
  var rightEllums = document.querySelectorAll('.right-elem')

rightEllums.forEach(function(elem){  
  elem.addEventListener("mouseenter", function(){
    gsap.to(elem.childNodes[3], {
      opacity: 1,
      scale: 1
    })
  })
  elem.addEventListener("mouseleave", function(){
    gsap.to(elem.childNodes[3], {
      opacity: 0,
      scale: 0
    })
  })
  elem.addEventListener("mousemove", function(dets){
    gsap.to(elem.childNodes[3], {
      x:dets.x - elem.getBoundingClientRect().x-40,
      y:dets.y - elem.getBoundingClientRect().y-125
    })
  })
})
}
page2Animation();  

function openWindow(){
  document.addEventListener('DOMContentLoaded', function() {
    const playIcon = document.getElementById('play-icon');
    const video = document.getElementById('video-source');

    playIcon.addEventListener('click', function() {
      // Open the video URL in a new tab
      window.open(video.src, '_blank');
    });
 });
}

openWindow(); 