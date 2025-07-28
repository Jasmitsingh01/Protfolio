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
  const [isFullScreen, setIsFullScreen] = useState(false);
  const isMobile = window.innerWidth < 768;
  const [loading, setLoading] = useState(false);
  
  // Handle escape key to close expanded screen
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (isFullScreen) {
          setIsFullScreen(false);
        } else if (isLaptopExpanded) {
          setIsLaptopExpanded(false);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLaptopExpanded, isFullScreen]);

  // Handle laptop screen click
  const handleLaptopScreenClick = () => {
    setIsLaptopExpanded(!isLaptopExpanded);
    setIsFullScreen(false); // Reset full screen when opening
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
            onClick={() => {
              setIsLaptopExpanded(false);
              setIsFullScreen(false);
            }}
          >
            <div 
              className={`bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-white relative border border-dark-700 overflow-hidden transition-all duration-500 ease-in-out ${
                isFullScreen ? 'w-full h-full rounded-none' : 'w-[95vw] h-[95vh]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
              
              {/* Close button */}
              <button
                className="absolute top-6 right-6 w-12 h-12 bg-dark-700/80 hover:bg-dark-600 border border-dark-600 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 group z-10"
                onClick={() => {
                  setIsLaptopExpanded(false);
                  setIsFullScreen(false);
                }}
              >
                <span className="group-hover:rotate-90 transition-transform duration-300">×</span>
              </button>

              {/* Full Screen toggle button */}
              <button
                className={`absolute transition-all duration-300 hover:scale-110 group z-10 ${
                  isFullScreen 
                    ? 'top-6 right-20 w-12 h-12 bg-accent-600/80 hover:bg-accent-500 border border-accent-500 rounded-full flex items-center justify-center text-lg' 
                    : 'top-6 right-20 w-12 h-12 bg-primary-600/80 hover:bg-primary-500 border border-primary-500 rounded-full flex items-center justify-center text-lg'
                }`}
                onClick={() => setIsFullScreen(!isFullScreen)}
                title={isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
              >
                {isFullScreen ? (
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              {/* Screen content */}
              <div className="w-full h-full flex flex-col">
                {/* Header - hidden in full screen mode */}
                {!isFullScreen && (
                  <div className="flex items-center justify-between p-4 border-b border-dark-700 bg-dark-800/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-dark-300">Windows 11 GUI - Portfolio Demo</div>
                    <div className="flex items-center gap-2">
                      <button
                        className="px-3 py-1 bg-primary-600/20 hover:bg-primary-600/30 border border-primary-500/30 rounded-lg text-xs text-primary-400 transition-all duration-300 hover:scale-105"
                        onClick={() => setIsFullScreen(true)}
                      >
                        Enter Full Screen
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Iframe Container */}
                <div className={`relative ${isFullScreen ? 'flex-1' : 'flex-1'}`}>
                  <iframe
                    src="https://windows11-gui.vercel.app/"
                    className={`w-full h-full border-0 ${isFullScreen ? 'rounded-none' : 'rounded-b-2xl'}`}
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
