
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6
        }
      }}
      className={`
        h-screen w-screen max-w-screen-2xl mx-auto mb-20 flex flex-col justify-center items-start md:p-8
        ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
      `}>
      {children}
    </motion.section>
  );
};

const AboutSection = (props) => {
  const { mobileTop, setSection } = props;
  
  const DownloadPdf = () => {
    const pdfUrl = "/Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "JasmitSingh@Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <Section mobileTop={mobileTop}>
      <div className="text-white p-6 w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold flex flex-col md:flex-row gap-4 mb-8 leading-tight">
            <span className="text-dark-100">Hi, I'm</span>
            <span className="text-gradient">
              <TypeAnimation
                sequence={[
                  'Jasmit Singh',
                  2000,
                  'A Full Stack Developer',
                  2000,
                  'A Web Designer',
                  2000,
                  'A Problem Solver',
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
                className="inline-block text-nowrap"
              />
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.2
            }
          }}
          className="text-lg md:text-xl text-dark-300 font-medium leading-relaxed mb-10 max-w-2xl"
        >
          I specialize in creating modern, scalable web applications using cutting-edge technologies 
          like React, Node.js, and MongoDB. Passionate about delivering exceptional user experiences 
          through clean code and innovative design.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.8
            }
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => DownloadPdf()}
            className="btn-primary group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              📄 Download Resume
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => setSection(2)}
            className="btn-secondary group"
          >
            <span className="flex items-center gap-2">
              💬 Contact Me
            </span>
          </button>
        </motion.div>

        {/* Skills indicators */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 2.2
            }
          }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {['React', 'Node.js', 'MongoDB', 'TypeScript', 'Next.js'].map((skill, index) => (
            <span 
              key={skill}
              className="px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full text-sm text-dark-300 backdrop-blur-sm"
              style={{ animationDelay: `${2.4 + index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

const ContactFrom = () => {
  return (
    <div className="w-full md:w-1/3 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
          Let's Connect
        </h1>
        
        <form className="flex flex-col gap-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full"
              required
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full"
              required
            />
          </div>
          
          <div>
            <textarea
              placeholder="Tell me about your project or just say hello..."
              className="w-full min-h-[120px] resize-none"
              required
            />
          </div>
          
          <button 
            type="submit"
            className="btn-primary w-full group"
          >
            <span className="flex items-center justify-center gap-2">
              🚀 Send Message
            </span>
          </button>
        </form>

      
      </motion.div>
    </div>
  )
}

const InteractiveSection = () => {
  return (
    <Section>
      <div className="w-full h-full flex flex-col items-center justify-center text-white p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.5 }
          }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
            Interactive Portfolio
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 1 }
            }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-dark-300 mb-12 leading-relaxed">
              Experience my work in an immersive 3D environment. Click on the laptop screen 
              to explore my projects and skills in detail.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.div 
                className="glass p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">🖱️</div>
                <h3 className="font-semibold text-lg mb-2">Interactive Experience</h3>
                <p className="text-dark-400 text-sm">Click the laptop screen to enter fullscreen mode</p>
              </motion.div>

              <motion.div 
                className="glass p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">⌨️</div>
                <h3 className="font-semibold text-lg mb-2">Easy Navigation</h3>
                <p className="text-dark-400 text-sm">Use ESC key or click outside to close</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1.5 }
              }}
              className="mt-12"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-accent/10 border border-accent-500/20 rounded-full">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="text-dark-300 text-sm">Scroll to explore more sections</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

const HTML = (props) => {
  const { mobileTop, setSection, section } = props;
  const audioRef = useRef(null);

  useEffect(() => {
    let hasPlayed = false;
    
    // Create audio element
    audioRef.current = new Audio("/SOUND.mp3");
    audioRef.current.volume = 0.2; // Reduced volume for better UX
    audioRef.current.loop = true;
    
    // Function to play audio only once
    const playAudio = () => {
      if (!hasPlayed && audioRef.current) {
        audioRef.current.play().then(() => {
          hasPlayed = true;
          console.log("Background music started");
        }).catch(error => {
          console.log("Audio autoplay blocked, waiting for user interaction");
        });
      }
    };

    // Try to play immediately (will likely fail due to autoplay policy)
    playAudio();

    // Play after any user interaction
    const handleInteraction = () => {
      playAudio();
    };

    // Add multiple interaction listeners
    const events = ['click', 'scroll', 'keydown', 'touchstart', 'mousedown'];
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      // Clean up all event listeners
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  return (
    <div className="interface-container relative">
      {/* Background gradient overlay
      <div className="fixed inset-0 bg-gradient-dark opacity-50 pointer-events-none z-0"></div> */}
      
      <div className="relative z-10">
        <AboutSection mobileTop={mobileTop} setSection={setSection} />
        <InteractiveSection />
        <ContactFrom />
      </div>
    </div>
  );
};

export default HTML;
