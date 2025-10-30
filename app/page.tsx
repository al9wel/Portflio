"use client"
import { Michroma } from "next/font/google";
import NoiseBackground from "./components/NoiseBackground";
import { User, Briefcase, Phone } from "lucide-react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Link from "next/link";
import { motion } from "motion/react";
// import { useState } from "react";
const michroma = Michroma({
  weight: ["400"],
});
const Home = () => {
  // const [color, setColor] = useState({ main: "text-color1", alt: "text-color4", logo1: "color1", logo2: "color2" })
  const navItems = [
    { name: 'About', url: '#about', icon: <User /> },
    { name: 'Projects', url: '#projects', icon: <Briefcase /> },
    { name: 'Connect', url: '#connect', icon: <Phone /> },
  ]
  // const handleColor = (colors: { main: string, alt: string, logo1: string, logo2: string }) => {
  //   setColor(colors)
  // }
  return (
    <>
      <main className={`${michroma.className} min-h-screen`}>
        <motion.header
          initial={{
            opacity: 0,
            y: -40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ delay: 1.2, duration: 2, ease: [0.23, 1, 0.32, 1], }}
          className="fixed top-0 left-0 w-full z-50 flex justify-center items-center">
          <nav className=" w-[95%]  lg:w-[90%] rounded-md bg-amber-4 text-color1  backdrop-blur-md  z-50 flex justify-between items-center uppercase mt-4 py-1 md:py-2 px-2 sm:px-4 md:px-10">
            <Link href="#home" className={`bg-clip-text text-transparent bg-gradient-to-r from-color1 to-color2 font-black`}>al9wel</Link>
            <div
              className={` hidden md:flex justify-center items-center gap-6 `}>
              {navItems.map((item) => {
                return (
                  <Link key={item.name} href={item.url} className={`hover:text-color2 ${item.name == "Projects" ? "text-color4/70" : ""} duration-300 hover:scale-103 hover:translate-y-[-3px]`}>{item.name}</Link>
                )
              })}
            </div>
            <div className="md:hidden flex justify-center items-center gap-6">
              {navItems.map((item) => {
                return (
                  <a key={item.name} href={item.url} className="hover:text-color2 duration-300 hover:scale-103 hover:translate-y-[-3px] border-b-4 border-color2/50 rounded-full p-2">{item.icon}</a>
                )
              })}
            </div>
          </nav>
        </motion.header>
        <NoiseBackground noiseIntensity={0.1} className=" bg-black/95">
          {/* handleColor={handleColor}  */}
          <Hero />
          {/* handleColor={handleColor}  */}
          <About />
        </NoiseBackground>
      </main>
    </>
  );
};

export default Home;
