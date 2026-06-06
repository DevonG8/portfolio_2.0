import { Card, Tabs, Avatar, Typography, ScrollShadow } from "@heroui/react";

export default function Experience() {
    return (
        <Card className="w-full max-w-4xl flex flex-col items-stretch overflow-hidden border border-border shadow-sm min-h-97.5">
            <Card.Header className="p-4 mb-4 flex justify-center w-full">
                {/* Headings */}
                <Tabs
                    variant="primary"
                    defaultSelectedKey="Experience"
                    className="w-full flex flex-col flex-1">
                    <Tabs.ListContainer className="justify-center">
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

                    {/* Experience */}
                    {/* Southern IT */}
                    <Tabs.Panel
                        className="pt-4 text-emerald-500 flex flex-col gap-4 flex-1 w-full"
                        id="Experience">
                        <div className="flex flex-col items-center text-center">
                            <Avatar
                                size="md"
                                className="mb-2">
                                <Avatar.Image
                                    src="/SCSU.jpeg"
                                    alt="SCSU Logo"
                                />
                                <Avatar.Fallback>SCSU</Avatar.Fallback>
                            </Avatar>
                            <Typography
                                type="h3"
                                className="text-emerald-500">
                                Southern Connecticut State University, IT
                                Technician
                            </Typography>
                            <Typography
                                type="body-sm"
                                className="text-emerald-500">
                                01/2023 – present | New Haven, CT
                            </Typography>
                            <div className="mt-2 w-full">
                                <ScrollShadow className="max-h-40">
                                    <Typography
                                        type="body"
                                        className="text-emerald-500">
                                        Administered and maintained critical
                                        enterprise resources (including Azure
                                        services) supporting 5,000+ university
                                        faculty/ staff, ensuring high
                                        availability and system stability.
                                        Enhanced system security through the
                                        configuration of Active Directory (AD)
                                        and the application of Role-Based Access
                                        Control policies across multiple
                                        enterprise environments. Acted as a
                                        Tier-2 technical expert, resolving 80+
                                        weekly tickets involving advanced
                                        diagnostics for network, hardware, and
                                        core operating systems.
                                    </Typography>
                                </ScrollShadow>
                            </div>
                        </div>
                    </Tabs.Panel>

                    {/* Schooling information */}
                    <Tabs.Panel
                        className="pt-4 text-emerald-500 flex-1 w-full"
                        id="Education">
                        <div className="flex flex-col gap-6">
                            {/* Highschool */}
                            <div className="flex flex-col items-center text-center gap-2">
                                <Avatar
                                    size="md"
                                    className="mb-2">
                                    <Avatar.Image
                                        src="/Ehhs.png"
                                        alt="Ehhs Logo"
                                    />

                                    <Avatar.Fallback>
                                        East Hartford Highschool
                                    </Avatar.Fallback>
                                </Avatar>
                                <div className="flex flex-col gap-1">
                                    <Typography type="h4">
                                        East Hartford High School
                                    </Typography>

                                    <Typography type="body-sm">
                                        Graduated 05/2021 | East Hartford, CT
                                    </Typography>
                                </div>
                            </div>

                            <div className="border-t border-border mx-auto w-1/2"></div>

                            {/* College */}
                            <div className="flex flex-col items-center text-center gap-2">
                                <Avatar
                                    size="md"
                                    className="mb-2">
                                    <Avatar.Image
                                        src="/SCSU.jpeg"
                                        alt="SCSU Logo"
                                    />
                                    <Avatar.Fallback>SCSU</Avatar.Fallback>
                                </Avatar>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <Typography type="h4">
                                        Southern Connecticut State University
                                    </Typography>
                                    <Typography type="h4">
                                        B.S Computer Science
                                    </Typography>
                                    <Typography type="body-sm">
                                        expected 12/2026 | New Haven, CT
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Tabs.Panel>

                    {/* Extracurricular Activities */}
                    <Tabs.Panel
                        className="pt-4 text-emerald-500 flex-1 w-full"
                        id="Extracurriculars">
                        {/* Comp Sci E-board */}
                        <div className="flex flex-col items-center text-center gap-4">
                            <Avatar size="md">
                                <Avatar.Image
                                    src="/SCSU.jpeg"
                                    alt="SCSU Logo"
                                />
                                <Avatar.Fallback>SCSU</Avatar.Fallback>
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
        </Card>
    );
}
