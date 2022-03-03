import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


let sections = gsap.utils.toArray(".stage");
let scrollContainer = document.querySelector("#hscroll");
// let nav = document.getElementById("navmenu").getElementsByTagName("a");
// let contact = document.querySelector("#btncontact");

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

    // var dragRatio = scrollContainer.offsetWidth / (window.innerWidth * (sections.length - 1));
    // var drag = Draggable.create(".proxy", {
    //   trigger: scrollContainer,
    //   type: "x",
    //   onPress() {
    //     this.startScroll = horizontalScroll.scroll();
    //   },
    //   onDrag() {
    //     horizontalScroll.scroll(this.startScroll - (this.x - this.startX) * dragRatio);
    //   }
    // })[0];
    
//    //Nav Menu Links
//    for ( var i = 0; i < nav.length; i++ ) {
//      var clickedLink = nav[i];
//      (function(clickedLink) { 
//        clickedLink.addEventListener("click", function(e) {
//          e.preventDefault();
//          var target = clickedLink.getAttribute("href").split('#')[1];
//          var pos = document.getElementById(target).offsetLeft * ((scrollContainer.offsetWidth) / (scrollContainer.offsetWidth - window.innerWidth))
//          gsap.to(window, {
//            scrollTo: ( pos +100),
//            duration: 2
//          });
//        });
//      })(clickedLink);
//    }
    
  },
  "all": function() {
    
  }
});



const wideViewport = window.matchMedia("(min-width: 992px)");

document.querySelectorAll("#navmenu a").forEach(element => {
  
  element.addEventListener('click', function(e) {
    
    e.preventDefault();
    const id = this.getAttribute('href').split('#')[1];
    
    const targetElement = document.getElementById(id)
    const navBar = document.getElementById('masthead')
    
    // console.log( document.getElementById(id) )
    // console.log( sections.indexOf(document.getElementById(id)) )
    
    if(wideViewport.matches) {
      gsap.to(window, {
        scrollTo: ( (targetElement.offsetLeft + navBar.offsetWidth*sections.indexOf(targetElement)) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - targetElement.offsetWidth)) ),
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