import Praveen from '../assets/Praveen.png';
import { motion } from 'framer-motion';

export default function About(){
    return <section className=' flex flex-col w-full h-full md:flex-row bg-white md:h-full md:w-full ' id="About">
        <motion.div initial={{x:-100 , opacity: 0}} whileInView={{x:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}} className='md:w-1/2'>
            <img className='w-40 ml-[120px] mt-10 md:w-72 md:ml-36 md:mt-20 rounded-full shadow-2xl shadow-purple-600' src={Praveen} alt='Praveen'/>
        </motion.div>
        <motion.div initial={{x:100 , opacity: 0}} whileInView={{x:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}} className='md:w-1/2 mb-5'>
            <h1 className='ml-[35%] my-8 text-3xl text-cente md:mt-5 md:ml-52 font-PriFont font-semibold volite-color-text md:text-4xl md:py-10'>About Me</h1>
            <p className='text-black w-80 h-80 m-7 text-sm  font-SecFont md:text-xl md:w-[75%] md:h-36 text-center md:ml-1 '>Hello and welcome to my portfolio! I’m a passionate and curious student stepping into the professional world, excited to bring my skills and experiences to new challenges. <br /> Throughout my academic journey, I've immersed myself in various projects that have not only built a solid foundation in my field but also sparked my creativity and problem-solving abilities. <br /> I love learning and am always looking for ways to grow and improve. <br /></p>
            <p id="Skills" className='text-black ml-8 -mt-20 font-PriFont font-medium md:text-xl md:mt-44 md:-ml-10 '>Education : <span className='text-black text-justify text-sm font-SecFont font-light md:text-center md:text-xl md:mt-48 '>C Abdul Hakeem College of Engineering and Technology</span></p> 
            <p className='text-black font-SecFont font-light mt-3 m-7 text-sm md:text-xl text-center md:ml-32 w-80'>B Tech [ Infomation Technology ]</p>
            <a href="#Skills" ><button className='bg-transparent transtion duration-200 hover:bg-black text-purple-600 font-semibold hover:text-white px-7 py-1 md:py-1 md:px-4 border border-3 border-purple-900 hover:border-transparent rounded-full ml-32 mt-7 md:mx-44 md:ml-60 md:mt-6'>My Skills</button></a>
        </motion.div> 
    </section>
}