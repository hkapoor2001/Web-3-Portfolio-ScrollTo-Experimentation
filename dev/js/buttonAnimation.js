import {gsap} from "gsap";

export const exitnavbuttonTL = new gsap.timeline({paused:true});

const exitfill = new gsap.timeline();


exitfill.to("#Exit-triangle", {duration:.1, fill:"#FFFFFF"})


exitnavbuttonTL.add(exitfill)





export const navbuttonTL = new gsap.timeline({paused:true});

const navfill = new gsap.timeline();


navfill.to("#nav-triangle", {duration:.1, fill:"#FFFFFF"})


navbuttonTL.add(navfill)





export const contactbuttonTL = new gsap.timeline({paused:true});

const envelope = new gsap.timeline();
const flap = new gsap.timeline();


envelope.to("#envelope", {duration:.1, fill:"#FFFFFF"})
flap.to("#flap", {duration:.1, stroke:"#0047FF"})


contactbuttonTL.add(envelope)
contactbuttonTL.add(flap)



gsap.set("#abouticon", {alpha:0})

export const aboutbuttonTL = new gsap.timeline({paused:true});

const aboutrolloverAnimation = new gsap.timeline();


aboutrolloverAnimation.to("#abouticon", {duration:.1, alpha:1})


aboutbuttonTL.add(aboutrolloverAnimation)