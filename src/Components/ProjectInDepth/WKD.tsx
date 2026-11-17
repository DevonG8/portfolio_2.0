import { Card, Typography } from "@heroui/react";

export default function WKD() {
    return (
        <Card
            variant="transparent"
            className="w-full max-w flex flex-col items-stretch overflow-hidden border border-border shadow-sm min-h-97.5 p-5">
            <Card.Header className="p-4 mb-4 flex justify-center w-full">
                <Typography
                    type="h1"
                    className="text-center">
                    WKD - We Kan Do It
                </Typography>
            </Card.Header>
            <Card.Content className="mt-auto p-0 pt-6">
                {/* Image */}
                <Card>
                    <Card.Content className="p-4">
                        <div>
                            <img
                                src="Screenshot.png"
                                alt="Project screenshot"
                                className="w-full h-full rounded-lg shadow-xl"
                            />
                        </div>
                    </Card.Content>
                </Card>
                {/* Description */}
                <Card>
                    <Card.Content className="p-4">
                        <Typography>
                            WKD is a project that aims to provide a simple
                            solution for managing tasks and projects.
                        </Typography>
                    </Card.Content>
                </Card>
                {/* Technologies Used */}
                <Card>
                    <Card.Content className="p-4">
                        <Typography>
                            Technologies Used: React, TypeScript, Tailwind CSS
                        </Typography>
                    </Card.Content>
                </Card>
                {/* Links & further info */}
                <Card>
                    <Card.Content className="p-4">
                        <Typography>
                            Links: [GitHub](https://github.com/wkd) | [Live
                            Demo](https://wkd.vercel.app)
                        </Typography>
                    </Card.Content>
                </Card>
            </Card.Content>
        </Card>
    );
}
