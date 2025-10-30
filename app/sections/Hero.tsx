import React from 'react'
import HeroText from '../components/HeroText'
import { motion } from 'motion/react'
import { ArrowBigRight } from 'lucide-react'
import Image from 'next/image'
import hero from "../assets/images/herojpg.jpg"
// { handleColor }: { handleColor: ({ }) => void }
const Hero = () => {
    return (
        <motion.section id='home' className='min-h-screen'>
            <motion.div>
                <HeroText />
            </motion.div>
            <div className="flex mt-2 justify-center items-center flex-col md:flex-row-reverse gap-3">
                <p className="md:hidden uppercase text-color1 tracking-[8px] sm:tracking-[20px]">based in yemen</p>
                <div className="hidden self-start md:flex flex-col gap-4">
                    <motion.p
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{ delay: 0.7, duration: 1, ease: [0.23, 1, 0.32, 1], }}
                        className="uppercase text-color1 tracking-[8px] lg:tracking-[20px]">based</motion.p>
                    <motion.p
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{ delay: 0.9, duration: 1, ease: [0.23, 1, 0.32, 1], }}
                        className="uppercase text-color1 tracking-[8px] lg:tracking-[20px]">in</motion.p>
                    <motion.p
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{ delay: 1.1, duration: 1, ease: [0.23, 1, 0.32, 1], }}
                        className="uppercase text-color3/80 font-extrabold tracking-[8px] lg:tracking-[20px]">yemen</motion.p>
                </div >
                <div className="flex justify-center items-end gap-1 md:flex-row-reverse">
                    <motion.div
                        initial={{
                            clipPath: "inset(0 0 100% 0)",
                        }}
                        animate={{
                            clipPath: "inset(0 0 0 0)",
                        }}
                        transition={{ delay: 0.3, duration: 2.5, ease: [0.23, 1, 0.32, 1], }}
                        className="relative w-50 h-40 sm:w-90 md:w-110 md:h-60 lg:w-140 bg-color2/20 overflow-hidden rounded-xl">
                        <motion.div
                            initial={{
                                clipPath: "inset(0 0 100% 0)",
                            }}
                            animate={{
                                clipPath: "inset(0 0 0 0)",
                            }}
                            transition={{ delay: 0.5, duration: 2.5, ease: [0.23, 1, 0.32, 1], }}
                            className='w-full h-full cursor-crosshair'
                        >
                            <Image
                                src={hero}
                                alt="al9wel"
                                fill
                                className="object-cover object-center"
                            />
                        </motion.div>
                    </motion.div>
                    <div className={`flex text- justify-end items-start flex-col gap-1 text-color2/70`}>
                        <motion.p
                            initial={{
                                clipPath: "inset(0 0 100% 0)",
                            }}
                            animate={{
                                clipPath: "inset(0 0 0 0)",
                            }}
                            transition={{ delay: 0.3, duration: 2, ease: [0.23, 1, 0.32, 1], }}>
                            /developer
                        </motion.p>
                        <motion.p
                            className='text-color4/70'
                            initial={{
                                clipPath: "inset(0 0 100% 0)",
                            }}
                            animate={{
                                clipPath: "inset(0 0 0 0)",
                            }}
                            transition={{ delay: 0.5, duration: 1.8, ease: [0.23, 1, 0.32, 1], }}>
                            /coder
                        </motion.p>
                        <motion.p
                            initial={{
                                clipPath: "inset(0 0 100% 0)",
                            }}
                            animate={{
                                clipPath: "inset(0 0 0 0)",
                            }}
                            transition={{ delay: 0.7, duration: 1.6, ease: [0.23, 1, 0.32, 1], }}>
                            /designer
                        </motion.p>
                    </div>
                </div>
            </div >
            <motion.div
                initial={{
                    clipPath: "inset(0 0 0 100%)",
                }}
                animate={{
                    clipPath: "inset(0 0 0 0)",
                }}
                transition={{ delay: 0.5, duration: 1.7, ease: [0.23, 1, 0.32, 1], }}
                className=" h-10 bg-color2/20 w-90 text-sm sm:w-120 md:w-170 md:mx-auto lg:w-150 xl:w-170 mt-2 ">
                <motion.p
                    initial={{
                        clipPath: "inset(0 0 0 100%)",
                    }}
                    animate={{
                        clipPath: "inset(0 0 0 0)",
                    }}
                    transition={{ delay: 0.7, duration: 1.7, ease: [0.23, 1, 0.32, 1], }}
                    className="text-color1 bg-blue-800/40  text-left pl-4 w-90 text-sm sm:w-120 md:pl-0 md:w-170 md:mx-auto md:text-right lg:w-150 xl:w-170 mt-2 ">
                    I’m experienced web developer , who design and developed memorable web experiences
                    <span className="hidden sm:inline">for brands OF ALL SIZES</span>
                </motion.p>
            </motion.div>
            <div className="w-full h-20 mt-6 md:mt-10 flex justify-end px-10 md:px-10 md:justify-start items-center text-color1">
                <motion.a
                    // whileInView={() => handleColor({ main: "text-color1", alt: "text-color4", logo1: "from-color1", logo2: "to-color2" })}
                    initial={{
                        opacity: 0,
                        x: -40
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{ delay: 0.5, duration: 1.7, ease: [0.23, 1, 0.32, 1], }}
                    whileHover="hover"
                    className="flex items-center justify-center gap-2 cursor-pointer "
                    href="https://wa.me/+967736584524"
                >
                    <motion.div
                        variants={{
                            hover: {
                                rotate: -5,
                                color: "#d7bd78"
                            },
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="text-xl md:text-2xl font-semibold text-color1 ">
                        Contact Me
                    </motion.div>
                    <motion.div
                        variants={{
                            hover: {
                                rotate: 5,
                                x: 5,
                                color: "#d7bd78"
                            },
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        <ArrowBigRight size={32} />
                    </motion.div>
                </motion.a>
            </div>
        </motion.section >
    )
}

export default Hero
