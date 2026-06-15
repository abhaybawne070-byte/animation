import gsap from 'gsap'
import './style.css'



gsap.to(".box",{
    x:100,
    direction:0.6,
    delay : 1.8 , 
    ease : "power2.inOut", 

    onStart : ()=>{
        console.log ("animation start !!")
    }
})

gsap.to(".box",{
    x : 500,
    delay:3,
    direction:0.6,
    ease : "power2.inOut",

    onUpdate: ()=>{
        console.log("Frames")
    }
})


gsap.to(".box",{
    x : 100,
    duration : 0.6 , 
    delay : 1.8 , 
    ease : "power2.inOut",

    onComplete : ()=> {
        console.log("animation complete!")
    }
})

