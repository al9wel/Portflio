import SectionTitle from "../components/SectionTitle";
import { SiCss3, SiHtml5, SiI18Next, SiJavascript, SiNextdotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import portflio from "../assets/images/portflio.png"
import weather from "../assets/images/weather.png"
import animated from "../assets/images/animated.png"
import todolist from "../assets/images/todolist.png"
import tawasol from "../assets/images/tawasol.png"
import prayer from "../assets/images/prayertimes.png"
import xo from "../assets/images/tictactoe.png"
import skills from "../assets/images/skills.png"
const projects = [
    {
        id: 0,
        title: "Portflio",
        tech: [
            <SiNextdotjs key={1} size={30} />,
            <SiTypescript key={2} size={30} />,
            <SiTailwindcss key={3} size={30} />,
        ],
        description: `A modern and minimal portfolio website built using Next.js, Tailwind CSS, and Framer Motion.
        Designed to showcase creative work with smooth animations, responsive layouts, and clean design principles`,
        features: [
            "Creative Animations – Built with Framer Motion for page transitions, hover effects, and element entrances.",
            "Responsive UI – Styled with Tailwind CSS to look great on any device",
            "Project Showcase – Clean layout to highlight your featured works and skills.",
        ],
        color: "bg-pink-800/40",
        githup: "https://github.com/al9wel/Portflio",
        preview: "https://al9wel.netlify.app/",
        image: portflio
    },
    {
        id: 1,
        title: "Weather App",
        tech: [
            <SiReact key={1} size={30} />,
            <SiRedux key={2} size={30} />,
            <SiTailwindcss key={3} size={30} />,
            <SiI18Next key={1} size={30} />,
        ],
        description: `A simple and responsive Weather Application built using React, Vite, Redux Toolkit, and Tailwind CSS, leveraging the OpenWeather API.
Users can search for any city and instantly get current weather data, with language support in English and Arabic via i18next (i18n).`,
        features: [
            "Current Weather Data – Displays temperature, weather description, humidity, wind speed, and more.",
            "State Management with Redux – Uses Redux Toolkit for global state handling and cleaner logic.",
            "Multilingual Support – Switch between English and Arabic using i18next.",
        ],
        color: "bg-green-800/40",
        githup: "https://github.com/al9wel/WeatherApp",
        preview: "https://al9wel-9.netlify.app/",
        image: weather
    },
    {
        id: 2,
        title: "Animated Page",
        tech: [
            <SiReact key={1} size={30} />,
            <SiVite key={2} size={30} />,
            <SiTailwindcss key={3} size={30} />,
        ],
        description: `A creative and minimal React website built to learn and experiment with animations and modern styling.
The project includes two sections — Home and About — where different animation techniques are applied using Framer Motion , Tailwind CSS and Third-Party Libraries`,
        features: [
            "Smooth Animations – Explore transitions, motion effects, and element entrances using Framer Motion",
            "Modern Styling – Built with Tailwind CSS for a clean and responsive design",
            "Experiment With Third-Party Libraries – Like ogl,gsap etc...",
        ],
        color: "bg-blue-800/40",
        githup: "https://github.com/al9wel/Animated-Landing-Page",
        preview: "https://al9wel-10.netlify.app/",
        image: animated
    },
    {
        id: 3,
        title: "TodoList",
        tech: [
            <SiReact key={1} size={30} />,
            <SiVite key={2} size={30} />,
            <SiTailwindcss key={3} size={30} />,
        ],
        description: `A simple and elegant To-Do List application built with React, powered by Vite for lightning-fast development, and styled using Tailwind CSS.
This project helps users organize their daily tasks efficiently and sort the task with a clean and responsive interface`,
        features: [
            "Add, Edit, and Delete Tasks – Manage your daily tasks easily.",
            "Mark Tasks as Complete – Keep track of progress",
            "Persistent Storage – Uses Local Storage to save tasks between sessions",
        ],
        color: "bg-red-800/40",
        githup: "https://github.com/al9wel/React-To-Do-List",
        preview: "https://al9wel-7.netlify.app/",
        image: todolist
    },
    {
        id: 4,
        title: "Tawasol Media",
        tech: [
            <SiHtml5 key={2} size={30} />,
            <SiJavascript key={1} size={30} />,
            <SiTailwindcss key={3} size={30} />,
        ],
        description: `Tawasol is a simple and interactive social media web application.
The app allows users to create accounts, log in, post content, view others’ posts, and interact with a dynamic feed — all through live API integration.`,
        features: [
            "User Authentication – Register, log in, and log out using the Tarmeez Academy API.",
            "Post Creation – Users can create and publish new posts instantly",
            "Post Details & Comments – View post details and read/write comments."
        ],
        color: "bg-cyan-800/40",
        githup: "https://github.com/al9wel/Tawasol",
        preview: "https://al9wel-6.netlify.app/",
        image: tawasol
    },
    {
        id: 5,
        title: "Prayer Times",
        tech: [
            <SiHtml5 key={2} size={30} />,
            <SiCss3 key={3} size={30} />,
            <SiJavascript key={1} size={30} />,
        ],
        description: `A simple and modern Prayer Times Web App that displays accurate daily prayer times for all Yemeni governorates using a public Prayer Times API.
The project focuses on simplicity, accuracy, and responsiveness — making it easy for users across Yemen to view local prayer times.`,
        features: [
            "Accurate Prayer Times – Fetches real-time prayer timings via API for all Yemeni cities",
            "Governorate Selection – View times for Sana’a, Aden, Hadhramaut, Taiz, Ibb, and more.",
            " Automatic Update – Prayer times update daily from the API.",
        ],
        color: "bg-indigo-800/40",
        githup: "https://github.com/al9wel/Parayer-Times",
        preview: "https://al9wel-5.netlify.app/",
        image: prayer
    },
    {
        id: 6,
        title: "X-O Game",
        tech: [
            <SiHtml5 key={2} size={30} />,
            <SiCss3 key={3} size={30} />,
            <SiJavascript key={1} size={30} />,
        ],
        description: `A modern and fun Tic Tac Toe Game built with HTML, CSS, and JavaScript.
This project supports both Single Player (vs Computer) and Two Player modes, providing an enjoyable and responsive gaming experience right in your browser.`,
        features: [
            "Two Game Modes – Play solo against an AI or challenge a friend locally.",
            "Win Detection System – Automatically identifies winning combinations and draws.",
            "Game Reset – Restart quickly with a single click.",
        ],
        color: "bg-pink-800/40",
        githup: "https://github.com/al9wel/TIC-TAC-TOE",
        preview: "https://al9wel-4.netlify.app/",
        image: xo
    },
    {
        id: 7,
        title: "Skills Landing Page",
        tech: [
            <SiHtml5 key={2} size={30} />,
            <SiCss3 key={3} size={30} />,
        ],
        description: `A clean and responsive landing page built using HTML and CSS to demonstrate front-end design and layout skills.
This project focuses on creating a modern, visually appealing webpage that adapts to different screen sizes and highlights the power of CSS styling.`,
        features: [
            "Modern UI Design – Smooth, clean, and minimal interface.",
            "Responsive Layout – Works seamlessly on desktop, tablet, and mobile",
            "CSS Effects – Includes hover animations, transitions, and gradients.",
        ],
        color: "bg-purple-800/40",
        githup: "https://github.com/al9wel/Skills",
        preview: "https://al9wel-1.netlify.app/",
        image: skills
    },


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
                {projects.map((project) => (<ProjectCard key={project.id} {...project} />))}
            </div>
        </section >
    )
}

export default Projects
