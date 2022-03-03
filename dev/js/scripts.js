import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



let sections = gsap.utils.toArray(".stage");
let scrollContainer = document.querySelector("#hscroll");

ScrollTrigger.matchMedia({
  "(min-width: 992px)": function() {

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none"
    });

    let horizontalScroll = ScrollTrigger.create({
      animation: scrollTween,
      trigger: scrollContainer,
      pin: true,
      scrub: 1,
      end: () => "+=" + scrollContainer.offsetWidth,
    });
  },
  "all": function() {}
});


const wideViewport = window.matchMedia("(min-width: 992px)");

document.querySelectorAll("#navmenu a").forEach(element => {
  
  element.addEventListener('click', function(e) {
    
    e.preventDefault();
    const id = this.getAttribute('href').split('#')[1];
    
    const targetElement = document.getElementById(id)
    const navBar = document.getElementById('masthead')

    if(wideViewport.matches) {
      gsap.to(window, {
        scrollTo: ( (targetElement.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - targetElement.offsetWidth)) ),
        duration: 2
      })
    } else {
      gsap.to(window, {
        scrollTo: targetElement,
        duration: 2
      })
    }
    
  });
  
});



// let sections = gsap.utils.toArray(".stage");
// let scrollContainer = document.querySelector("#hscroll");

// ScrollTrigger.matchMedia({
//   "(min-width: 992px)": function() {
//     let scrollTween = gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none"
//     });

//     let horizontalScroll = ScrollTrigger.create({
//       animation: scrollTween,
//       trigger: scrollContainer,
//       pin: true,
//       scrub: 1,
//       end: () => "+=" + scrollContainer.offsetWidth,
//     });

    
//   },
//   "all": function() {
    
//   }
// });



// const wideViewport = window.matchMedia("(min-width: 992px)");

// document.querySelectorAll("#navmenu a").forEach(element => {
  
//   element.addEventListener('click', function(e) {
    
//     e.preventDefault();
//     const id = this.getAttribute('href').split('#')[1];
    
//     const targetElement = document.getElementById(id)
//     const navBar = document.getElementById('masthead')
    
    
//     if(wideViewport.matches) {
//       gsap.to(window, {
//         scrollTo: ( (targetElement.offsetLeft)) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - targetElement.offsetWidth)),
//         // scrollTo: ( (targetElement.offsetLeft + navBar.offsetWidth*sections.indexOf(targetElement)) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - targetElement.offsetWidth)) ),
//         duration: 2
//       })
//       console.log("scrolltriggerisactive")
//     } else {
//       gsap.to(window, {
//         scrollTo: targetElement,
//         duration: 2
//       })
//     }
    
//   });
  
// });