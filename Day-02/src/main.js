import gsap from 'gsap'
import './style.css'



gsap.set(".box",{
    x: -300,
})

gsap.to('.box',{
    x:1300,
    duration:1.8,
    delay:0.6,
    ease : "power2.inOut",   
    repeat: -1,
    
})
 
