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
            <Card.Content className="mt-auto p-0 pt-6">
                {/* WKD */}
                <Card
                    variant="transparent"
                    className="flex flex-row gap-4 items-stretch">
                    {/* Left: Image */}
                    <div className="relative group w-250 shrink-0 overflow-hidden rounded-lg">
                        <img
                            src="Screenshot.png"
                            alt="Project screenshot"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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

                    {/* Right: Project info */}
                    <div className="flex flex-col justify-right">
                        <Card.Header>
                            <Card.Title>Project Name</Card.Title>
                            <Card.Description>
                                Short description of what the project does and
                                the tech you used.
                            </Card.Description>
                        </Card.Header>
                    </div>
                </Card>
                {/* Owl Diary */}
                <Card
                    variant="transparent"
                    className="flex flex-row gap-4 items-stretch">
                    {/* Left: Image */}
                    <div className="relative group w-250 shrink-0 overflow-hidden rounded-lg">
                        <img
                            src="OwlDiary.png"
                            alt="Project screenshot"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <Button
                                size="sm"
                                // onPress={() => handleLink("")}
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

                    {/* Right: Project info */}
                    <div className="flex flex-col justify-right">
                        <Card.Header>
                            <Card.Title>Owl Diary</Card.Title>
                            <Card.Description>
                                Short description of what the project does and
                                the tech you used.
                            </Card.Description>
                        </Card.Header>
                    </div>
                </Card>
            </Card.Content>
        </Card>
    );
}
