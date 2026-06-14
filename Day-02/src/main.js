import gsap from 'gsap'
import './style.css'



gsap.to('.box',{
    x:300,
    duration:2,
    delay:0.6,
    ease : "power4.inOut",   
    repeat: -1,
    yoyo: true
})
 
