import gsap from "gsap"
import './style.css'



gsap.to(".box",{
  x : 500 , 
  direction : 0.6 , 
  delay : 1.3 ,
  ease : "power4.out",

})

gsap.to(".box1",{
  x:500,
  duration:1.3,
  ease : "power4.out",
  delay:1.9 , 

})



