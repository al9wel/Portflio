
import { Michroma } from "next/font/google";
import NoiseBackground from "./components/NoiseBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";
import NavBar from "./components/NavBar";

const michroma = Michroma({
  weight: ["400"],
});
const Home = () => {
  // const [color, setColor] = useState({ main: "text-color1", alt: "text-color4", logo1: "color1", logo2: "color2" })

  // const handleColor = (colors: { main: string, alt: string, logo1: string, logo2: string }) => {
  //   setColor(colors)
  // }
  return (
    <>
      <main className={`${michroma.className} min-h-screen`}>
        <NavBar />
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
