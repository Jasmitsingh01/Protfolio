import { Sphere, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import * as THREE from "three";
import gsap from 'gsap';

const Background = () => {
    const material = React.useRef();
    const Colors = useRef({
        color: '#0f172a' // Starting with dark theme color
    })
    const data = useScroll();
    const tl = useRef();
    
    useEffect(() => {
        tl.current = gsap.timeline();
        
        // Modern dark color progression
        tl.current.to(Colors.current, {
            color: '#1e293b', // Dark slate
            duration: 1
        })
        tl.current.to(Colors.current, {
            color: '#334155', // Darker slate
            duration: 1
        })
        tl.current.to(Colors.current, {
            color: '#0f172a', // Back to darkest
            duration: 1
        })
    }, [])
    
    useFrame(() => {
        if (tl.current && data.scroll) {
            tl.current.progress(data.scroll.current);
            if (material.current) {
                material.current.color = new THREE.Color(Colors.current.color);
            }
        }
    })
    
    return (
        <group>
            <Sphere scale={[30, 30, 30]}>
                <meshBasicMaterial 
                    ref={material} 
                    side={THREE.BackSide} 
                    toneMapped={false}
                />
            </Sphere>
        </group>
    )
}

export default Background