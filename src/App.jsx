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
    <div className="h-screen overflow-hidden">
      <MotionConfig transition={{
        ...framerMotionConfig
      }}>
        <LoadingScreen loading={loading} setLoading={setLoading}/>
        
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
          <color attach="background" args={["#e6e7ff"]} />
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
        />

        {/* Expanded Laptop Screen Overlay */}
        {isLaptopExpanded && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => setIsLaptopExpanded(false)}
          >
            <div 
              style={{
                width: '90vw',
                height: '90vh',
                backgroundColor: '#1a1a1a',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '30px',
                  cursor: 'pointer',
                  padding: '10px'
                }}
                onClick={() => setIsLaptopExpanded(false)}
              >
                ×
              </button>
              
              {/* Screen content */}
              <div style={{ textAlign: 'center' }}>
                <h1 style={{ marginBottom: '20px' }}>Jasmit Singh Portfolio</h1>
                <p style={{ fontSize: '18px', opacity: 0.8 }}>Welcome to my interactive portfolio</p>
                <p style={{ fontSize: '14px', marginTop: '20px', opacity: 0.6 }}>
                  Click anywhere outside or press ESC to close
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
