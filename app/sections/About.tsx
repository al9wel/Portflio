import SectionTitle from "../components/SectionTitle";
import AboutContent from "../components/AboutContent";
const smallScreenAnimation = {
    initial1: { opacity: 0, x: -50 },
    whileInView1: { opacity: 1, x: 0 },
    initial2: { opacity: 0, x: 50 },
    whileInView2: { opacity: 1, x: 0 },
    initial3: { opacity: 0, x: -50 },
    whileInView3: { opacity: 1, x: 0 },
    initial4: { opacity: 0, x: 50 },
    whileInView4: { opacity: 1, x: 0 },
    initial5: { opacity: 0, x: -50 },
    whileInView5: { opacity: 1, x: 0 },
    initial6: { opacity: 0, x: 50 },
    whileInView6: { opacity: 1, x: 0 },
};
const largeScreenAnimation = {
    initial1: {
        opacity: 0,
        y: -50
    },
    whileInView1: {
        opacity: 1,
        y: 0
    },
    initial2: { opacity: 0, x: -50 },
    whileInView2: { opacity: 1, x: 0 },
    initial3: {
        opacity: 0,
        x: 50
    },
    whileInView3: {
        opacity: 1,
        x: 0
    },
    initial4: { opacity: 0, x: -50 },
    whileInView4: { opacity: 1, x: 0 },
    initial5: { opacity: 0, y: -50 },
    whileInView5: { opacity: 1, y: 0 },
    initial6: { opacity: 0, y: 50 },
    whileInView6: { opacity: 1, y: 0 },
};
const About = () => {
    return (
        <section id="about" className="p-2 min-h-screen overflow-hidden">
            <div className=" relative">
                <SectionTitle title={"About Me"} />
            </div>
            <div className="hidden md:block">
                <AboutContent animationValues={largeScreenAnimation} />
            </div>
            <div className=" md:hidden">
                <AboutContent animationValues={smallScreenAnimation} />
            </div>
        </section >
    )
}

export default About
