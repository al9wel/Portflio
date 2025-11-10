import SectionTitle from "../components/SectionTitle";
import { SiReact, SiRedux, SiTailwindcss } from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
const tech = [
    <SiReact key={1} size={30} />,
    <SiRedux key={2} size={30} />,
    <SiTailwindcss key={3} size={30} />,
]
const Projects = () => {
    return (
        <section id="projects" className="p-2 min-h-screen overflow-hidden">
            <div className=" relative">
                <SectionTitle title={"Projects"} />
            </div>
            <div className="mt-12">
                <div className="relative my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600">
                </div>
                <ProjectCard title={"Weather App"} tech={tech} color={"bg-green-800/40"} />
                <ProjectCard title={"Prayer Times"} tech={tech} color={"bg-blue-800/40"} />
                <ProjectCard title={"Tawasol"} tech={tech} color={"bg-orange-800/40"} />
            </div>
        </section >
    )
}

export default Projects
