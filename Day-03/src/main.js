import gsap from "gsap"
import './style.css'






// position parameters - "+=number"

const tl = gsap.timeline();
  
tl.to(".box",{
  x : 500 , 
  direction : 1.3, 
  delay : 0.6,
  ease : "power4.out",
},).to(".box1",{
  x:500,
  duration:1.3,
  ease : "power4.out",
}).to(".box2",{
  x : 500 ,
  duration: 1.3 ,
  ease : "power4.out"
}).to(".box3",{
  x:500,
  duration : 1.3,
  ease : "power4.out",
}, 
  "+=0.8",
)