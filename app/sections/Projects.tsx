import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import weather from "../assets/images/weather.png"
import animated from "../assets/images/animated.png"
import tawasol from "../assets/images/tawasol.png"
import { ArrowBigRight } from "lucide-react";
import { motion } from "motion/react";
const Projects = () => {
    return (
        <section id="projects" className="p-2 min-h-screen overflow-hidden">
            <div className=" relative">
                <SectionTitle title={"Projects"} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 gap-8 mt-12 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                    className="h-50 bg-color9  border-2 border-white rounded-sm rounded-br-[30px] rounded-bl-[30px] relative">
                    <div className="h-full  w-full absolute bg-color8 -top-3 -left-3 border-2 border-white  text-black/80  rounded-sm rounded-br-[30px] rounded-bl-[30px] overflow-hidden">
                        <div className="noise opacity-20"></div>
                        <div className="w-full h-35 relative">
                            <Image
                                src={weather}
                                alt="al9wel"
                                fill
                                className=" object-cover object-top rounded-sm  duration-300 cursor-crosshair"
                            />
                        </div>
                        <div className="flex justify-between items-center p-2">
                            <h1 className="text-black/70">Weather App</h1>
                            <button className="bg-black/80 text-color8 hover:bg-black hover:text-white/80 duration-200 p-1 rounded-md flex justify-center items-center gap-2 cursor-pointer">
                                See
                                <ArrowBigRight size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                    className="h-50 bg-color9  border-2 border-white rounded-sm rounded-br-[30px] rounded-bl-[30px] relative">
                    <div className="h-full  w-full absolute bg-color8 -top-3 -left-3 border-2 border-white  text-black/80  rounded-sm rounded-br-[30px] rounded-bl-[30px] overflow-hidden">
                        <div className="noise opacity-20"></div>
                        <div className="w-full h-35 relative">
                            <Image
                                src={animated}
                                alt="al9wel"
                                fill
                                className=" object-cover object-top rounded-sm  duration-300 cursor-crosshair"
                            />
                        </div>
                        <div className="flex justify-between items-center p-2">
                            <h1 className="text-black/70">Landing Page</h1>
                            <button className="bg-black/80 text-color8 hover:bg-black hover:text-white/80 duration-200 p-1 rounded-md flex justify-center items-center gap-2 cursor-pointer">
                                See
                                <ArrowBigRight size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                    className="h-50 bg-color9  border-2 border-white rounded-sm rounded-br-[30px] rounded-bl-[30px] relative">
                    <div className="h-full  w-full absolute bg-color8 -top-3 -left-3 border-2 border-white  text-black/80  rounded-sm rounded-br-[30px] rounded-bl-[30px] overflow-hidden">
                        <div className="noise opacity-20"></div>
                        <div className="w-full h-35 relative">
                            <Image
                                src={tawasol}
                                alt="al9wel"
                                fill
                                className=" object-cover object-top rounded-sm  duration-300 cursor-crosshair"
                            />
                        </div>
                        <div className="flex justify-between items-center p-2">
                            <h1 className="text-black/70">Tawasol Media</h1>
                            <button className="bg-black/80 text-color8 hover:bg-black hover:text-white/80 duration-200 p-1 rounded-md flex justify-center items-center gap-2 cursor-pointer">
                                See
                                <ArrowBigRight size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default Projects
