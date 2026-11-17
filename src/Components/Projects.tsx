import { useState } from "react";
import { Card, Typography, Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

type ProjectPreviewProps = {
    title: string;
    images: string[];
    liveUrl?: string;
    githubUrl: string;
};

function ProjectPreview({
    title,
    images,
    liveUrl,
    githubUrl,
}: ProjectPreviewProps) {
    const [currentImage, setCurrentImage] = useState(0);

    const changeImage = (direction: number) => {
        setCurrentImage(
            (current) => (current + direction + images.length) % images.length,
        );
    };

    const openLink = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div
            tabIndex={0}
            role="region"
            aria-label={`${title} screenshots`}
            className="
                group relative isolate w-full min-w-0
                rounded-2xl outline-none
                focus-visible:ring-2 focus-visible:ring-fuchsia-500
            "
            onKeyDown={(event) => {
                if (event.target !== event.currentTarget) return;

                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    changeImage(-1);
                }

                if (event.key === "ArrowRight") {
                    event.preventDefault();
                    changeImage(1);
                }
            }}>
            {/*
                add decorative designs
            */}

            <div
                className="
                    relative w-full origin-center
                    transition-transform duration-500 ease-out
                    lg:scale-[0.64]
                    lg:group-hover:scale-100
                    lg:group-focus-within:scale-100
                    motion-reduce:transition-none
                ">
                <div
                    className="
                        relative overflow-hidden rounded-xl
                        border border-white/15 bg-black/30 shadow-xl
                    ">
                    <div className="aspect-16/10">
                        <img
                            src={images[currentImage]}
                            alt={`${title} screenshot ${currentImage + 1}`}
                            className="h-full w-full object-contain"
                            loading="lazy"
                        />
                    </div>

                    {images.length > 1 && (
                        <div
                            className="
                                visible opacity-100
                                transition-opacity duration-300
                                lg:invisible lg:opacity-0
                                lg:group-hover:visible
                                lg:group-hover:opacity-100
                                lg:group-focus-within:visible
                                lg:group-focus-within:opacity-100
                            ">
                            <button
                                type="button"
                                aria-label={`Previous ${title} screenshot`}
                                onClick={() => changeImage(-1)}
                                className="
                                    absolute left-3 top-1/2
                                    flex h-10 w-10 -translate-y-1/2
                                    items-center justify-center
                                    rounded-full bg-black/75
                                    text-2xl text-white
                                    transition-colors hover:bg-fuchsia-600
                                    focus-visible:outline-2
                                    focus-visible:outline-fuchsia-400
                                ">
                                ‹
                            </button>

                            <button
                                type="button"
                                aria-label={`Next ${title} screenshot`}
                                onClick={() => changeImage(1)}
                                className="
                                    absolute right-3 top-1/2
                                    flex h-10 w-10 -translate-y-1/2
                                    items-center justify-center
                                    rounded-full bg-black/75
                                    text-2xl text-white
                                    transition-colors hover:bg-fuchsia-600
                                    focus-visible:outline-2
                                    focus-visible:outline-fuchsia-400
                                ">
                                ›
                            </button>

                            <div
                                className="
                                    absolute bottom-3 left-1/2
                                    flex -translate-x-1/2 items-center gap-2
                                    rounded-full bg-black/65 px-3 py-2
                                ">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        aria-label={`Show screenshot ${index + 1}`}
                                        aria-pressed={currentImage === index}
                                        onClick={() => setCurrentImage(index)}
                                        className={`
                                            h-2.5 w-2.5 rounded-full
                                            transition-colors
                                            focus-visible:outline-2
                                            focus-visible:outline-white
                                            ${
                                                currentImage === index
                                                    ? "bg-fuchsia-500"
                                                    : "bg-white/45 hover:bg-white"
                                            }
                                        `}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className="
                        visible mt-4 flex justify-center gap-3
                        opacity-100 transition-opacity duration-300
                        lg:invisible lg:opacity-0
                        lg:group-hover:visible
                        lg:group-hover:opacity-100
                        lg:group-focus-within:visible
                        lg:group-focus-within:opacity-100
                    ">
                    <Button
                        size="sm"
                        isDisabled={!liveUrl}
                        onPress={() => {
                            if (liveUrl) openLink(liveUrl);
                        }}>
                        Live Site
                    </Button>

                    <Button
                        size="sm"
                        variant="secondary"
                        onPress={() => openLink(githubUrl)}>
                        GitHub
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const navigate = useNavigate();

    return (
        <Card
            variant="transparent"
            className="
                flex min-h-97.5 w-full flex-col items-stretch
                overflow-hidden border border-border shadow-sm
            ">
            <Card.Header className="mb-4 flex w-full justify-center p-4">
                <Typography
                    type="h1"
                    className="text-center">
                    Projects
                </Typography>
            </Card.Header>

            <Card.Content className="flex flex-col gap-12 p-4 pt-6 lg:p-6">
                {/* Denzy App */}
                <Card
                    variant="transparent"
                    className="
                        flex w-full flex-col items-stretch gap-6
                        lg:flex-row lg:items-center
                    ">
                    <div className="w-full min-w-0 lg:w-[44%] lg:shrink-0">
                        <ProjectPreview
                            title="Denzy App"
                            images={[
                                "/Denzy_img.png",
                                "/Denzy_img2.png",
                                "/Denzy_img3.png",
                                "/Denzy_img4.png",
                            ]}
                            liveUrl="https://Denzy.app"
                            githubUrl="https://github.com/DevonG8/DENZY_Web"
                        />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col px-4 lg:px-6">
                        <Card.Header>
                            <Card.Title>
                                <Typography
                                    type="h3"
                                    className="text-center">
                                    Denzy
                                </Typography>
                            </Card.Title>

                            <Card.Description>
                                <Typography
                                    type="h3"
                                    color="muted"
                                    className="mt-5 text-center">
                                    Denzy is a companion website for an iOS
                                    social discovery app that connects people
                                    attending the same live event. Built with
                                    React, TypeScript, and Tailwind CSS, the
                                    site features responsive layouts, light and
                                    dark themes, animated transitions, and
                                    Supabase-powered account registration and
                                    login. It showcases the app’s experience and
                                    safety features while giving visitors access
                                    to platform policies and community
                                    guidelines.
                                </Typography>
                            </Card.Description>
                        </Card.Header>

                        <Card.Footer className="mt-auto flex w-full justify-center p-4">
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
                {/* We Kan Do It */}
                <Card
                    variant="transparent"
                    className="
                        flex w-full flex-col items-stretch gap-6
                        lg:flex-row lg:items-center
                    ">
                    <div className="w-full min-w-0 lg:w-[44%] lg:shrink-0">
                        <ProjectPreview
                            title="We Kan Do It"
                            images={[
                                "/WKD_img5.png",
                                "/WKD_img2.png",
                                "/WKD_im3.png",
                                "/WKD_img4.png",
                            ]}
                            liveUrl="https://You-Kan-Do-It.com"
                            githubUrl="https://github.com/DevonG8/WeKanDoIt"
                        />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col px-4 lg:px-6">
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
                                    className="mt-5 text-center">
                                    WeKanDoIt is a Kanban-style task and
                                    calendar app for households and dorms, built
                                    with React, TypeScript, and Supabase. I
                                    handled backend and server integration as
                                    part of the original team, then
                                    independently rebuilt the frontend and
                                    migrated the app to TypeScript after the
                                    course ended.
                                    <br />
                                    Live at you-kan-do-it.com.
                                </Typography>
                            </Card.Description>
                        </Card.Header>

                        <Card.Footer className="mt-auto flex w-full justify-center p-4">
                            <Button
                                size="md"
                                onPress={() => navigate("/projects/wkd")}>
                                Learn More
                            </Button>
                        </Card.Footer>
                    </div>
                </Card>

                {/* Owl Diary */}
                <Card
                    variant="transparent"
                    className="
                        flex w-full flex-col items-stretch gap-6
                        lg:flex-row lg:items-center
                    ">
                    <div className="w-full min-w-0 lg:w-[44%] lg:shrink-0">
                        <ProjectPreview
                            title="Owl Diary"
                            images={[
                                "/OwlDiary.png",
                                "/Owl_Diary_IMG2.png",
                                "/OwlDiary_img3.png",
                                "/OwlDiary_img4.png",
                            ]}
                            githubUrl="https://github.com/DevonG8/Owl_Diary"
                        />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col px-4 lg:px-6">
                        <Card.Header>
                            <Card.Title>
                                <Typography
                                    type="h3"
                                    className="text-center">
                                    Owl Diary
                                </Typography>
                            </Card.Title>

                            <Card.Description>
                                <Typography
                                    type="h3"
                                    color="muted"
                                    className="mt-5 text-center">
                                    A private journaling platform built for a
                                    Women's &amp; Gender Studies course at SCSU,
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

                        <Card.Footer className="mt-auto flex w-full justify-center p-4">
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
