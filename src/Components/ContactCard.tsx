import { Card, Typography, Avatar, Button } from "@heroui/react";

export default function ContactCard() {
    const handleEmail = () => {
        window.location.href = "mailto:devongay132@gmail.com";
    };

    const handleLink = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Card className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 border border-border shadow-sm">
            {/* Left side: My Image */}
            <div className="shrink-0">
                <Avatar
                    size="lg"
                    className="w-44 h-44 border-4 border-emerald-500/20 shadow-md">
                    <Avatar.Image
                        src="MyPic.jpeg"
                        alt="Devon Gay"
                        className="object-cover"
                    />
                    <Avatar.Fallback className="text-3xl font-bold bg-emerald-500/10 text-emerald-500">
                        DG
                    </Avatar.Fallback>
                </Avatar>
            </div>

            {/* Right side: Writing and Action buttons */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full gap-2">
                {/* Name */}
                <Typography
                    type="h2"
                    className="text-4xl font-black tracking-tight text-emerald-500">
                    Devon Gay
                </Typography>

                {/* Subtitle */}
                <Typography
                    type="body"
                    className="text-muted-foreground font-medium text-lg mb-4">
                    Software Developer & IT Professional
                </Typography>

                {/* Email and Socials */}
                <div className="flex flex-col items-center md:items-start gap-4 w-full">
                    <Button
                        variant="primary"
                        size="md"
                        className="w-full font-bold shadow-sm"
                        onPress={handleEmail}>
                        devongay132@gmail.com
                    </Button>

                    <div className="flex gap-4 justify-center md:justify-start w-full">
                        <Button
                            variant="secondary"
                            size="md"
                            className="font-semibold flex-1"
                            onPress={() =>
                                handleLink("https://github.com/DevonG8")
                            }>
                            GitHub
                        </Button>
                        <Button
                            variant="secondary"
                            size="md"
                            className="font-semibold flex-1"
                            onPress={() =>
                                handleLink(
                                    "https://www.linkedin.com/in/devon-gay-4b104a233/",
                                )
                            }>
                            LinkedIn
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
