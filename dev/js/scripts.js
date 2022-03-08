import { HorizontalScroll } from "./scrolltrigger";
import { menuButtons } from "./menuAnimation.js";
// import{ scrolltoProjects } from "./Scrollto"
import { displayWindowSize } from "./windowSize.js";
import { displayWindowSizeMobile } from "./windowSize.js";
import { burgerTL } from "./burgerAnimation.js";
import { mobileTL } from "./mobilemenuAnimation.js";

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

// document.querySelectorAll("#navmenu a").forEach(element => {
  
//   element.addEventListener('click', function(e) {
    
//     e.preventDefault();
//     const id = this.getAttribute('href').split('#')[1];
    
//     const targetElement = document.getElementById(id)
//     // const navBar = document.getElementById('masthead')


//     if(wideViewport.matches) {
//       // gsap.to(window, {
//       //   // scrollTo: ( (targetElement.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - targetElement.offsetWidth)) ),
//       //   scrollTo: ( (targetElement.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - ((window.innerWidth))))),
//       //   // added windowinnerwidth so that screenscrolls to beginning of the section
//       //   duration: .5
//       // })
//       gsap.to(window, {
//         // scrollTo: ( (targetElement.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - targetElement.offsetWidth)) ),
//         scrollTo: ( (targetElementwidth) * ( ScrollContainerWidth / (ScrollContainerWidth - ((windowWidth))))),
//         // added windowinnerwidth so that screenscrolls to beginning of the section
//         duration: .5
//       })
//       menuTL.reverse();
//       CanISeeMenu = false;
//     } else {
//       gsap.to(window, {
//         scrollTo: targetElement,
//         duration: .5
//       })
//       menuTL.reverse();
//       CanISeeMenu = false
//     }
    
//   });
  
// });



// window.addEventListener("resize", function(){appelWidth = appel.offsetLeft;})
// window.addEventListener("load", function(){appelWidth = appel.offsetLeft;})

var appellink= document.querySelector("#appellink")

var appel= document.querySelector("#stage-2")

appellink.addEventListener('click', function() {

  if(wideViewport.matches) {

    console.log("-------------------------------------");
    console.log(appel.offsetLeft + "this is appel.offsetLeft"), 
    console.log(appelWidth + "this is appelwidth");
    console.log(scrollContainer.offsetWidth + "this is scrollContainer.offsetWidth"), 
    console.log(ScrollContainerWidth + "this is ScrollContainerWidth");
    console.log(windowWidth + "this is the window width"), 
    console.log(window.innerWidth + "this is the window inner width");
    console.log("-------------------------------------");

    gsap.to(window, {
      scrollTo: ( (appelWidth) * ( ScrollContainerWidth / (ScrollContainerWidth - windowWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
    menuTL.reverse();
    CanISeeMenu = false;
  } else {
    gsap.to(window, {
      scrollTo: appelWidth,
      duration: .5,
      invalidateOnRefresh: true
    })
    menuTL.reverse();
    CanISeeMenu = false
  }
});



var netlink= document.querySelector("#netlink")


// window.addEventListener("resize", function(){netWidth = net.offsetLeft;})
// window.addEventListener("load", function(){netWidth = net.offsetLeft;})

var net= document.querySelector("#stage-1")

netlink.addEventListener('click', function() {


  if(wideViewport.matches) {
    gsap.to(window, {
      scrollTo: ( (netWidth) * ( ScrollContainerWidth / (ScrollContainerWidth - ((windowWidth))))),
      invalidateOnRefresh: true,
      duration: .5
    })
    menuTL.reverse();
    CanISeeMenu = false;
  } else {
    gsap.to(window, {
      scrollTo: netWidth,
      invalidateOnRefresh: true,
      duration: .5
    })
    menuTL.reverse();
    CanISeeMenu = false
  }
  
});


var windowWidth;

var appelWidth;

var netWidth;


window.addEventListener("load", 
function(){
  netWidth = net.offsetLeft;
  console.log(net.offsetLeft + "this is net.offsetLeft"), 
  console.log(netWidth + "this is netwidth");
  // ---------------------
  appelWidth = appel.offsetLeft;
  console.log(appel.offsetLeft + "this is appel.offsetLeft"), 
  console.log(appelWidth + "this is appelwidth");
  // ---------------------
  ScrollContainerWidth = scrollContainer.offsetWidth;
  console.log(scrollContainer.offsetWidth + "this is scrollContainer.offsetWidth"), 
  console.log(ScrollContainerWidth + "this is ScrollContainerWidth");
  // ---------------------
  windowWidth = window.innerWidth;
  console.log(windowWidth + "this is the window width"), 
  console.log(window.innerWidth + "this is the window inner width");
  // ---------------------
  displayWindowSize();
  displayWindowSizeMobile();
})


window.addEventListener("resize", 
function(){
  // ---------------------
  netWidth = net.offsetLeft;
  console.log(net.offsetLeft + "this is net.offsetLeft"), 
  console.log(netWidth + "this is netwidth");
  // ---------------------
  appelWidth = appel.offsetLeft;
  console.log(appel.offsetLeft + "this is appel.offsetLeft"), 
  console.log(appelWidth + "this is appelwidth");
  // ---------------------
  ScrollContainerWidth = scrollContainer.offsetWidth;
  console.log(scrollContainer.offsetWidth + "this is scrollContainer.offsetWidth"), 
  console.log(ScrollContainerWidth + "this is ScrollContainerWidth");
  // ---------------------
  windowWidth = window.innerWidth;
  console.log(windowWidth + "this is the window width"), 
  console.log(window.innerWidth + "this is the window inner width");
  // ---------------------
  displayWindowSize();
  displayWindowSizeMobile();
  // ---------------------
})



var ScrollContainerWidth;

// window.addEventListener("resize", function(){ScrollContainerWidth = scrollContainer.offsetWidth;})
// window.addEventListener("load", function(){ScrollContainerWidth = scrollContainer.offsetWidth;})


// window.addEventListener("resize", displayWindowSize )
// window.addEventListener("load", displayWindowSize )


// window.addEventListener("resize", displayWindowSizeMobile )
// window.addEventListener("load", displayWindowSizeMobile )




var burgerButton= document.querySelector("#burger-container")
burgerButton.addEventListener("click", OpenCloseMobileMenu)

let CanISeeMobileMenu = false;
function OpenCloseMobileMenu(){
    if(CanISeeMobileMenu === false){
        burgerTL.play();
        mobileTL.play();
        CanISeeMobileMenu = true;
    }
    else{
        burgerTL.reverse();
        mobileTL.reverse();
        CanISeeMobileMenu = false;}
}





