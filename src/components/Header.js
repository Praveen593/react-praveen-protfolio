import { motion } from 'framer-motion';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header() {
    const[ToggleMenu , setToggleMenu]= useState(false);

    return <header className="flex justify-around md:justify-between px-5 py-5 bg-primary text-header">
        <motion.a initial={{x:-100 , opacity: 0}} animate={{x:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.1 }} className="font-extrabold text-header font-SecFont px-5 transtion hover:duration-200 hover:text-black  " id="Home" href='#Home'>My Protfolio</motion.a>
        <motion.nav initial={{x:100 , opacity: 0}} animate={{x:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.2}} className="hidden md:block ">
            <ul className="flex text-black font-PriFont ">
                <li><a href="#Home" className=' transition hover:duration-200 hover:text-purple-600'>Home</a></li>
                <li><a href="#About" className='transition hover:duration-200 hover:text-purple-600'>About</a></li>
                <li><a href="#Project" className='transition hover:duration-200 hover:text-purple-600'>Project</a></li>
                <li><a href="#Contact" className='transition hover:duration-200 hover:text-purple-600'>Contact</a></li>
            </ul>
        </motion.nav>
        {ToggleMenu && <nav className="block md:hidden mobile-nav ">
            <ul className=" flex-col text-black font-PriFont">
                <li><a href="#Body" className='transition hover:duration-200 hover:text-purple-600'>Home</a></li>
                <li><a href="#About" className='transition hover:duration-200 hover:text-purple-600'>About</a></li>
                <li><a href="#Project" className='transition hover:duration-200 hover:text-purple-600'>Project</a></li>
                <li><a href="#Contact" className='transition hover:duration-200 hover:text-purple-600'>Contact</a></li>
            </ul>
        </nav>}
        <motion.button initial={{x:150 , opacity: 0}} animate={{x:0 , opacity: 1}} transition={{duration:0.5 , delay: 0.1, }} onClick ={()=> setToggleMenu (!ToggleMenu)} className='block md:hidden transition-all'><Bars3Icon className='text-black h-10'/></motion.button>
    </header>

}