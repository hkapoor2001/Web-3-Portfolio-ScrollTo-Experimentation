import { menuTL } from "./menuAnimation";
import { gsap } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin);

export function scrolltoProjects(){ 

    let scrollContainer = document.querySelector("#hscroll");
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
        duration: .5
      })
      menuTL.reverse();
    } else {
      gsap.to(window, {
        scrollTo: targetElement,
        duration: .5
      })
      menuTL.reverse();
    }
    
  });
  
});
}


    // ScrollTrigger.matchMedia({
//   "(min-width: 992px)": function() {

    // gsap.to(container, {
    //   x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: container,
    //     // invalidateOnRefresh: true,
    //     pin: true,
    //     scrub: 1,
    //     end: () => "+=" + container.offsetWidth
    //   }
    // })
  // }
  //   let scrollTween = gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none"
  //   });

  //   let horizontalScroll = ScrollTrigger.create({
  //     animation: scrollTween,
  //     trigger: scrollContainer,
  //     pin: true,
  //     scrub: 1,
  //     end: () => "+=" + scrollContainer.offsetWidth,
  //   });
  // },
  // "all": function() {}
// });


