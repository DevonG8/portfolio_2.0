import { useState, useEffect } from "react";
import { Tabs, Switch } from "@heroui/react";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";

export default function NavBar() {
    // false = dark mode (Moon on left), true = light mode (Sun on right)
    const [isLightMode, setIsLightMode] = useState<boolean>(false);

    useEffect(() => {
        if (isLightMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    }, [isLightMode]);

    const handleSelectionChange = (key: string | number) => {
        const id = key.toString();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center p-4 gap-4 max-w-6xl mx-auto">
            {/* Nav tabs */}
            <Tabs
                variant="primary"
                defaultSelectedKey="home"
                onSelectionChange={handleSelectionChange}
                className="w-full max-w-md ">
                <Tabs.ListContainer>
                    <Tabs.List aria-label="Navigation Options">
                        {/* Dark mode color */}
                        <Tabs.Tab
                            id="home"
                            className="data-[selected=true]:text-green-950">
                            Home
                            <Tabs.Indicator className="bg-emerald-600" />
                        </Tabs.Tab>

                        <Tabs.Tab
                            id="about"
                            className="data-[selected=true]:text-green-950">
                            About
                            <Tabs.Indicator className="bg-emerald-500" />
                        </Tabs.Tab>

                        <Tabs.Tab
                            id="experience"
                            className="data-[selected=true]:text-green-950">
                            Experience
                            <Tabs.Indicator className="bg-emerald-400" />
                        </Tabs.Tab>

                        <Tabs.Tab
                            id="projects"
                            className="data-[selected=true]:text-green-950">
                            Projects
                            <Tabs.Indicator className="bg-emerald-300" />
                        </Tabs.Tab>

                        {/* Light mode color */}
                        <Tabs.Tab
                            id="contact"
                            className="data-[selected=true]:text-green-950">
                            Contact
                            <Tabs.Indicator className="bg-green-300" />
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs.ListContainer>
            </Tabs>

            {/* light switch */}
            <div className="md:absolute md:right-8 flex items-center">
                <Switch
                    isSelected={isLightMode}
                    onChange={setIsLightMode}
                    aria-label="Toggle theme">
                    <Switch.Content className="m-0 p-0 flex items-center">
                        <Switch.Control>
                            <Switch.Thumb>
                                {isLightMode ? (
                                    <FiSun className="size-4 text-amber-500 fill-amber-500" />
                                ) : (
                                    <IoMdMoon className="size-4 text-indigo-400 fill-indigo-400" />
                                )}
                            </Switch.Thumb>
                        </Switch.Control>
                    </Switch.Content>
                </Switch>
            </div>
        </div>
    );
}
