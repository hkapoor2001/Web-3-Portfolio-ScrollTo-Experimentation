import { HorizontalScroll } from "./scrolltrigger";
import { menuButtons } from "./menuAnimation.js";
// import{ scrolltoProjects } from "./Scrollto"
import { displayWindowSize } from "./windowSize.js";

HorizontalScroll();
menuButtons();
// scrolltoProjects();



import { menuTL } from "./menuAnimation.js";

var menuButton= document.querySelector("#nav-button-container")
menuButton.addEventListener("click", OpenCloseMenu)
var exitmenuButton= document.querySelector("#exit-nav-button-container")
exitmenuButton.addEventListener("click", OpenCloseMenu)
let CanISeeMenu = false;
function OpenCloseMenu(){
    if(CanISeeMenu === false){
        menuTL.play();
        CanISeeMenu = true;
    }
    else{
        menuTL.reverse();
        CanISeeMenu = false;
    }
}



import { gsap } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"


gsap.registerPlugin(ScrollToPlugin);

let scrollContainer = document.querySelector("#hscroll");
const wideViewport = window.matchMedia("(min-width: 1024px)");

document.querySelectorAll("#navmenu a").forEach(element => {
  
  element.addEventListener('click', function(e) {
    
    e.preventDefault();
    const id = this.getAttribute('href').split('#')[1];
    
    const targetElement = document.getElementById(id)
    // const navBar = document.getElementById('masthead')


    if(wideViewport.matches) {
      gsap.to(window, {
        // scrollTo: ( (targetElement.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - targetElement.offsetWidth)) ),
        scrollTo: ( (targetElement.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - ((window.innerWidth))))),
        // added windowinnerwidth so that screenscrolls to beginning of the section
        duration: .5
      })
      menuTL.reverse();
      CanISeeMenu = false;
    } else {
      gsap.to(window, {
        scrollTo: targetElement,
        duration: .5
      })
      menuTL.reverse();
      CanISeeMenu = false
    }
    
  });
  
});




window.addEventListener("resize", displayWindowSize )
window.addEventListener("load", displayWindowSize )
