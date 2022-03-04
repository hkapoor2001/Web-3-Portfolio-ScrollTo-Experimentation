import { gsap } from "gsap";
import { navbuttonTL } from "./buttonAnimation";
import { exitnavbuttonTL } from "./buttonAnimation";

gsap.set("#inner-nav-container", {scaleX:0, transformOrigin: "left center"})

export const menuTL = new gsap.timeline({paused:true});

 const menuAnimation = new gsap.timeline();

 menuAnimation.to("#masthead", {duration:0.3, y:0, x:0, ease: "power1.out" },"same")
 menuAnimation.to("#inner-nav-container", {background:"linear-gradient(to right, #2C2C2C 100%, transparent)", duration:0.32, scaleX:1, ease: "none"},"same")
menuTL.add(menuAnimation)



export function menuButtons(){

var nav= document.querySelector("#nav-button-container")
nav.addEventListener("mouseenter", NavButtonRolloverEnter)
nav.addEventListener("mouseleave", NavButtonRolloverLeave)

let IsNavButtonRolloverActive = false;
function NavButtonRolloverEnter(){
    if(IsNavButtonRolloverActive === false){
        navbuttonTL.play();
        IsNavButtonRolloverActive = true;
    }
}

function NavButtonRolloverLeave(){
    if(IsNavButtonRolloverActive === true){
        navbuttonTL.reverse();
        IsNavButtonRolloverActive = false;
    }
}


var exitnav= document.querySelector("#exit-nav-button-container")
exitnav.addEventListener("mouseenter", ExitNavButtonRolloverEnter)
exitnav.addEventListener("mouseleave", ExitNavButtonRolloverLeave)

let IsExitNavButtonRolloverActive = false;
function ExitNavButtonRolloverEnter(){
    if(IsExitNavButtonRolloverActive === false){
        exitnavbuttonTL.play();
        IsExitNavButtonRolloverActive = true;
    }
}

function ExitNavButtonRolloverLeave(){
    if(IsExitNavButtonRolloverActive === true){
        exitnavbuttonTL.reverse();
        IsExitNavButtonRolloverActive = false;
    }
}

}