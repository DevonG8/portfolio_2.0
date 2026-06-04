import { Button, Card } from "@heroui/react";
import heroImage from "../assets/IMG_6626.jpeg";

export default function AboutMe() {
    return (
        <Card className="max-w-4xl mx-auto flex-col md:flex-row items-stretch overflow-hidden border border-border shadow-sm">
            {/* Image Section */}
            <div className="relative w-full md:w-48 lg:w-64 shrink-0 overflow-hidden aspect-square md:aspect-auto">
                <img
                    alt="Profile"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    src={heroImage}
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col p-6">
                <Card.Header className="p-0 mb-4 items-start">
                    <Card.Title className="text-3xl font-black tracking-tight mb-2">
                        About Me
                    </Card.Title>
                    <Card.Description className="text-base leading-relaxed text-muted-foreground font-medium">
                        CS major with hands-on enterprise IT experience (Azure,
                        infrastructure management) and full-stack development
                        skills. Strong background in backend design, cloud
                        infrastructure, and supporting high-availability
                        systems. Proficient in Node.js, React, and modern web
                        technologies. Track record of deploying production
                        applications and solving complex technical challenges.
                    </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto p-0 pt-6">
                    <Button 
                        variant="primary" 
                        className="font-bold px-8 shadow-sm"
                    >
                        Learn More
                    </Button>
                </Card.Footer>
            </div>
        </Card>
    );
}
