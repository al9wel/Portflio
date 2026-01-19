"use client";

import { SunDim } from 'lucide-react'
import { motion } from 'motion/react'
import { BBH_Sans_Bartle } from 'next/font/google';
import React from 'react'
const BBH = BBH_Sans_Bartle({
    weight: ["400"],
});
const SectionTitle = ({ title }: { title: string }) => {

    return (
        <>
            <div className="w-full p-2  mb-2 mt-12 flex justify-between items-center text-3xl sm:text-5xl md:text-[60px] lg:text-[85px] xl:text-[120px] text-center text-color1">
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
                    className={`${BBH.className} text-color1/80`}>{title}
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
        </>
    )
}

export default SectionTitle
