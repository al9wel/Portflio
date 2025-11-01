"use client"
import { motion } from 'motion/react'
import Link from 'next/link'
import { User, Briefcase, Phone } from "lucide-react";

const NavBar = () => {
    const navItems = [
        { name: 'About', url: '#about', icon: <User /> },
        { name: 'Projects', url: '#projects', icon: <Briefcase /> },
        { name: 'Connect', url: '#connect', icon: <Phone /> },
    ]
    return (
        <motion.header
            initial={{
                opacity: 0,
                y: -40
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{ delay: 0.5, duration: 2, ease: [0.23, 1, 0.32, 1], }}
            className=" sticky top-0 left-0 w-full z-50 flex justify-center items-center">
            <nav className=" w-[95%]  lg:w-[90%] rounded-md bg-amber-4 text-color1  backdrop-blur-md  z-50 flex justify-between items-center uppercase mt-4 py-1 md:py-2 px-2 sm:px-4 md:px-10">
                <Link href="/" className={`bg-clip-text text-transparent bg-gradient-to-r from-color1 to-color2 font-black`}>al9wel</Link>
                <div
                    className={` hidden md:flex justify-center items-center gap-6 `}>
                    {navItems.map((item) => {
                        return (
                            <Link key={item.name} href={item.url} className={`hover:text-color2 text-color1/70 duration-300 hover:scale-103 hover:translate-y-[-3px] border-b-3 border-color4/50 hover:border-color2/70 rounded-full p-2`}>{item.name}</Link>
                        )
                    })}
                </div>
                <div className="md:hidden flex justify-center items-center gap-6">
                    {navItems.map((item) => {
                        return (
                            <a key={item.name} href={item.url} className="hover:text-color2 duration-300 text-color1/70 hover:scale-103 hover:translate-y-[-3px] border-b-3 border-color4/50 hover:border-color2/70 rounded-full p-2">{item.icon}</a>
                        )
                    })}
                </div>
            </nav>
        </motion.header>
    )
}

export default NavBar
