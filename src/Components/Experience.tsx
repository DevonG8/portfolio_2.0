import { Card, Tabs, Avatar, Typography, ScrollShadow } from "@heroui/react";

export default function Experience() {
    return (
        <Card className="w-1/2 flex flex-col md:flex-row items-stretch overflow-hidden border border-border shadow-sm min-h-97.5">
            <div className="">
                <Card.Header className="p-0 mb-4">
                    <Tabs
                        variant="primary"
                        defaultSelectedKey="Experience"
                        className="w-full max-w-md flex flex-col flex-1">
                        <Tabs.ListContainer>
                            <Tabs.List aria-label="Navigation Options">
                                <Tabs.Tab
                                    id="Experience"
                                    className="data-[selected=true]:text-green-950">
                                    Experience
                                    <Tabs.Indicator className="bg-emerald-500" />
                                </Tabs.Tab>
                                <Tabs.Tab
                                    id="Education"
                                    className="data-[selected=true]:text-green-950">
                                    Education
                                    <Tabs.Indicator className="bg-emerald-500" />
                                </Tabs.Tab>
                                <Tabs.Tab
                                    id="Extracurriculars"
                                    className="data-[selected=true]:text-green-950">
                                    Extracurriculars
                                    <Tabs.Indicator className="bg-emerald-500" />
                                </Tabs.Tab>
                            </Tabs.List>
                        </Tabs.ListContainer>

                        <Tabs.Panel
                            className="pt-4 text-emerald-500 flex flex-col gap-4 flex-1"
                            id="Experience">
                            <Avatar size="md">
                                <Avatar.Image
                                    src="/sccu-logo.png"
                                    alt="SCCU Logo"
                                />
                                <Avatar.Fallback>SCSU</Avatar.Fallback>
                            </Avatar>
                            <Typography
                                type="h3"
                                className="text-emerald-500">
                                Southern connecticut State University, IT
                                Technician
                            </Typography>
                            <Typography
                                type="body-sm"
                                className="text-emerald-500">
                                01/2023 – present | New Haven, CT
                            </Typography>
                            <Typography
                                type="body"
                                className="text-emerald-500">
                                <ScrollShadow>
                                    Administered and maintained critical
                                    enterprise resources (including Azure
                                    services) supporting 5,000+ university
                                    faculty/ staff, ensuring high availability
                                    and system stability. Enhanced system
                                    security through the configuration of Active
                                    Directory (AD) and the application of
                                    Role-Based Access Control policies across
                                    multiple enterprise environments. Acted as a
                                    Tier-2 technical expert, resolving 80+
                                    weekly tickets involving advanced
                                    diagnostics for network, hardware, and core
                                    operating systems.
                                </ScrollShadow>
                            </Typography>
                        </Tabs.Panel>

                        <Tabs.Panel
                            className="pt-4 text-emerald-500 flex-1"
                            id="Education">
                            <div className="flex flex-row gap-4">
                                <Avatar size="md">
                                    <Avatar.Image
                                        src="/sccu-logo.png"
                                        alt="SCCU Logo"
                                    />
                                    <Avatar.Fallback>SCCU</Avatar.Fallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <Typography type="h4">
                                        Southern Connecticut State University –
                                        B.S Computer Science
                                    </Typography>
                                    <Typography type="body-sm">
                                        expected 12/2026 | New Haven, CT
                                    </Typography>
                                </div>
                            </div>
                        </Tabs.Panel>

                        <Tabs.Panel
                            className="pt-4 text-emerald-500 flex-1"
                            id="Extracurriculars">
                            <div className="flex flex-row gap-4">
                                <Avatar size="md">
                                    <Avatar.Image
                                        src="/sccu-logo.png"
                                        alt="SCCU Logo"
                                    />
                                    <Avatar.Fallback>SCCU</Avatar.Fallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <Typography type="h4">
                                        Computer Science Club, Board Member
                                    </Typography>
                                    <Typography type="body-sm">
                                        August 2022 - June 2024
                                    </Typography>
                                    <Typography type="body-sm">
                                        New Haven, CT
                                    </Typography>
                                </div>
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </Card.Header>
                <Card.Footer className="mt-auto p-0 pt-6" />
            </div>
        </Card>
    );
}
