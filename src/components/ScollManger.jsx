import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const ScollManger = (props) => {
  const { section, onSectionChange } = props;
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const sectionChangeTimeout = useRef(null);
  
  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");
  
  useEffect(() => {
    console.log(`ScrollManager: Navigating to section ${section}`);
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      ease: "power2.inOut",
      onStart: () => {
        console.log(`ScrollManager: Animation started for section ${section}`);
        isAnimating.current = true;
      },
      onComplete: () => {
        console.log(`ScrollManager: Animation completed for section ${section}`);
        isAnimating.current = false;
      },
    });
  }, [section, data.el]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (sectionChangeTimeout.current) {
        clearTimeout(sectionChangeTimeout.current);
      }
    };
  }, []);
  
  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }
    
    const curSection = Math.floor(data.scroll.current * data.pages);
    
    // Handle section changes for all 3 sections
    if (curSection !== section) {
      if (sectionChangeTimeout.current) {
        clearTimeout(sectionChangeTimeout.current);
      }
      sectionChangeTimeout.current = setTimeout(() => {
        console.log(`ScrollManager: Auto-changing to section ${curSection} from scroll`);
        onSectionChange(curSection);
      }, 100);
    }
    
    lastScroll.current = data.scroll.current;
  });
  
  return null;
};

export default ScollManger;
