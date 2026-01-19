"use client";
import { ArrowBigRight } from 'lucide-react'
import { motion } from 'motion/react'
import ProjectDetails from './ProjectDetails'
import { useState } from 'react'
import { StaticImageData } from 'next/image'
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import { BiWorld } from 'react-icons/bi';
import { GiWorld } from 'react-icons/gi';
import { MdPreview } from 'react-icons/md';
type ComponentProps = {
    title: string,
    tech: React.ReactNode[],
    color: string,
    description: string
    features: string[],
    githup: string,
    preview: string,
    image: StaticImageData
}
const ProjectCard = ({ title, tech, color, description, features, githup, preview, image }: ComponentProps) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <motion.div
                transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                className="hover:translate-y-[-6px] duration-300 flex flex-col justify-center items-start sm:gap-6 sm:flex-row sm:justify-between sm:items-center  py-2 px-2 bg-color8/10 rounded-sm md:px-20 text-color1">
                <div>
                    <motion.div
                        initial={{
                            clipPath: "inset(0 100% 0 0)",
                        }}
                        whileInView={{
                            clipPath: "inset(0 0 0 0)",
                        }}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        className=" bg-color9/20 text-xl ">
                        <div className="noise opacity-5"></div>
                        <motion.h1
                            initial={{
                                clipPath: "inset(0 100% 0 0)",
                            }}
                            whileInView={{
                                clipPath: "inset(0 0 0 0)",
                            }}
                            transition={{ duration: 3, ease: [0.23, 1, 0.32, 1], }}
                            className={`text-color1 ${color}  px-1 uppercase mt-2 `}>
                            {title}
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        initial={{
                            clipPath: "inset(0 0 100% 0)",
                        }}
                        whileInView={{
                            clipPath: "inset(0 0 0 0)",
                        }}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        className="flex items-center justify-start sm:justify-start mt-4 text-sm gap-2">
                        {/* <p className="text-color9 rounded-full border border-color9 w-fit p-1">
                            <SiReact size={30} />
                        </p>
                        <p className="text-color9 rounded-full border border-color9 w-fit p-1">
                            <SiTailwindcss size={30} />
                        </p>
                        <p className="text-color9 rounded-full border border-color9 w-fit p-1">
                            <SiRedux size={30} />
                        </p> */}
                        {tech.map((icon, index) => {
                            return (
                                <p key={index} className="text-color9 rounded-full border border-color9 w-fit p-2">
                                    {icon}
                                </p>
                            )
                        })}
                    </motion.div>
                </div>
                <div className='flex sm:gap-4 w-full sm:w-fit! justify-between sm:justify-center items-center sm:items-end sm:flex-col'>
                    <motion.button
                        initial={{
                            opacity: 0,
                            x: -40
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        whileHover="hover"
                        onClick={() => setOpen(true)}
                        className="flex items-center justify-center gap-2 cursor-pointer "
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
                            See More
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
                            <ArrowBigRight className="size-7 md:size-8" />
                        </motion.div>
                    </motion.button>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        whileHover="hover"
                        // onClick={() => setOpen(true)}
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 cursor-pointer "
                    >
                        <Link href={githup} className="bg-color8/70 text-black/70 hover:bg-color2 p-[2px] hover:scale-95 p-[2px] rounded-md duration-300 socials flex justify-center items-center gap-2 ">
                            <div className="p-[3px] rounded-md"><SiGithub size={20} /></div>
                            <p>Githup</p>
                        </Link>
                        <Link href={preview} className="bg-color8/70 text-black/70 hover:bg-color2 p-[2px] hover:scale-95 rounded-md duration-300 socials flex justify-center items-center gap-0.5 ">
                            <div className="p-[3px] rounded-md"><BiWorld size={20} /></div>
                            <p>Preview</p>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
            <div className="relative my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600">
            </div>
            {open && (
                <ProjectDetails title={title} color={color} tech={tech} description={description} features={features} githup={githup} preview={preview} image={image} closeModal={() => setOpen(false)} />
            )}
        </>
    )
}

export default ProjectCard
