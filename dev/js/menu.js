
// ---------------------------Code for menu starts here---------------------------


// --------Code that moves xl menu to the side-------
let menu = document.querySelector("#masthead")
let menuWidth = -menu.offsetWidth
gsap.set("#masthead", {x:menuWidth - (menuWidth / 17)})
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

// -------- Code for XL menu animation ends here-------


// -------- Code for mobile menu animation starts here-------

let mobilemenu = document.querySelector("#mobile-nav")
let mobilemenuHeight = -mobilemenu.offsetHeight
gsap.set("#mobile-nav", {y:mobilemenuHeight})

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

// -------- Code for mobile menu animation ends here-------


// ---------------------------Code for menu ends here---------------------------

