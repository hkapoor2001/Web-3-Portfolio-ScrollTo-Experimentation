import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


gsap.to("#masthead-text",{
    alpha:0,
    scrollTrigger: {
        trigger: "#masthead-div",
        start: "50%",
        end: "+=500",
        scrub: 1,
        markers:true
      }
  });
  


