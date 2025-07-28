import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import HTML from "./components/HTML";
import { Suspense, useState, useEffect } from "react";
import ScrollManger from "./components/ScollManger";
import Menu from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./components/Config";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpend, setMenuopend] = useState(false);
  const [isLaptopExpanded, setIsLaptopExpanded] = useState(false);
  const isMobile = window.innerWidth < 768;
  const [loading, setLoading] = useState(false);
  
  // Handle escape key to close expanded screen
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isLaptopExpanded) {
        setIsLaptopExpanded(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLaptopExpanded]);

  // Handle laptop screen click
  const handleLaptopScreenClick = () => {
    setIsLaptopExpanded(!isLaptopExpanded);
  };
  
  return (
    <div className="h-screen overflow-hidden bg-gradient-dark">
      <MotionConfig transition={{
        ...framerMotionConfig
      }}>
        <LoadingScreen loading={loading} setLoading={setLoading}/>
        
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#0f172a"]} />
          <ScrollControls pages={3} damping={0.1}>
            <ScrollManger section={section} onSectionChange={setSection} />
            <Scroll>
              <Suspense>
                {loading && (
                  <Experience 
                    section={section} 
                    setSection={setSection} 
                    menuOpend={menuOpend} 
                    isMobile={isMobile} 
                    onLaptopScreenClick={handleLaptopScreenClick}
                  />
                )}
              </Suspense>
            </Scroll>
            <Scroll html>
              {loading && (
                <HTML 
                  section={section} 
                  setSection={setSection} 
                />
              )}
            </Scroll>      
          </ScrollControls>
        </Canvas>
        
        <Menu 
          onSectionChange={setSection}  
          menuOpend={menuOpend} 
          setMenuopend={setMenuopend}
          section={section}                   
        />

        {/* Expanded Laptop Screen Overlay */}
        {isLaptopExpanded && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center cursor-pointer animate-fade-in"
            onClick={() => setIsLaptopExpanded(false)}
          >
            <div 
              className="w-[95vw] h-[95vh] bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white relative border border-dark-700 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
              
              {/* Close button */}
              <button
                className="absolute top-6 right-6 w-12 h-12 bg-dark-700/80 hover:bg-dark-600 border border-dark-600 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 group z-10"
                onClick={() => setIsLaptopExpanded(false)}
              >
                <span className="group-hover:rotate-90 transition-transform duration-300">×</span>
              </button>
              
              {/* Screen content */}
              <div className="w-full h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-dark-700 bg-dark-800/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-dark-300">Windows 11 GUI - Portfolio Demo</div>
                  <div className="w-8"></div>
                </div>
                
                {/* Iframe Container */}
                <div className="flex-1 relative">
                  <iframe
                    src="https://windows11-gui.vercel.app/"
                    className="w-full h-full border-0 rounded-b-2xl"
                    title="Windows 11 GUI Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </MotionConfig>
    </div>
  );
}

export default App;
