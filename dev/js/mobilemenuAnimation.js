import { gsap } from "gsap";

export const mobileTL = new gsap.timeline({paused:true});
mobileTL.to("#mobile-nav", {duration:0.3, y:0, x:0});
