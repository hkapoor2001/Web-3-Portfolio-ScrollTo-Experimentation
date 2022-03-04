import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


export function HorizontalScroll(){

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// let sections = gsap.utils.toArray(".stage");
let scrollContainer = document.querySelector("#hscroll");

gsap.to(scrollContainer, {
  x: () => -(scrollContainer.scrollWidth - document.documentElement.clientWidth) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: scrollContainer,
    // invalidateOnRefresh: true,
    pin: true,
    scrub: 1,
    end: () => "+=" + scrollContainer.offsetWidth
  }
})
}