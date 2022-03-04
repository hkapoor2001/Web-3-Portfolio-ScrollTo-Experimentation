import { HorizontalScroll } from "./scrolltrigger";
import { menuButtons } from "./menuAnimation.js";
import{ scrolltoProjects } from "./Scrollto"

HorizontalScroll();
menuButtons();
scrolltoProjects();

import { menuTL } from "./menuAnimation.js";
import { displayWindowSize } from "./windowSize.js";

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
        CanISeeMenu = false;}
}



window.addEventListener("resize", displayWindowSize )
window.addEventListener("load", displayWindowSize )