import { gsap } from "gsap/all"

export function displayWindowSize(){
    let menu = document.querySelector("#masthead")
    let menuWidth = -menu.offsetWidth
    var windowWidth = window.innerWidth;
    gsap.set("#masthead", {x:menuWidth - (menuWidth / 17)})
    // gsap.set("#masthead", {x:menuWidth - (windowWidth / 20)})
}