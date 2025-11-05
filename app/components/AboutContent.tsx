import { Star } from "lucide-react";
import { motion } from "motion/react"
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import al9wel from "../assets/images/al9wel.jpeg"
import { SiExpress, SiFlutter, SiGit, SiGithub, SiGmail, SiJavascript, SiLaravel, SiLinkedin, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript, SiWhatsapp, } from "react-icons/si";
import LogoLoop from "./LogoLoop"
const oswald = Oswald({
    weight: ["400"],
});
const techLogos = [
    { node: <SiTailwindcss color="#2d2d29" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiTypescript color="#2d2d29" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiRedux color="#2d2d29" />, title: "Redux", href: "https://redux-toolkit.js.org" },
    { node: <SiExpress color="#2d2d29" />, title: "Express", href: "https://expressjs.com" },
    { node: <SiMongodb color="#2d2d29" />, title: "Express", href: "https://www.mongodb.com" },
    { node: <SiLaravel color="#2d2d29" />, title: "Express", href: "https://laravel.com" },
    { node: <SiFlutter color="#2d2d29" />, title: "Express", href: "https://flutter.dev" },
];
interface ComponentProps {
    animationValues: {
        initial1: { opacity: number, x?: number },
        whileInView1: { opacity: number, x?: number },
        initial2: { opacity: number, x?: number },
        whileInView2: { opacity: number, x?: number },
        initial3: { opacity: number, x?: number },
        whileInView3: { opacity: number, x: number },
        initial4: { opacity: number, x?: number },
        whileInView4: { opacity: number, x?: number },
        initial5: { opacity: number, x?: number },
        whileInView5: { opacity: number, x?: number },
        initial6: { opacity: number, x?: number },
        whileInView6: { opacity: number, x?: number },
    }

}
const AboutContent = ({ animationValues }: ComponentProps) => {
    const animation = animationValues;
    return (
        <>
            <div className="grid grid-cols-5 gap-4">
                <motion.div
                    initial={animation.initial1}
                    whileInView={animation.whileInView1}
                    transition={{ delay: 0.1, duration: 1.8, ease: [0.23, 1, 0.32, 1], }}
                    className="bg-color8 h-75 sm:h-65 col-span-2 md:col-span-1 md:h-118 lg:h-82 xl:h-71  rounded-br-[30px] rounded-sm relative">
                    <div className="noise opacity-20"></div>
                    <Image
                        src={al9wel}
                        alt="al9wel"
                        fill
                        className=" object-cover object-center scale-98 grayscale-90 hover:grayscale-60 duration-300 cursor-crosshair rounded-br-[120px]"
                    />
                </motion.div>
                <motion.div
                    initial={animation.initial2}
                    whileInView={animation.whileInView2}
                    transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                    className="bg-color8 h-75 sm:h-65 col-span-5 md:col-span-2 md:h-118 lg:h-82 xl:h-71  rounded-tl-[30px] p-2 pr-1 text-black/80 rounded-sm relative">
                    <div className="noise opacity-30"></div>
                    <div className="flex justify-between items-center">
                        <h1 className={`uppercase ${oswald.className} tracking-widest text-4xl `}>Education</h1>
                        <div className="flex justify-center items-center flex-col md:flex-row gap-2">
                            <div className="rounded-full w-3 h-3 border-2 border-black/70"></div>
                            <div className="rounded-full w-3 h-3 bg-black/70"></div>
                        </div>
                    </div>
                    <div className="mt-2 sm:mt-4"><span className=" p-1 border text-[12px] sm:text-[16px] border-black/80 rounded-full">2022 - 2026</span></div>
                    <h2 className="md:text-xl mt-2 sm:mt-4 font-extrabold">Alryan Universty</h2>
                    <p className="text-sm mt-1 ">Information Technology</p>
                    <p className="text-sm mt-4">Holder of Bechlor&apos;s degree in IT,equipped with a solid foundation in software development,data analysis, and technical problem-solving.<span className="hidden lg:block">Proficient in applying theoretical concepts to real-world projects.</span></p>
                </motion.div>
                <div className="col-span-7 md:col-span-2 relative">
                    <div className="noise opacity-30"></div>
                    <motion.div
                        initial={animation.initial3}
                        whileInView={animation.whileInView3}
                        transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        className="bg-color8 h- md:h-92 lg:h-55 xl:h-50 p-2 text-black/80 rounded-tr-[30px] rounded-sm">
                        <div className="flex justify-between items-center">
                            <h1 className={`uppercase ${oswald.className} tracking-widest text-4xl `}>Skills</h1>
                            <div className="flex xl:hidden justify-center items-center flex-col mr-6 gap-2">
                                <div className="rounded-full w-3 h-3 border-2 border-black/70"></div>
                                <div className="rounded-full w-3 h-3 bg-black/70"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-4">
                            <div className="flex justify-start items-center gap-2">
                                {/* <Image src={js} alt="js" width={40} height={40} /> */}
                                <SiJavascript color="#FDD835" className="bg-black/60  rounded-md p-[2px]" size={40} />
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[16px] sm:text-xl uppercase">JS</h1>
                                    <div className="flex justify-center items-center gap-2">
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                {/* <Image src={react} alt="react" width={40} height={40} /> */}
                                <SiReact color="#397fc5" className="bg-white/50 border-2 border-black/70  rounded-md p-[2px]" size={40} />
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[16px] sm:text-xl uppercase">react</h1>
                                    <div className="flex justify-center items-center gap-2">
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <SiNextdotjs className="bg-white/50 border-2 border-black/70  rounded-md p-[2px]" size={40} />
                                {/* <Image src={next} alt="next" width={35} height={35} /> */}
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[16px] sm:text-xl uppercase">next.js</h1>
                                    <div className="flex justify-center items-center gap-2">
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start items-center gap-2">
                                <SiNodedotjs color="#5fa014" className="bg-white/50 border-2 border-black/70  rounded-md p-[2px]" size={40} />
                                {/* <Image src={node} alt="node" width={40} height={40} /> */}
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[16px] sm:text-xl uppercase">Node.js</h1>
                                    <div className="flex justify-center items-center gap-2">
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} />
                                        <Star size={15} />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-start items-center gap-2">
                                {/* <Image src={git} alt="git" width={40} height={40} /> */}
                                <SiGit color="#d53526" className="bg-white/50 border-2 border-black/70  rounded-md p-[2px]" size={40} />
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[16px] sm:text-xl uppercase">git</h1>
                                    <div className="flex justify-center items-center gap-2">
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} />
                                        <Star size={15} />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-start items-center gap-2">
                                {/* <Image src={githup} alt="githup" width={40} height={40} /> */}
                                <SiGithub className="bg-white/50 border-2 border-black/70  rounded-md p-[2px]" size={40} />
                                <div className="flex justify-center items-center flex-col">
                                    <h1 className="text-[16px] sm:text-xl uppercase">githup</h1>
                                    <div className="flex justify-center items-center gap-2">
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} fill="orange" />
                                        <Star size={15} />
                                        <Star size={15} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" hidden xl:flex mt-4 justify-end items-center flex-col md:flex-row gap-2">
                            <div className="rounded-full w-3 h-3 border-2 border-black/70"></div>
                            <div className="rounded-full w-3 h-3 bg-black/70"></div>
                        </div>
                    </motion.div>
                    {/* هنا اعمل شريط يعبر كذا فيه التقنيات */}
                    {/* <motion.div
                        initial={animation.initial4}
                        whileInView={animation.whileInView4}
                        transition={{ delay: 0.1, duration: 1.8, ease: [0.23, 1, 0.32, 1], }}
                        className="bg-color8 mt-2 h-25 sm:h-15  md:h-25 overflow-hidden xl:h-20 rounded-bl-[30px] rounded-sm p-2 flex justify-center items-center gap-4 flex-wrap">
                        <h3 className="rounded-full border bg-black/80 text-color8 border-color8/20 w-fit p-1">html</h3>
                        <h3 className="rounded-full border bg-black/80 text-color8 border-color8/20 w-fit p-1">css</h3>
                        <h3 className="rounded-full border bg-black/80 text-color8 border-color8/20 w-fit p-1">tailwind</h3>
                        <h3 className="rounded-full border bg-black/80 text-color8 border-color8/20 w-fit p-1">express</h3>
                        <h3 className="rounded-full border bg-black/80 text-color8 border-color8/20 w-fit p-1">laravel</h3>
                        <h3 className="rounded-full border bg-black/80 text-color8 border-color8/20 w-fit p-1">flutter</h3>
                        <h3 className="rounded-full border bg-black/80 text-color8 border-color8/20 w-fit p-1">c#</h3>
                    </motion.div> */}
                    <motion.div
                        initial={animation.initial4}
                        whileInView={animation.whileInView4}
                        transition={{ delay: 0, duration: 2, ease: [0.23, 1, 0.32, 1], }}
                        className="bg-[#b2b687] flex justify-center items-center mt-2 h-25 sm:h-15  md:h-25 overflow-hidden xl:h-20 rounded-bl-[30px] rounded-sm relative">
                        <LogoLoop
                            logos={techLogos}
                            speed={50}
                            direction="left"
                            logoHeight={48}
                            gap={40}
                            pauseOnHover
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#b2b687"
                            ariaLabel="Technology partners"
                        />
                    </motion.div>
                </div>
            </div>
            <div className="grid grid-cols-7 mt-2 gap-2">
                <motion.div
                    initial={animation.initial5}
                    whileInView={animation.whileInView5}
                    transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                    className="bg-color8 md:bg-[#b2b687] text-black/80 p-2 rounded-sm rounded-bl-[30px] relative col-span-7 md:col-span-4">
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
                </motion.div>
                <motion.div
                    initial={animation.initial6}
                    whileInView={animation.whileInView6}
                    transition={{ duration: 2, ease: [0.23, 1, 0.32, 1], }}
                    className="bg-[#b2b687] md:bg-color8 text-black/80 h-fit p-2 rounded-sm rounded-tr-[30px] relative col-span-7 md:col-span-3">
                    <div className="noise opacity-30"></div>
                    <h1 className={`uppercase ${oswald.className} tracking-widest text-4xl `}>Socials</h1>
                    <div className="flex flex-wrap gap-6 mt-2">
                        <div>
                            <Link href={"mailto:sa.al9wel@gmail.com"} className=" hover:bg-black/80 hover:text-color8 p-[2px] rounded-md duration-300 socials flex justify-start items-center gap-2 mb-2">
                                <div className="p-[3px] text-color8 bg-black/70 rounded-md"><SiGmail size={20} /></div>
                                <p>Gmail</p>
                            </Link>
                            <Link href={"https://wa.me/+967736584524"} className="hover:bg-black/80 hover:text-color8 p-[2px] rounded-md duration-300 socials flex justify-start items-center gap-2">
                                <div className="p-[3px] text-color8 bg-black/70 rounded-md"><SiWhatsapp size={20} /></div>
                                <p>Whatsapp</p>
                            </Link>
                        </div>
                        <div>
                            <Link href={"https://github.com/al9wel"} className="hover:bg-black/80 hover:text-color8 p-[2px] rounded-md duration-300 socials flex justify-start items-center gap-2 mb-2 ">
                                <div className="p-[3px] text-color8 bg-black/70 rounded-md"><SiGithub size={20} /></div>
                                <p>Githup</p>
                            </Link>
                            <Link href={"https://linkedin.com/in/al9wel"} className="hover:bg-black/80 hover:text-color8 p-[2px] rounded-md duration-300 socials flex justify-start items-center gap-2">
                                <div className="p-[3px] text-color8 bg-black/70 rounded-md"><SiLinkedin size={20} /></div>
                                <p>Linked in</p>
                            </Link>
                        </div>
                        <Link href={"/cv.pdf"} className="bg-black/80  justify-center items-center mt-0 md:mt-2 lg:self-start hidden sm:flex  rounded-md p-2 text-color8 hover:text-white cursor-pointer hover:bg-black/90 duration-300">Downlad CV</Link>
                    </div>
                    <Link href={"/cv.pdf"} className="bg-black/80  justify-center items-center mt-4 md:mt-2 lg:self-start flex sm:hidden w-fit  rounded-md p-2 text-color8 hover:text-white cursor-pointer hover:bg-black/90 duration-300">Downlad CV</Link>
                    <div className="flex justify-end items-end gap-2">
                        <div className="rounded-full w-3 h-3 border-2 border-black/70"></div>
                        <div className="rounded-full w-3 h-3 bg-black/70"></div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default AboutContent
