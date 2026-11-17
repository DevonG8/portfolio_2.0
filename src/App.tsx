import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ContactCard from "./Components/ContactCard";
import WKD from "./Components/ProjectInDepth/WKD";

function Home() {
    return (
        <div className="min-h-dvh transition-colors duration-300 antialiased text-foreground bg-grid">
            <div
                id="home"
                className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/40 border-b border-border/20">
                <NavBar />
            </div>
            <div
                id="about"
                className="flex w-full h-150 flex-col items-center justify-center gap-4 p-10 scroll-mt-20">
                <AboutMe />
            </div>
            <div
                id="experience"
                className="flex w-full h-150 flex-col items-center justify-center gap-4 p-10 scroll-mt-20">
                <Experience />
            </div>
            <div
                id="projects"
                className="flex w-full flex-col items-center justify-center gap-4 p-10 scroll-mt-20">
                <Projects />
            </div>
            <div
                id="skills"
                className="flex w-full flex-col items-center justify-center gap-4 p-10 scroll-mt-20">
                <Skills />
            </div>
            <div
                id="contact"
                className="flex w-full flex-col items-center justify-center gap-4 p-10 scroll-mt-20">
                <ContactCard />
            </div>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/projects/wkd"
                element={<WKD />}
            />
        </Routes>
    );
}
