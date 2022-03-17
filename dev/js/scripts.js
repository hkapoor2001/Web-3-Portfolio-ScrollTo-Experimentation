
// --------Imports start here--------

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { burgerTL } from "./burgerAnimation.js";
import { arrowBounce } from "./arrowbouncingAnimation";
import { appelfarmlogoAnimation } from "./appelfarmlogoAnimation";

// --------Imports end here--------

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// --------Code for horizontal Scroll Starts here--------

  
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
  // console.log("logo was clicked"),
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
    menuTL.reverse();
    CanISeeMenu = false
})


var link2= document.querySelector("#link2")

var stage2= document.querySelector("#stage2")

link2.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (stage2.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
    menuTL.reverse();
    CanISeeMenu = false
})


var link3= document.querySelector("#link3")

var stage3= document.querySelector("#stage3")

link3.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (stage3.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
    menuTL.reverse();
    CanISeeMenu = false
})


var link4= document.querySelector("#link4")

var stage4= document.querySelector("#stage4")

link4.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (stage4.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
    menuTL.reverse();
    CanISeeMenu = false
})


var link5= document.querySelector("#link5")

var stage5= document.querySelector("#stage5")

link5.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (stage5.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
    menuTL.reverse();
    CanISeeMenu = false
})


var aboutsection= document.querySelector("#aboutsection")
var aboutbutton= document.querySelector("#about-button")

aboutbutton.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (aboutsection.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
})

var contactsection= document.querySelector("#contactsection")
var contactbutton= document.querySelector("#contact-button")

contactbutton.addEventListener('click', function() {
    gsap.to(window, {
      scrollTo: ( (contactsection.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth))),
      duration: .5,
      invalidateOnRefresh: true
    })
})

// code for scrollto ends here




// ---------------------------Code for menu starts here---------------------------


// --------Code that moves xl menu to the side-------

function XLMenu(){
  let menu = document.querySelector("#masthead")
  let menuWidth = -menu.offsetWidth
  gsap.set("#masthead", {x:menuWidth - (menuWidth / 20)})
}
// --------Code that moves xl menu to the side-------



// -------- Code for XL menu animation starts here-------
gsap.set("#inner-nav-container", {scaleX:0, transformOrigin: "left center"})

const menuTL = new gsap.timeline({paused:true});

const menuAnimation = new gsap.timeline();

menuAnimation.to("#masthead", {duration:0.3, y:0, x:0, ease: "power1.out" },"same")
menuAnimation.to("#inner-nav-container", {background:"linear-gradient(to right, #2C2C2C 100%, transparent)", duration:0.32, scaleX:1, ease: "none"},"same")
menuTL.add(menuAnimation)



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


function CloseMenuOnResize(){
  if(CanISeeMenu === true){
    OpenCloseMenu();
}
}


// -------- Code for XL menu animation ends here-------








// // -------- Code for mobile menu animation starts here-------


// code that moves mobile menu off screen starts here 

function MobileMenu (){
console.log("mobilemenuisoffset")
let mobilemenu = document.querySelector("#mobile-nav")
let mobilemenuHeight = -mobilemenu.offsetHeight
gsap.set("#mobile-nav", {y:mobilemenuHeight})
}

// code that moves mobile menu off screen ends here 

// mobile menu animation starts here
const mobileTL = new gsap.timeline({paused:true});
mobileTL.to("#mobile-nav", {duration:0.3, y:0, x:0});


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
// mobile menu animation starts here

// // -------- Code for mobile menu animation ends here-------


// ---------------------------Code for menu ends here---------------------------




// // -------- Code for arrow bounce-------

arrowBounce();

// // -------- Code for arrow bounce-------







// Resize event Listener

window.addEventListener("resize", XLMenu)
window.addEventListener("resize", MobileMenu)
window.addEventListener("resize", CloseMenuOnResize)




window.addEventListener("load", XLMenu)
window.addEventListener("load", MobileMenu )



// experimenting with scrolltrigger animations 

// gsap.to("#masthead-text",{
//   alpha:0,
//   scrollTrigger: {
//       trigger: "#masthead-div",
//       start: "50%",
//       end: "+=500",
//       scrub: 1,
//       markers:true
//     }
// });


// experimenting with scrolltrigger animations 

// appelfarmlogoAnimation();


gsap.set("#abouticon", {alpha:0})

const aboutbuttonTL = new gsap.timeline({paused:true});

const aboutrolloverAnimation = new gsap.timeline();


aboutrolloverAnimation.to("#abouticon", {duration:.1, alpha:1})


aboutbuttonTL.add(aboutrolloverAnimation)

var about= document.querySelector("#about-button")
about.addEventListener("mouseenter", AboutButtonRolloverEnter)
about.addEventListener("mouseleave", AboutButtonRolloverLeave)

let IsAboutButtonRolloverActive = false;
function AboutButtonRolloverEnter(){
    if(IsAboutButtonRolloverActive === false){
        aboutbuttonTL.play();
        IsAboutButtonRolloverActive = true;
    }
}

function AboutButtonRolloverLeave(){
    if(IsAboutButtonRolloverActive === true){
        aboutbuttonTL.reverse();
        IsAboutButtonRolloverActive = false;
    }
}



const contactbuttonTL = new gsap.timeline({paused:true});

const envelope = new gsap.timeline();
const flap = new gsap.timeline();


envelope.to("#envelope", {duration:.1, fill:"#FFFFFF"})
flap.to("#flap", {duration:.1, stroke:"#000000"})


contactbuttonTL.add(envelope)
contactbuttonTL.add(flap)


var contact= document.querySelector("#contact-button")
contact.addEventListener("mouseenter", ContactButtonRolloverEnter)
contact.addEventListener("mouseleave", ContactButtonRolloverLeave)

let IsContactButtonRolloverActive = false;
function ContactButtonRolloverEnter(){
    if(IsContactButtonRolloverActive === false){
        contactbuttonTL.play();
        IsContactButtonRolloverActive = true;
    }
}

function ContactButtonRolloverLeave(){
    if(IsContactButtonRolloverActive === true){
        contactbuttonTL.reverse();
        IsContactButtonRolloverActive = false;
    }
}