import { gsap } from "gsap/all"

export function displayWindowSize(){
    let menu = document.querySelector("#masthead")
    let menuWidth = -menu.offsetWidth
    // var windowWidth = window.innerWidth;
    gsap.set("#masthead", {x:menuWidth - (menuWidth / 17)})
    // gsap.set("#masthead", {x:menuWidth - (windowWidth / 20)})
}


export function displayWindowSizeMobile(){
    let mobilemenu = document.querySelector("#mobile-nav")
    let mobilemenuHeight = -mobilemenu.offsetHeight
    gsap.set("#mobile-nav", {y:mobilemenuHeight})
}