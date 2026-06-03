import { Tabs } from "@heroui/react";

export default function NavBar() {
    return (
        <div className="flex w-full flex-col p-4 items-center justify-center">
            <Tabs
                variant="primary"
                defaultSelectedKey="home"
                className="w-full max-w-md">
                <Tabs.ListContainer>
                    <Tabs.List aria-label="Navigation Options">
                        {/* Removed 'title' prop—text goes directly inside the tags */}
                        <Tabs.Tab id="home">
                            Home
                            <Tabs.Indicator />
                        </Tabs.Tab>

                        <Tabs.Tab id="about">
                            About
                            <Tabs.Indicator />
                        </Tabs.Tab>

                        <Tabs.Tab id="experience">
                            Experience
                            <Tabs.Indicator />
                        </Tabs.Tab>

                        <Tabs.Tab id="projects">
                            Projects
                            <Tabs.Indicator />
                        </Tabs.Tab>

                        <Tabs.Tab id="contact">
                            Contact
                            <Tabs.Indicator />
                        </Tabs.Tab>
                    </Tabs.List>
                </Tabs.ListContainer>
            </Tabs>
        </div>
    );
}
