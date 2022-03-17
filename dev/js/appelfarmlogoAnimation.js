import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {CustomEase} from "gsap/CustomEase";
import { Elastic } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, MotionPathPlugin, CustomEase, ScrollTrigger);


export function appelfarmlogoAnimation(){
    gsap.set("#tagline", { alpha:0 });


const mainTL = gsap.timeline( {    
    scrollTrigger: {
    trigger: "#appel-logo-section",
    start: (stage2.offsetLeft) * ( scrollContainer.offsetWidth / (scrollContainer.offsetWidth - window.innerWidth)),
    markers:true
    }} );


function circlebounce(){
    const tl = gsap.timeline();
    tl.to("#circle-1",{alpha:1, duration: 1.3, motionPath:{path:"#motion-path", align:"self"}, ease: Elastic})
    return tl;
}

function lettersbouncedown(){
    const tl = gsap.timeline();

    tl.from("#p",{duration: .1, y:0})
    tl.to("#p",{duration: .1, y:10})
    tl.to("#p",{duration: .1, y:0})
    tl.from("#e",{duration: .1, y:0})
    tl.to("#e",{duration: .1, y:10})
    tl.to("#e",{duration: .1, y:0})
}


function circles(){
    const tl = gsap.timeline();

    tl.from("#circle-2",{alpha:"0", delay: 1.1});
    tl.to("#circle-2",{alpha:"1"});

    tl.from("#circle-3",{alpha:"0"});
    tl.to("#circle-3",{alpha:"1"});
    return tl;
}


function movebottompart(){
    const tl = gsap.timeline();
    tl.to("#mask-shape",{motionPath:{path:"#motion-path-bottom-part", align:"self"}, duration:.25},"+=1.2")
    return tl;
}

function drawline1(){
    const tl = gsap.timeline();
    tl.from("#inside-line",{drawSVG: "0%", ease:"none", duration:.5, delay:1.4})
    tl.to("#inside-line",{drawSVG: "100%", ease:"none"})
    return tl;
}


function drawline2(){
    const tl = gsap.timeline();
    tl.from("#left-inside-line",{drawSVG: "0%", ease:"power1", duration:.4, delay:2})
    tl.to("#left-inside-line",{drawSVG: "100%", ease:"none"})

    return tl;
}

function drawline3(){
    const tl = gsap.timeline();
    tl.from("#left-outside-line",{drawSVG: "0%", ease:"none", duration:.3, delay:2})
    tl.to("#left-outside-line",{drawSVG: "100%", ease:"none"})

    return tl;
}

function drawline4(){
    const tl = gsap.timeline();
    tl.from("#right-outside-line",{drawSVG: "0%", ease:"none", duration:.5, delay:2})
    tl.to("#right-outside-line",{drawSVG: "100%", ease:"none"})

    return tl;
}

function expandcolors1(){
    const tl = gsap.timeline();
    tl.from("#colors-1",{scaleX:.01, scaleY:.01})
    tl.to("#colors-1",{scaleX:70, scaleY:79, transformOrigin: "50% 50%", duration:3, ease:"none"})

    return tl;
}

function expandcolors2(){
    const tl = gsap.timeline();
    tl.from("#colors-2",{scaleX:.01, scaleY:.01})
    tl.to("#colors-2",{scaleX:70, scaleY:79, transformOrigin: "50% 50%", duration:3, ease:"none"})
    return tl;
}


function taglinefade(){
    const tl = gsap.timeline();
    tl.from("#tagline",{alpha:0})
    tl.to("#tagline",{alpha:1})

    return tl;
}

mainTL.add(circlebounce(), "same1")
      .add(lettersbouncedown(), "same1")
      .add(movebottompart(), "same1")
      .add(circles(),"same1")
      .add(drawline1(),"same1")
      .add(drawline2(),"same1")
      .add(drawline3(),"same1")
      .add(drawline4(),"same1")
      .add(expandcolors1(),"same1")
      .add(expandcolors2(),"same1")
      .add(taglinefade())

}