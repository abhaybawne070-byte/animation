import gsap from "gsap"
import './style.css'



gsap.to(".box",{
  x : 500 , 
  direction : 0.6 , 
  delay : 1.3 ,
  ease : "power4.out",
  repeat : -1,
  yoyo : true,
  stagger : {
     each  : 0.1,
     from : 'edges'
  }
})