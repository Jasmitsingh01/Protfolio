import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import HTML from "./components/HTML";
import { Suspense, useState } from "react";
import ScrollManger from "./components/ScollManger";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./components/Config";
import LoadingScreen from "./components/LoadingScreen";
function App() {
  const [section, setSection] = useState(0);
  const [menuOpend, setMenuopend] = useState(false);
  const isMobile=window.innerWidth<768;
  const [loading, setLoading] = useState(false);
  
  return (
   <div className=" h-screen">
<MotionConfig transition={{
 ...framerMotionConfig
}}>
      <LoadingScreen loading={loading} setLoading={setLoading}/>
  
<Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
      <color attach="background" args={["#e6e7ff"]} />
      <ScrollControls pages={4} damping={0.1}>
        <ScrollManger section={section} onSectionChange={setSection} />
        <Scroll>
          <Suspense >
            {
              loading
              &&
              <Experience section={section} setSection={setSection} menuOpend={menuOpend} isMobile={isMobile} />

            }
          </Suspense>
        </Scroll>
        <Scroll html>
          {
            loading
            &&
            <HTML section={section} setSection={setSection} />
          }
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Menu onSectionChange={setSection}  menuOpend={menuOpend} setMenuopend={setMenuopend}                   />

</MotionConfig>
   </div>
  );
}

export default App;
