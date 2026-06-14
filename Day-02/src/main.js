import gsap from 'gsap'
import './style.css'



gsap.to(".box",{
    x : 500,
    delay:3,
    direction:0.6,
    ease : "power2.inOut",

    onStart: ()=>{
        console.log("Animation start !!")
    }
})
