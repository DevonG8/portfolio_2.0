import { Tabs } from "@heroui/react";

export default function NavBar() {
    return (
        <div className="flex w-full flex-col p-4 items-center justify-center">
            <Tabs
                variant="primary"
                defaultSelectedKey="home"
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
        </div>
    );
}
