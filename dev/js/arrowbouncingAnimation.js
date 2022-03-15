
import { gsap } from "gsap";

export function arrowBounce(){
    gsap.to("#intro-arrow", {x:30, duration: 0.6,  ease:"circ.in", repeat:-1, yoyo:true})
}