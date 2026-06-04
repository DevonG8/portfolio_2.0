import { Card, Tabs } from "@heroui/react";

export default function Experience() {
    return (
        <Card className="max-w-4xl mx-auto flex-col md:flex-row items-stretch overflow-hidden border border-border shadow-sm">
            <div className="flex flex-1 flex-col p-6">
                <Card.Header className="p-0 mb-4 items-start">
                    <Tabs
                        variant="primary"
                        defaultSelectedKey="Experience"
                        className="w-full max-w-md">
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
                            className="pt-4"
                            id="Experience">
                            <p>
                                View your project overview and recent activity.
                            </p>
                        </Tabs.Panel>
                        <Tabs.Panel
                            className="pt-4"
                            id="Education">
                            <p>
                                View your educational background and
                                qualifications.
                            </p>
                        </Tabs.Panel>
                        <Tabs.Panel
                            className="pt-4"
                            id="Extracurriculars">
                            <p>
                                View your extracurricular activities and
                                achievements.
                            </p>
                        </Tabs.Panel>
                    </Tabs>
                </Card.Header>
                <Card.Footer className="mt-auto p-0 pt-6" />
            </div>
        </Card>
    );
}
