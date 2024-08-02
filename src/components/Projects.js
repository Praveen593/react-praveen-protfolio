import { motion } from "framer-motion"
import { PROJECT_LIST } from "../contant/Project-Detail"

export default function Projects(){
    return <div className="project-color w-full h-full" >
        <motion.h1 initial={{y:-100 , opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:0.5, delay:0.2}}  className="font-PriFont text-black text-center font-semibold text-3xl md:text-4xl py-10 " id="Project" >Projects</motion.h1>
         <div>{PROJECT_LIST.map((project, index) => (
              <div key={index} className="flex flex-wrap justify-center " >
                <motion.div initial={{x:-100 , opacity: 0}} whileInView={{x:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}} className="w-full md:w-1/3 ">
                    <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    <img className=" mb-10 rounded-2xl shadow-xl shadow-neutral-600 ml-14 md:ml-0 mt-10 hover:shadow-orange-500 duration-300 "
                    src={project.image} alt={project.title}
                    width={300}
                    height={300}
                     />
                     </a>
                </motion.div>
                <motion.div initial={{x:100 , opacity: 0}} whileInView={{x:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}} className="w-full max-w-xl md:1/3 m-6">
                <h4 className="mb-2 font-SecFont font-semibold text-center">{project.title}</h4>
                <p className="mb-2 text-white m-5">{project.description}</p>
                <p className="mb-2  text-[18px] ml-5 font-medium font-PriFont  text-orange-600">{project.technologies}</p>
                <a href={project.github}><button className='bg-sky-400 transtion duration-200 hover:bg-black text-black font-semibold hover:text-white px-7 py-1 md:py-1 md:px-4 border border-5 border-black hover:border-transparent rounded-full ml-32 mt-7 md:mx-0 md:ml-3 md:mt-0'>Github</button></a>
                </motion.div>
              </div>
         ))}
        </div>
    </div>
}
