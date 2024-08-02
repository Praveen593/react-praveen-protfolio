import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function Contact (){
    return <div className="w-full h-full bg-black  " initial={{y:100 , opacity: 0}} whileInView={{y:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}}>
        <motion.h1 initial={{y:100 , opacity: 0}} whileInView={{y:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}}className="font-PriFont text-3xl text-white text-center -ml-6 p-6" id="Contact">Contact Me</motion.h1>
        <motion.div  initial={{y:100 , opacity: 0}} whileInView={{y:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}} className="flex flex-col md:flex-row justify-center md:p-5 ">
            <a href="mailto:007praveen2003@gmail.com"target="_blank" rel="noreferrer"><MdEmail className="text-white text-2xl ml-14 hover:transform hover:-translate-y-2  duration-200 "/></a>
            <a href="mailto:007praveen2003@gmail.com"target="_blank" rel="noreferrer"><p className="font-SecFont text-base text-white md:ml-3 md:mt-0 ml-24 -mt-6 md:pb-0 pb-3 hover:text-blue-600 duration-200" >007praveen2003@gmail.com</p></a>
            <FaSquareWhatsapp className="text-green-600 text-2xl ml-14 hover:transform hover:-translate-y-2  duration-200"/> 
            <p className="font-SecFont text-base text-white md:ml-3 md:mt-0 ml-24 -mt-6 md:pb-0 pb-3" >+91 9677859964</p>
            <a href="https://www.linkedin.com/in/praveen-s-luci" target="_blank" rel="noreferrer"><FaLinkedin className="text-sky-600 text-2xl ml-14 hover:transform hover:-translate-y-2  duration-200"/></a>
            <a href="https://www.linkedin.com/in/praveen-s-luci" target="_blank" rel="noreferrer"><p className="font-SecFont text-base text-white md:ml-3 md:mt-0 ml-24 -mt-6 hover:text-blue-600 duration-200 md:pb-0 pb-3">Praveen S</p></a>
            
        </motion.div>
        <motion.div initial={{y:100 , opacity: 0}} whileInView={{y:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}} className="flex flex-row justify-center ">
        <a href="https://www.instagram.com/_mr_praveen_00/" target="_blank" rel="noreferrer"><FaInstagram className="text-pink-600 text-2xl -ml-4 md:ml-0 hover:transform hover:-translate-y-2  duration-200 "/></a>
        <a href="https://www.instagram.com/_mr_praveen_00" target="_blank" rel="noreferrer"><p className="font-SecFont text-base text-white  md:ml-0 ml-2 hover:text-blue-600 cursor-pointer duration-200">_mr_praveen_00</p></a>
        <a href="https://www.facebook.com/profile.php?id=100026262097626&mibextid=kFxxJD" target="_blank" rel="noreferrer"><FaFacebookSquare className="text-blue-600 text-2xl md:ml-10 ml-5 hover:transform hover:-translate-y-2  duration-200"/></a>
        <a href="https://www.instagram.com/_mr_praveen_00" target="_blank" rel="noreferrer"><p className="font-SecFont text-base text-white ml-3 hover:text-blue-600 cursor-pointer duration-200">Facebook</p></a>
        </motion.div>
        <motion.div initial={{y:100 , opacity: 0}} whileInView={{y:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}} className="mb-5"> 
            <a href="/src/assets/Praveen.png" download className="flex justify-center -ml-20"><button className="bg-white transtion duration-300 hover:bg-black text-purple-600 font-semibold hover:text-white px-7 py-1 md:py-1 md:px-4 border border-3 border- hover:border-white rounded-full ml-24 mt-7 md:mx-44 md:ml-60 md:mt-6 hover:shadow-2xl hover:shadow-white">Download Resume</button></a>
        </motion.div>
        <footer>
            <hr />
            <p className="text-white opacity-50 text-[14px] text-center p-4">Copyright &copy; 2024 by Praveen_luci</p>
        </footer>
        </div>
} 