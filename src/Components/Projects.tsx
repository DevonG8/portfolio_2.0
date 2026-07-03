import { Card, Typography, Button } from "@heroui/react";

export default function Projects() {
    const handleLink = (url: string) => {
        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <Card
            variant="transparent"
            className="w-full max-w flex flex-col items-stretch overflow-hidden border border-border shadow-sm min-h-97.5">
            <Card.Header className="p-4 mb-4 flex justify-center w-full">
                <Typography
                    type="h1"
                    className="text-center">
                    Projects
                </Typography>
            </Card.Header>
            <Card.Content className="mt-auto p-0 pt-6 flex flex-col gap-10">
                {/* WKD */}
                <Card
                    variant="transparent"
                    className="flex flex-row gap-4 items-stretch w-full">
                    {/* Left */}
                    <div
                        className="relative group w-200 h-90 shrink-0 overflow-visible rounded-lg perspective-[1000px]
                    origin-left transition-all duration-700 ease-out scale-[0.92] group-hover:scale-100">
                        <div
                            className="w-full h-full origin-left transition-all duration-700 ease-out 
                        transform-[rotateY(35deg)] group-hover:transform-[rotateY(0deg)]">
                            <img
                                src="Screenshot.png"
                                alt="Project screenshot"
                                className="w-full h-full object-cover rounded-lg shadow-xl"
                            />
                            <div
                                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                                <Button
                                    size="sm"
                                    onPress={() =>
                                        handleLink("https://You-Kan-Do-It.com")
                                    }>
                                    Live Site
                                </Button>
                                <Button
                                    size="sm"
                                    variant="secondary"
                                    onPress={() =>
                                        handleLink(
                                            "https://github.com/DevonG8/WeKanDoIt",
                                        )
                                    }>
                                    GitHub
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Project info */}
                    <div className="flex flex-col justify-right pr-20">
                        <Card.Header>
                            <Card.Title>
                                <Typography
                                    type="h3"
                                    className="text-center">
                                    We Kan Do It
                                </Typography>
                            </Card.Title>
                            <Card.Description>
                                <Typography
                                    type="h3"
                                    color="muted"
                                    className="text-center mt-5">
                                    React, TypeScript, Supabase WeKanDoIt is a
                                    Kanban-style task and calendar app for
                                    households and dorms, built with React,
                                    TypeScript, and Supabase. I handled backend
                                    and server integration as part of the
                                    original team, then independently rebuilt
                                    the frontend and migrated the app to
                                    TypeScript after the course ended.
                                    <br />
                                    Live at you-kan-do-it.com.
                                </Typography>
                            </Card.Description>
                        </Card.Header>
                        <Card.Footer className="mt-auto p-4 flex justify-center w-full">
                            <Button
                                size="md"
                                onPress={() =>
                                    window.open(
                                        "./ProjectInDepth/WKD.tsx",
                                        "_self",
                                        "noopener,noreferrer",
                                    )
                                }>
                                Learn More
                            </Button>
                        </Card.Footer>
                    </div>
                </Card>
                {/* Owl Diary */}
                <Card
                    variant="transparent"
                    className="flex flex-row gap-4 items-stretch">
                    {/* Left: Image */}
                    <div
                        className="relative group w-200 h-90 shrink-0 overflow-visible rounded-lg perspective-[1000px]
                    origin-left transition-all duration-700 ease-out scale-[0.92] group-hover:scale-100">
                        <div
                            className="w-full h-full origin-left transition-all duration-700 ease-out 
                        transform-[rotateY(35deg)] group-hover:transform-[rotateY(0deg)]">
                            <img
                                src="OwlDiary.png"
                                alt="Project screenshot"
                                className="w-full h-full object-cover rounded-lg shadow-xl"
                            />
                            <div
                                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                                <Button
                                    size="sm"
                                    isDisabled>
                                    Live Site
                                </Button>
                                <Button
                                    size="sm"
                                    variant="secondary"
                                    onPress={() =>
                                        handleLink(
                                            "https://github.com/DevonG8/Owl_Diary",
                                        )
                                    }>
                                    GitHub
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Project info */}
                    <div className="flex flex-col justify-right">
                        <Card.Header>
                            <Typography
                                type="h3"
                                className="text-center">
                                Owl Diary
                            </Typography>
                            <Card.Description>
                                <Typography
                                    type="h3"
                                    color="muted"
                                    className="text-center mt-5">
                                    A private journaling platform built for a
                                    Women's & Gender Studies course at SCSU,
                                    replacing individual Wix sites with a
                                    unified space for students to write and
                                    reflect together. As backend lead, I handled
                                    server integration and data security while
                                    working within real university
                                    infrastructure and real student needs — not
                                    just a portfolio exercise, but software
                                    built for an actual class in production.
                                </Typography>
                            </Card.Description>
                        </Card.Header>
                        <Card.Footer className="mt-auto p-4 flex justify-center w-full">
                            <Button
                                size="md"
                                onPress={() =>
                                    window.open(
                                        "./ProjectInDepth/WKD.tsx",
                                        "_self",
                                        "noopener,noreferrer",
                                    )
                                }>
                                Learn More
                            </Button>
                        </Card.Footer>
                    </div>
                </Card>
            </Card.Content>
        </Card>
    );
}
