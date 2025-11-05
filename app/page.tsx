"use client"
import { Michroma } from "next/font/google";
import Hero from "./sections/Hero";
import About from "./sections/About";
import NavBar from "./components/NavBar";
import Projects from "./sections/Projects";
const michroma = Michroma({
  weight: ["400"],
});

const Home = () => {
  return (
    <>
      <main className={`${michroma.className} relative `}>
        <div className="bg-noise"></div>
        <NavBar />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default Home;
