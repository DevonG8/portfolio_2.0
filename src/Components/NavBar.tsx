import { useState, useEffect } from "react";
import { Tabs, Switch } from "@heroui/react";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";

const sections = [
    { id: "about", label: "About", color: "bg-emerald-500" },
    { id: "experience", label: "Experience", color: "bg-emerald-400" },
    { id: "projects", label: "Projects", color: "bg-emerald-300" },
    { id: "contact", label: "Contact", color: "bg-green-300" },
];

// Space to leave above a section when scrolling to it.
const SCROLL_OFFSET = 120;

export default function NavBar() {
    const [isLightMode, setIsLightMode] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState("home");

    // Theme switching
    useEffect(() => {
        document.documentElement.classList.toggle("dark", !isLightMode);
    }, [isLightMode]);

    // Update the selected tab as the page scrolls.
    useEffect(() => {
        let frameId: number | null = null;

        const updateActiveSection = () => {
            const pageSections = sections
                .map((section) => ({
                    id: section.id,
                    element: document.getElementById(section.id),
                }))
                .filter(
                    (
                        section,
                    ): section is {
                        id: string;
                        element: HTMLElement;
                    } => section.element !== null,
                );

            if (pageSections.length === 0) return;

            let currentSection = pageSections[0].id;

            // Select the last section that has reached the navbar area.
            for (const section of pageSections) {
                if (
                    section.element.getBoundingClientRect().top <=
                    SCROLL_OFFSET + 1
                ) {
                    currentSection = section.id;
                }
            }

            // Allow the final section to activate.
            const pageHeight = document.documentElement.scrollHeight;
            const canScroll = pageHeight > window.innerHeight + 1;
            const isAtBottom =
                window.scrollY + window.innerHeight >= pageHeight - 2;

            if (canScroll && isAtBottom) {
                currentSection = pageSections[pageSections.length - 1].id;
            }

            setActiveSection(currentSection);
        };

        const scheduleUpdate = () => {
            if (frameId !== null) return;

            frameId = window.requestAnimationFrame(() => {
                frameId = null;
                updateActiveSection();
            });
        };

        updateActiveSection();

        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);

            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }
        };
    }, []);

    // Clicking a tab scrolls to its section.
    const handleSelectionChange = (key: string | number) => {
        const sectionId = key.toString().replace(/^nav-/, "");
        const element = document.getElementById(sectionId);

        if (!element) return;

        const targetPosition =
            element.getBoundingClientRect().top +
            window.scrollY -
            SCROLL_OFFSET;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: prefersReducedMotion ? "instant" : "smooth",
        });
    };

    return (
        <div
            className="
                relative mx-auto flex w-full max-w-6xl
                flex-col items-center justify-center
                gap-4 p-4 md:flex-row
            ">
            <Tabs
                variant="primary"
                selectedKey={`nav-${activeSection}`}
                onSelectionChange={handleSelectionChange}
                className="w-full max-w-md">
                <Tabs.ListContainer>
                    <Tabs.List aria-label="Navigation Options">
                        {sections.map((section) => (
                            <Tabs.Tab
                                key={section.id}
                                id={`nav-${section.id}`}
                                className="data-[selected=true]:text-green-950">
                                {section.label}
                                <Tabs.Indicator className={section.color} />
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>
                </Tabs.ListContainer>
            </Tabs>

            <div className="flex items-center md:absolute md:right-8">
                <Switch
                    isSelected={isLightMode}
                    onChange={setIsLightMode}
                    aria-label="Toggle theme">
                    <Switch.Content className="m-0 flex items-center p-0">
                        <Switch.Control>
                            <Switch.Thumb>
                                {isLightMode ? (
                                    <FiSun className="size-4 fill-amber-500 text-amber-500" />
                                ) : (
                                    <IoMdMoon className="size-4 fill-indigo-400 text-indigo-400" />
                                )}
                            </Switch.Thumb>
                        </Switch.Control>
                    </Switch.Content>
                </Switch>
            </div>
        </div>
    );
}
