import gsap from 'gsap'
import './style.css'

 

gsap.fromTo(
    '.box',
    {
      x:0,
    },
    {
      delay:0.6,
      direction:1,
      x:400,
      y:200
     },
)

// how to costumize  costume properties

     const obj = {
        a:0
     };

     gsap.to(obj , {
        a:100,
        onUpdate : () => {
            console.log(obj.a);
        },
     })
    
