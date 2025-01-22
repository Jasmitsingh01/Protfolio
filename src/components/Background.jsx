import { Sphere, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import * as THREE from "three";
import gsap from 'gsap';
const Background = () => {
    const material = React.useRef();
    const Colors=useRef({
        color:'#b9bcff'
    })
    const data=useScroll();
    const tl=useRef();
    
    useEffect(()=>{
        tl.current=gsap.timeline();
        tl.current.to(Colors.current,{
            color:'#212121',
        })
        tl.current.to(Colors.current,{
            color:'#7a7ca5',
        })
        tl.current.to(Colors.current,{
            color:'#9b96dd',
        })
    })
    useFrame(()=>{
        tl.current.progress(data.scroll.current);
        material.current.color = new THREE.Color(Colors.current.color);
    })
  return (
    <group>
        <Sphere scale={[30,30,30]}>
        <meshBasicMaterial ref={material} side={THREE.BackSide} toneMapped={false}/>
        </Sphere>
    </group>
  )
}

export default Background