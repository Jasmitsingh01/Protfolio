import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaGit,
  FaDocker ,
  FaFigma ,
  FaJenkins ,
  FaAws


  
} from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

import {
  BiLogoJavascript,
  BiLogoFirebase,
  BiLogoGraphql,
  
} from "react-icons/bi";
import { SiExpress, SiMongodb, SiSocketdotio,SiBabel,SiWebpack ,SiJest,SiPostman ,SiAdobephotoshop ,SiAdobexd ,SiRedis   } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";
const frontendSkills = [
    {
      title: "HTML",
      Icon: <FaHtml5 />,
    },
    {
      title: "CSS",
      Icon: <FaCss3 />,
    },
    {
      title: "JavaScript",
      Icon: <BiLogoJavascript />,
    },
    {
      title: "React",
      Icon: <FaReact />,
    },
  ];
  const backendSkills = [
    {
      title: "Node.js",
      Icon: <FaNodeJs />,
    },
    {
      title: "Express.js",
      Icon: <SiExpress />,
    },
    {
      title: "MongoDB",
      Icon: <SiMongodb />,
    },
    {
      title: "Firebase",
      Icon: <BiLogoFirebase />,
    },
  
    {
      title: "GraphQL",
      Icon: <BiLogoGraphql />,
    },
    {
      title: "REST API",
      Icon: <TbApi />,
    },
    {
      title: "Socket.io",
      Icon: <SiSocketdotio />,
    },
    {
        title: "Redis",
        Icon: <SiRedis />,
      },
  ];
  const otherSkills = [
    {
      title: "Git",
      Icon: <FaGit />,
    },
    {
      title: "Webpack",
      Icon: <SiWebpack />,
    },
    {
      title: "Babel",
      Icon: <SiBabel/>,
    },
    {
      title: "Docker",
      Icon: <FaDocker/>,
    },
    {
      title: "Jest",
      Icon: <SiJest />,
    },
    {
      title: "Postman",
      Icon: <SiPostman />,
    },
    {
      title: "Figma",
      Icon: <FaFigma/>,
    },
    {
      title: "Photoshop",
      Icon:<SiAdobephotoshop />,
    },
  
    {
      title: "XD",
      Icon: <SiAdobexd/>,
    },
    {
      title:"Jenkins",
      Icon:<FaJenkins />
    },{
      title:"AWS",
      Icon:<FaAws />
    },
  ];
const Section = (props) => {
  const { children ,mobileTop} = props;
  return (
    <motion.section 
     initial={
      {
        opacity:0,
        y:50
      }
     }
     whileInView={{
            opacity:1,
            y:0,
            transition:{
              duration:1,
              delay:0.6
            }
     }}
    className={`
    h-screen w-screen max-w-screen-2xl mx-auto mb-20 flex flex-col justify-center items-start  md:p-8
    ${ mobileTop ? " justify-start md:justify-center" : " justify-center"}
    
    `}>
      {children}
    </motion.section>
  );
};

const AboutSection = (props) => {
  const { mobileTop,setSection } = props;
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
        opacity:0,
        y:25
      }}
      whileInView={{
        opacity:1,
        y:0,
        transition:{
          duration:1,
          delay:1.5
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
          opacity:0,
          y:25
        }}
        whileInView={{
          opacity:1,
          y:0,
          transition:{
            duration:1,
            delay:2.5
          }
        }}
        onClick={()=>DownloadPdf()}
        
        className=" p-3 font-semibold  bg-purple-600 border-2  border-transparent text-white rounded-lg hover:bg-transparent hover:border-purple-600 hover:text-purple-600 transition-colors duration-300">
          Download Resume
        </motion.button>
        <motion.button 
        initial={{
          opacity:0,
          y:25
        }}
        whileInView={{
          opacity:1,
          y:0,
          transition:{
            duration:1,
            delay:3.5
          }
        }}
        
        onClick={()=>setSection(3)}
        className=" p-3 font-semibold border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300">
          Contact Me
        </motion.button>
      </div>
      </div>
    </Section>
  );
};


const SkillsSection = () => {
  return (
    <Section >

      <motion.div whileInView={'visible'} className="  w-full h-full text-white flex flex-col items-start gap-5 p-2">
        <div>
          <h2 className=" text-xl font-bold mb-2.5">Frontend</h2>
          <div className="grid grid-cols-2  gap-2 md:gap-5  text-lg">
            {frontendSkills.map((skill, index) => (
              <motion.div
              initial={{
                opacity:0,
              }}
              variants={{
               visible:{
                opacity:1,
                transition:{
                  duration:1,
                  delay:1 +0.2 * index
                }
               }
              }}
              
              key={index} className="flex items-center gap-2">
                {skill.Icon}
                <span className="  font-bold">{skill.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold mb-2.5">Backend</h2>
          <div className="grid grid-cols-3 gap-2 md:gap-5 text-lg">
            {backendSkills.map((skill, index) => (
              <motion.div 
              initial={{
                opacity:0,
              }}
              variants={{
                visible:{
                 opacity:1,
                 transition:{
                   duration:1,
                   delay:1 +0.2 * index
                 }
                }
               }}
              key={index} className="flex items-center gap-2">
                {skill.Icon}
                <span className="  font-bold">{skill.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h2 className=" text-xl font-bold mb-2.5">Other Tool's</h2>
          <div className="grid grid-cols-3 gap-2 md:gap-5 text-lg">
            {otherSkills.map((skill, index) => (
              <motion.div 
              initial={{
                opacity:0,
              }}
              variants={{
                visible:{
                 opacity:1,
                 transition:{
                   duration:1,
                   delay:1 +0.2 * index
                 }
                }
               }}
              key={index} className="flex items-center gap-2">
                {skill.Icon}
                <span className="  font-bold">{skill.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};


const ProjectsSection = () => {
    return (
        <Section>
        <h1 className=" text-5xl font-bold mb-10">Projects</h1>
        <div className="grid grid-cols-1 px-5 md:grid-cols-3 gap-10">
            <div className="bg-gray-200 h-[100px] md:h-[300px] overflow-hidden p-5 rounded-lg">
            <h2 className=" text-2xl font-bold mb-5">Project 1</h2>
            <p className=" text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                facilisis, ligula auctor tincidunt aliquam, eros sapien
                condimentum nunc, sed iaculis arcu nisi at arcu.
            </p>
            </div>
            <div className="bg-gray-200 h-[100px] md:h-[300px] overflow-hidden  p-5 rounded-lg">
            <h2 className=" text-2xl font-bold mb-5">Project 2</h2>
            <p className=" text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                facilisis, ligula auctor tincidunt aliqu
            </p>
            </div>
            <div className="bg-gray-200 h-[100px] md:h-[300px] overflow-hidden  p-5 rounded-lg">
            <h2 className=" text-2xl font-bold mb-5">Project 3</h2>
            <p className="  text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                facilisis, ligula auctor tincidunt aliqu
            </p>
            </div>
        </div>
        </Section>
    );
};

const ContactFrom = ()=>{

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

const HTML = (props) => {
  const { mobileTop,setSection} = props;
  return (
    <div className="interface-container">
      <AboutSection mobileTop={mobileTop} setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactFrom />
      
   
    </div>
  );
};

export default HTML;
