
import { TypeAnimation } from 'react-type-animation';


import { motion } from "framer-motion";
import { useEffect ,useState,useRef } from "react";


const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      initial={
        {
          opacity: 0,
          y: 50
        }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6
        }
      }}
      className={`
    h-screen w-screen max-w-screen-2xl mx-auto mb-20 flex flex-col justify-center items-start  md:p-8
    ${mobileTop ? " justify-start md:justify-center" : " justify-center"}
    
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
      <div className=" text-white p-5 w-full md:w-1/2">
        <h1 className=" text-5xl font-bold flex flex-col flex-nowrap text-nowrap md:flex-row  gap-4 mb-10">
          Hi, I'm
          <span className=" text-red-700">
            <TypeAnimation
              sequence={[
                'Jasmit Singh',
                2000,
                'a Full Stack Developer',
                2000,
                'a Web Designer',
                2000,
              ]}
              repeat={Infinity}
            />
          </span>
        </h1>
        <motion.p initial={{
          opacity: 0,
          y: 25
        }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.5
            }
          }}

          className=" text-sm md:text-xl text-wrap break-words  font-semibold italic mb-10 ">
          I have experience in building web applications using modern technologies
          like React, Node.js, Express.js, and MongoDB. I am passionate about
          building scalable and efficient web applications that provide a great
          user experience.
        </motion.p>
        <div className="flex flex-col  md:flex-row gap-5">
          <motion.button

            initial={{
              opacity: 0,
              y: 25
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 2.5
              }
            }}
            onClick={() => DownloadPdf()}

            className=" p-3 font-semibold  bg-purple-600 border-2  border-transparent text-white rounded-lg hover:bg-transparent hover:border-purple-600 hover:text-purple-600 transition-colors duration-300">
            Download Resume
          </motion.button>
          <motion.button
            initial={{
              opacity: 0,
              y: 25
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 3.5
              }
            }}

            onClick={() => setSection(2)}
            className=" p-3 font-semibold border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300">
            Contact Me
          </motion.button>
        </div>
      </div>
    </Section>
  );
};




const ContactFrom = () => {

  return (

    <div className=" w-full  md:w-1/4 p-3 ">
      <h1 className=" text-5xl font-bold mb-5">Contact Me</h1>
      <form className=" flex flex-col gap-5    justify-start ">
        <input
          type="text"
          placeholder="Name"
          className=" p-3  outline-none border-2 border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className=" p-3 outline-none border-2 border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Message"
          className=" p-3 outline-none border-2 min-h-[100px] border-gray-300 rounded-lg"
        />
        <button className=" p-3 mb-10 font-semibold bg-purple-600 border-2  border-transparent text-white rounded-lg hover:bg-transparent hover:border-purple-600 hover:text-purple-600 transition-colors duration-300">
          Send Message
        </button>
      </form>
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
          className="text-center max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Interactive Experience
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 1 }
            }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Click on the laptop screen to explore my portfolio in fullscreen
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2 bg-purple-600 bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="text-2xl">🖱️</span>
                <span>Click the screen</span>
              </div>

              <div className="flex items-center gap-2 bg-blue-600 bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="text-2xl">⌨️</span>
                <span>Press ESC to close</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 1.5 }
              }}
              className="mt-8"
            >
              <p className="text-gray-400 text-sm">
                Hover over the laptop screen and watch the cursor change
              </p>
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
    audioRef.current.volume = 0.3;
    audioRef.current.loop = true; // Enable looping
    
    // Function to play audio only once
    const playAudio = () => {
      if (!hasPlayed && audioRef.current) {
        audioRef.current.play().then(() => {
          hasPlayed = true;
          console.log("Audio started playing");
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
    <div className="interface-container">
       <AboutSection mobileTop={mobileTop} setSection={setSection} />
       <InteractiveSection />
      <ContactFrom />
    </div>
  );
};

export default HTML;
