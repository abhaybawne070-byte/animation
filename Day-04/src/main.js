import gsap from 'gsap'
import './style.css'



// timeline control 

const play = document.querySelector(".play")
const pause= document.querySelector(".pause")
const restart= document.querySelector(".restart")
const reverse= document.querySelector(".reverse")
const seek= document.querySelector(".seek")

const tl = gsap.timeline({paused:true})

tl.to('.box',{
  x:500,
  duration:1.3,
  delay:0.6 ,
  ease : "power4.out"
}).to('.box1',{
  x:500,
  duration:1.3,
  ease: 'power4.out'
}).to('.box2',{
  x:500,
  duration:1.3,
  ease:'power4.out'
}).to(".box2",{
  x:500,
  duration:1.3,
  ease:'power4.out'
})
.addLabel("first")
.to(".box3",{
  x:500,
  duration:1.3,
  ease:'power4.out'
})


 play.addEventListener("click",()=>{
  tl.play()
 })

  pause.addEventListener("click",()=>{
  tl.pause()
 })

  restart.addEventListener("click",()=>{
  tl.restart()
 })

  reverse.addEventListener("click",()=>{
  tl.reverse()
 })

 seek.addEventListener("click",()=>{
  tl.seek("first")
 })



