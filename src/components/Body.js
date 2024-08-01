import {motion} from "framer-motion"
import HeroImg from '../assets/about.png'
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io";
export default function Body(){
    return <div className='bg-for-Body flex flex-col w-full h-fit justify-center px-1 py-16 md:flex-row md:px-5 md:py-32'>
        <div className='md:ml-5 md:w-1/2 flex flex-col '> 
            <motion.h1 initial={{x:-100 ,opacity:0 }} animate={{ x:0 , opacity:1}} transition={{duration:0.5, delay:0.1}} className='text-white typing-fx font-semibold font-PriFont ml-10 text-2xl md:text-4xl md:ml-28 ' > Hi , Myself Praveen S <br /><span className='color-type1 pl-10  md:text-3xl py-2.5 md:pl-20 md:py-2'></span></motion.h1> 
                <motion.p initial={{x:-100 , opacity:0 }} animate={{ x:0  ,opacity:1}} transition={{duration:0.5, delay:0.2}} className=" font-light font-SecFont  text-center md:ml-20 md:p-1 md:text-xl ">Passionate about JavaScript and React.js </motion.p><br />
                <motion.p initial={{x:-100 , opacity:0 }} animate={{ x:0  ,opacity:1}} transition={{duration:0.5, delay:0.4}} className=" color-type1 font-PriFont font-semibold text-center ml-10 md:p-1 md:text-2xl hidden md:block ">Welcome to my digital portfolio - <br /> <span className='text-white font-SecFont font-light ml-10 '>where creativity meets functionality<br /><span className='ml-2'>Bringing ideas to life through code and design</span></span></motion.p><br />
            <motion.div initial={{y:200 , opacity:0 }} animate={{ y:0  ,opacity:1}} transition={{duration:0.5, delay:0.7}} className='hidden md:flex md:pl-48 md:py-3'>
                <a href="https://github.com/Praveen593" target='_blank' rel='noreferrer' className='pr-5 transition hover:-translate-y-1 hover:scale-125 duration-400 hover:text-black duration-500'><AiOutlineGithub size={40}/></a>
                <a href="https://www.linkedin.com/in/praveen-s-luci" target='_blank' rel='noreferrer' className='pr-5 hover:-translate-y-1 hover:scale-125 duration-400 hover:text-blue-600 transition duration-500'><FaLinkedin size={40}/></a>
                <a href="https://leetcode.com/u/_Praveen_Luci_/" target='_blank' rel='noreferrer' className='pr-5 hover:-translate-y-1 hover:scale-125 duration-400 hover:text-black transition duration-500'><SiLeetcode size={40}/></a>
                <a href="https://www.instagram.com/_mr_praveen_00/" target='_blank' rel='noreferrer' className=' hover:-translate-y-1 hover:scale-125 duration-400 hover:text-pink-700 transition duration-500'><IoLogoInstagram size={40}/></a>
            </motion.div>
            <motion.div initial={{x:-100 , opacity:0 }} animate={{ x:0  ,opacity:1}} transition={{duration:0.5, delay:0.4}} className='flex-col w-5 ml-3 mt-10 sticky md:hidden'>
                <a href="https://github.com/Praveen593" target='_blank' rel='noreferrer' className='pr-5 hover:text-black transition duration-500'><AiOutlineGithub size={20}/></a>
                <a href="https://www.linkedin.com/in/praveen-s-luci/" target='_blank' rel='noreferrer' className='pr-5 hover:text-blue-600 transition duration-500'><FaLinkedin size={20}/></a>
                <a href="https://leetcode.com/u/_Praveen_Luci_/" target="_blank" rel='noreferrer' className='pr-5 hover:text-black transition duration-500'><SiLeetcode size={20}/></a>
                <a href="https://www.instagram.com/_mr_praveen_00/" target='_blank' rel='noreferrer' className='hover:text-pink-700 transition duration-500'><IoLogoInstagram size={20}/></a>   
            </motion.div>  
        </div> 
        <motion.img initial={{x:100 , opacity:0 }} animate={{ x:0  ,opacity:1}} transition={{duration:0.5, delay:0.4}} className= ' invisible flex max-h-fit max-w-fit ml-20 md:w-1/2 mr-20 justify-center -translate-y-10 md:visible'src={HeroImg} alt='hero' /> 
        <motion.img initial={{x:100 , opacity:0 }} animate={{ x:0  ,opacity:1}} transition={{duration:0.5, delay:0.6}} className= ' flex w-80 absolute align-middle left-12 top-72 md:invisible 'src={HeroImg} alt='hero' /> 
        <motion.p initial={{y:-100 , opacity:0 }} animate={{ y:0  ,opacity:1}} transition={{duration:0.5, delay:0.6}} className=" flex-col color-type1 font-PriFont font-semibold text-center ml-5 text-xl mr-5 visible md:hidden ">Welcome to my digital portfolio -<br /><span className='text-white font-SecFont font-light' >where creativity meets functionality<br />
Bringing ideas to life through code and design</span></motion.p>
    </div>
}