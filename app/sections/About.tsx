"use client"
import { Github, Instagram, Linkedin, Mail, Phone, SunDim } from "lucide-react";
import { motion } from "motion/react"
import { BBH_Sans_Bartle, Michroma, Oswald } from "next/font/google";
import Image from "next/image";
import al9wel from "../assets/images/al9wel.jpeg"
import Link from "next/link";
const BBH = BBH_Sans_Bartle({
    weight: ["400"],
});
const oswald = Oswald({
    weight: ["400"],
});
const About = () => {
    return (
        <section id="about" className="p-2 h-screen">
            <div className="w-full p-2  mb-2 mt-12 flex justify-between items-center text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center text-color1">
                <div className="hidden md:flex gap-2 justify-center items-center flex-col">
                    <SunDim className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9" />
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{
                            opacity: 1,
                            height: 65
                        }}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        className="w-2 sm:w-3  border border-color1 rounded-2xl"></motion.div>
                    <SunDim className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9" />
                </div>
                <div className="flex md:hidden gap-2 justify-center items-center flex-col">
                    <SunDim className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9" />
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{
                            opacity: 1,
                            height: 40
                        }}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        className="w-2 sm:w-3  border border-color1 rounded-2xl"></motion.div>
                    <SunDim className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9" />
                </div>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                    className={`${BBH.className}`}>About Me
                </motion.h1>
                <div className="hidden md:flex gap-2 justify-center items-center flex-col">
                    <SunDim className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9" />
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{
                            opacity: 1,
                            height: 65
                        }}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        className="w-2 sm:w-3  border border-color1 rounded-2xl"></motion.div>
                    <SunDim className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9" />
                </div>
                <div className="flex md:hidden gap-2 justify-center items-center flex-col">
                    <SunDim className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9" />
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{
                            opacity: 1,
                            height: 40
                        }}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        className="w-2 sm:w-3  border border-color1 rounded-2xl"></motion.div>
                    <SunDim className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9" />
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="bg-color8 h-50 col-span-2 md:col-span-1 md:h-70 rounded-br-[30px] rounded-sm relative">
                    <div className="noise opacity-20"></div>
                    <Image
                        src={al9wel}
                        alt="al9wel"
                        fill
                        className=" object-cover object-center scale-98 grayscale-70 hover:grayscale-20 duration-300 cursor-crosshair rounded-br-[120px]"
                    />
                </div>
                <div className="bg-color8 h-50 col-span-5 md:col-span-2 md:h-70 rounded-tl-[30px] rounded-sm relative">
                    <div className="noise opacity-30"></div>
                </div>
                <div className="col-span-7 md:col-span-2 relative">
                    <div className="noise opacity-30"></div>
                    <div className="bg-color8 h-50 rounded-tr-[30px] rounded-sm"></div>
                    <div className="bg-color2 mt-2 h-20 rounded-bl-[30px] rounded-sm"></div>
                </div>
            </div>
            <div className="grid grid-cols-7 mt-2 gap-2">
                <div className="bg-color8 text-black/80 p-2 rounded-sm rounded-bl-[30px] relative col-span-7 md:col-span-4">
                    <div className="noise opacity-30"></div>
                    <div className="flex justify-between items-center">
                        <h1 className={`uppercase ${oswald.className} tracking-widest text-4xl `}>About me</h1>
                        <div className="flex justify-center items-center gap-2 flex-col">
                            <div className="rounded-full w-3 h-3 border-2 border-black/70"></div>
                            <div className="rounded-full w-3 h-3 bg-black/70"></div>
                        </div>
                    </div>
                    <p className="text-sm p-2 hidden md:block">web developer with a degree in Information Technology and hands-on experience building resposive, dynamic web applications. <br></br> Skilled in modren web technologies including React, Next.js, and JavaScrpit with backend understanding using Node.js and Express.<br></br> Passionate about creating clean UI, efficent code, and continuous leraning. </p>
                    <p className="text-sm p-2 md:hidden">web developer with a degree in Information Technology and hands-on experience building resposive, dynamic web applications. <br></br> Passionate about creating clean UI, efficent code, and continuous leraning. </p>
                </div>
                <div className="bg-color8 text-black/80 h-fit p-2 rounded-sm rounded-tr-[30px] relative col-span-7 md:col-span-3">
                    <div className="noise opacity-30"></div>
                    <h1 className={`uppercase ${oswald.className} tracking-widest text-4xl `}>Contact me</h1>
                    <div className="flex flex-wrap gap-6 mt-2">
                        <div>
                            <div className="flex justify-start items-center gap-2 mb-2">
                                <div className="p-[3px] text-color8 bg-black/70 rounded-md"><Mail size={20} /></div>
                                <Link href={"mailto:sa.al9wel@gmail.com"}>sa.al9wel@gmail</Link>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <div className="p-[3px] text-color8 bg-black/70 rounded-md"><Phone size={20} /></div>
                                <Link href={"https://wa.me/+967736584524"}>736584524</Link>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-start items-center gap-2 mb-2">
                                <div className="p-[3px] text-color8 bg-black/70 rounded-md"><Github size={20} /></div>
                                <Link href={"https://github.com/al9wel"}>al9wel</Link>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <div className="p-[3px] text-color8 bg-black/70 rounded-md"><Linkedin size={20} /></div>
                                <Link href={"https://linkedin.com/in/al9wel"}>al9wel</Link>
                            </div>
                        </div>
                        <button className="bg-black/80 mt-2 hidden sm:block  rounded-md p-2 text-color8 cursor-pointer hover:bg-black/90 duration-300">Downlad CV</button>
                    </div>
                    <button className="bg-black/80 mt-2 sm:hidden  rounded-md p-2 text-color8 cursor-pointer hover:bg-black/90 duration-300">Downlad CV</button>
                    <div className="flex justify-end items-end gap-2">
                        <div className="rounded-full w-3 h-3 border-2 border-black/70"></div>
                        <div className="rounded-full w-3 h-3 bg-black/70"></div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About
