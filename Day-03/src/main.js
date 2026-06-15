import gsap from "gsap"
import './style.css'



// gsap.to(".box",{
//   x : 500 , 
//   direction : 0.6 , 
//   delay : 1.3 ,
//   ease : "power4.out",
//   repeat : -1,
//   yoyo : true,
//   stagger : {
//      each  : 0.1,
//      from : 'edges'

//   }
// })

gsap.from("h1 span",{
  yPercent : 100,
  opacity: 0 ,
  direction : 1.0 ,
  
  ease : "expo.out",
  repeat : -1,
 
  stagger:{
    each : 0.08,
    from:'center'
    
  }

})