import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set(".xline",{alpha:1})
gsap.set("#menu",{scaleX:1})

export const burgerTL = new gsap.timeline({paused:true})

const burgerout = new gsap.timeline();
burgerout.to("#menu", {scaleX:0, duration: .17})

const xlines = new gsap.timeline();
xlines.from(".xline", {drawSVG:"50% 50%", ease:"none", duration: .17, alpha:0})

const logo = new gsap.timeline();
logo.to("#logo", {color:"#FFFFFF", duration: .05})

burgerTL.add(burgerout)
.add (xlines)
.add (logo)