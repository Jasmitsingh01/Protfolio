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
              className="w-[90vw] h-[90vh] bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white relative border border-dark-700 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
              
              {/* Close button */}
              <button
                className="absolute top-6 right-6 w-12 h-12 bg-dark-700/80 hover:bg-dark-600 border border-dark-600 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 group"
                onClick={() => setIsLaptopExpanded(false)}
              >
                <span className="group-hover:rotate-90 transition-transform duration-300">×</span>
              </button>
              
              {/* Screen content */}
              <div className="text-center z-10 max-w-2xl px-8">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient animate-slide-up">
                    Jasmit Singh
                  </h1>
                  <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full mb-6"></div>
                </div>
                
                <p className="text-xl md:text-2xl text-dark-300 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
                  Full Stack Developer & UI/UX Designer
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="glass p-4 rounded-xl animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <div className="text-3xl mb-2">🎨</div>
                    <div className="font-semibold">Creative Design</div>
                  </div>
                  <div className="glass p-4 rounded-xl animate-slide-up" style={{animationDelay: '0.6s'}}>
                    <div className="text-3xl mb-2">💻</div>
                    <div className="font-semibold">Modern Development</div>
                  </div>
                  <div className="glass p-4 rounded-xl animate-slide-up" style={{animationDelay: '0.8s'}}>
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="font-semibold">Performance Focused</div>
                  </div>
                </div>
                
                <p className="text-dark-400 text-sm animate-slide-up" style={{animationDelay: '1s'}}>
                  Click anywhere outside, press ESC, or use the × button to close
                </p>
              </div>
            </div>
          </div>
        )}
      </MotionConfig>
    </div>
  );
}

export default App;
