"use client"
import { motion } from "motion/react"
// { handleColor }: { handleColor: ({ }) => void }
const About = () => {
    return (
        <section id="about" className="h-screen p-2 ">
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-color1 w-full h-70 rounded-md"></div>
                <div className="bg-color1 w-full h-70 rounded-md"></div>
                <div className="bg-color1 w-full h-70 rounded-md"></div>
                <div className="bg-color1 w-full h-70 rounded-md"></div>
            </div>
            <motion.div className="grid mt-4 grid-cols-2 gap-4 ">
                <div className="bg-color1 w-full h-70 rounded-md"></div>
                <div className="bg-color1 w-full h-70 rounded-md"></div>
            </motion.div>
            <motion.div className="grid mt-4 grid-cols-3 gap-4 ">
                <div className="bg-color1 w-full h-32 rounded-md"></div>
                <div className="bg-color1 w-full h-32 rounded-md"></div>
                <div className="bg-color1 w-full h-32 rounded-md flex justify-end items-end">
                    <motion.p
                    // whileInView={() => handleColor({ main: "text-black/60", alt: "text-color6", logo1: "from-black/60", logo2: "to-color2" })}
                    >
                        hhh
                    </motion.p>
                </div>
            </motion.div>
        </section>
    )
}

export default About
