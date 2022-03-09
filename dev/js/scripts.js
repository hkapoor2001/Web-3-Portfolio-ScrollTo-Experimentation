
// --------Imports start here--------


import { gsap } from "gsap";



// --------Imports end here--------


// --------Code for horizontal Scroll Starts here--------

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
  let scrollContainer = document.querySelector("#hscroll");

  ScrollTrigger.matchMedia({
    "(min-width: 1200px)":function(){
      gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - document.documentElement.clientWidth) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          end: () => "+=" + scrollContainer.offsetWidth
        }
      })
    }
  
  })
  
  
// --------Code for horizontal Scroll ends here--------

      


// code for scrollto starts here

var logo= document.querySelector("#logo")

var intro= document.querySelector("#intro")

logo.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (intro.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
})

var link1= document.querySelector("#link1")

var stage1= document.querySelector("#stage1")

link1.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (stage1.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
})


var link2= document.querySelector("#link2")

var stage2= document.querySelector("#stage2")

link2.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (stage2.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
})


var link3= document.querySelector("#link3")

var stage3= document.querySelector("#stage3")

link3.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (stage3.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
})


var link4= document.querySelector("#link4")

var stage4= document.querySelector("#stage4")

link4.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (stage4.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
})


var link5= document.querySelector("#link5")

var stage5= document.querySelector("#stage5")

link5.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (stage5.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
})

// code for scrollto ends here






// --------Code for menu starts here-------

