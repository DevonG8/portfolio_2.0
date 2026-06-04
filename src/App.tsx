import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";

export default function App() {
    return (
        <div
            className={`min-h-dvh transition-colors duration-300 antialiased  text-foreground"}`}>
            <div>
                <NavBar />
            </div>
            <div className="flex w-full h-150 flex-col items-center justify-center gap-4 p-10">
                <AboutMe />
            </div>
            <div className="flex w-full h-150 flex-col items-center justify-center gap-4 p-10">
                <Experience />
            </div>
        </div>
    );
}
