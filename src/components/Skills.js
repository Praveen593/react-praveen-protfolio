import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
export default function Skills(){
    return <div>
        <section className="pb-14" id="Skills">
                <motion.h1 initial={{y:-100 , opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:0.5, delay:0.4}} className="my-10 font-PriFont volite-color-text font-semibold text-center text-3xl md:text-4xl">Technologies I know</motion.h1>
                <motion.div initial={{y:-100 , opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration:0.5, delay:0.4}} className="flex flex-wrap items-center justify-center gap-11 mx-10">
                    <motion.div initial={{y:-10}} animate={{y:[10,-10]}} transition={{duration:3, repeat:Infinity, repeatType: "mirror"}} className="rounded-2xl bg-black border-neutral-400 border-4 p-2 ">
                    <SiHtml5 className="text-4xl md:text-5xl text-orange-600"/>
                    </motion.div>
                    <motion.div initial={{y:10}} animate={{y:[-10,10]}} transition={{duration:2.8, repeat:Infinity, repeatType: "mirror"}} className="rounded-2xl bg-black border-neutral-400 border-4 p-2">
                    <SiCss3  className="text-4xl md:text-5xl text-sky-500"/>
                    </motion.div>
                    <motion.div initial={{y:10}} animate={{y:[-10,10]}} transition={{duration:4, repeat:Infinity, repeatType: "mirror"}} className="rounded-2xl bg-black border-neutral-400 border-4 p-2">
                    <RiJavascriptFill className=" text-4xl md:text-5xl text-yellow-300"/>
                    </motion.div>
                    <motion.div initial={{y:10}} animate={{y:[-10,10]}} transition={{duration:3.8, repeat:Infinity, repeatType: "mirror"}} className="rounded-2xl bg-black border-neutral-400 border-4 p-2">
                    <FaReact className=" text-4xl md:text-5xl text-sky-400"/>
                    </motion.div>
                    <motion.div initial={{y:10}} animate={{y:[-10,10]}} transition={{duration:4.3, repeat:Infinity, repeatType: "mirror"}} className="rounded-2xl bg-black border-neutral-400 border-4 p-2">
                    <RiTailwindCssFill className=" text-4xl md:text-5xl text-sky-500"/>
                    </motion.div>
                    <motion.div initial={{y:10}} animate={{y:[-10,10]}} transition={{duration:4.8, repeat:Infinity, repeatType: "mirror"}} className="rounded-2xl bg-black border-neutral-400 border-4 p-2">
                    <SiMongodb className=" text-4xl md:text-5xl text-green-600"/>
                    </motion.div>
                </motion.div>
    
        </section>
    </div>
}