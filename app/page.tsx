"use client"
import { Michroma } from "next/font/google";
import Hero from "./sections/Hero";
import About from "./sections/About";
import NavBar from "./components/NavBar";
import Projects from "./sections/Projects";
import Connect from "./sections/Connect";
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
        <Connect />
      </main>
    </>
  );
};

export default Home;
