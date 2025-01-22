import {
  Environment,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sky,
  useScroll,
} from "@react-three/drei";
import { Avtar } from "./Avtar";
import { Leva } from "leva";
import { Scene } from "./Scene";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "./Config";
import Background from "./Background";
export const Experience = (props) => {
  const CharacterAboutRef = useRef();
  const CharacterGroup = useRef();
  const { viewport } = useThree();
  const [section, setSection] = useState(0);

  const responsiveRatio= viewport.width/12;
  const SecenResponsiveRatio=Math.max(0.5, Math.min(0.7*responsiveRatio,0.7))
  const data = useScroll();
 const [CharatherAnimation,setCharatherAnimation]=useState("Typing")
  const { menuOpend ,isMobile } = props;
  
  const CameraPositionX = useMotionValue();
  const CameraLookAt = useMotionValue();
  useEffect(() => {
    animate(CameraPositionX, menuOpend ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(CameraLookAt, menuOpend ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpend]);
  useEffect(()=>{
    setCharatherAnimation('Falling')
    setTimeout(()=>{
      setCharatherAnimation(section===0?"Typing":"Standing")
    }
    ,600)
  },[section])
  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);
  if(curSection!==section){
    setSection(curSection)
  }
  if(curSection >3){
    curSection=3;
  }
    state.camera.position.x = CameraPositionX.get();
    state.camera.lookAt(CameraLookAt.get(), 0, 0);
    if(section ===0){
      CharacterAboutRef.current.getWorldPosition(CharacterGroup.current.position);

    }
    // const postion=new THREE.Vector3();
    // const quaternion=new THREE.Quaternion();
    // CharacterAboutRef.current.getWorldQuaternion(quaternion);
    // const eluer=new THREE.Euler();
    // eluer.setFromQuaternion(quaternion,"XYZ");
    // console.log(eluer)
  });
  return (
    <>
      <Sky />
      <Environment preset="sunset" />
      <Background />
      <motion.group
          ref={CharacterGroup}
          rotation={[0.1992058841645491,1.4781718456284878,-0.1687484667014164]}
          scale={[SecenResponsiveRatio+0.2,SecenResponsiveRatio+0.2,SecenResponsiveRatio+0.2]}
          animate={""+section}
          variants={{
            0:{
              scaleX:SecenResponsiveRatio +0.2,
              scaleY:SecenResponsiveRatio +0.2,
              scaleZ:SecenResponsiveRatio +0.2
            },
            1:{
              y:-viewport.height+1,
              x:isMobile ? 0.3 : 0,
              z:7,
              rotateX:0,
              rotateY: isMobile ? -Math.PI/6 : 0,
              rotateZ:0,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
            },
            2:{
              x: isMobile ? 1 : -2,
              y:(-viewport.height *( isMobile ?2.5 :2)) +1,
              z:0,
              rotateX:0,
              rotateY: isMobile ? -Math.PI/4 : Math.PI/4,
              rotateZ:0,
              scaleX: isMobile ? 2 : 1.5,
              scaleY: isMobile ? 2 : 1.5,
              scaleZ: isMobile ? 2 : 1.5,
            },
            3:{
              x: 0.3,
              y:-viewport.height * 3 +1,
              z:8,
              rotateX:0,
              rotateY:-Math.PI/4,
              rotateZ:0,
              scaleX:1,
              scaleY:1,
              scaleZ:1,
            },
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Avtar animations={CharatherAnimation} />
        </motion.group>
      <motion.group
        position={[isMobile ? 0 :1.5 * responsiveRatio, isMobile ? -viewport.height/6 :2, 3]}
        scale={[SecenResponsiveRatio, SecenResponsiveRatio, SecenResponsiveRatio]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height/6 : 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        
        <Scene section={section} />
        <group
          name="Empty"
          ref={CharacterAboutRef}
          position={[-0.756, 0.172, -0.97]}
          rotation={[3.113, 0.876, -3.09]}
          scale={1.323}
        ></group>
      </motion.group>

      <motion.group
        position={[0, isMobile ? -viewport.height:-1.5 * SecenResponsiveRatio, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : isMobile ? -viewport.height:-1.5 * SecenResponsiveRatio,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, 15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color="red"
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[3, 1, -18]} scale={[3, 3, 3]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh position={[-3, -1, -11]} scale={[1.4, 1.4, 1.4]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
      <Leva hidden />
    </>
  );
};
