import { Card, Typography, Avatar, Button } from "@heroui/react";

export default function ContactCard() {
    const handleEmail = () => {
        window.location.href = "mailto:devongay132@gmail.com";
    };

    const handleLink = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Card className="w-full max-w-6xl flex flex-col items-center p-8 border border-border shadow-sm">
            {/* My Image */}
            <div className="mb-6 relative">
                <Avatar
                    size="lg"
                    className="w-32 h-32 border-4 border-emerald-500/20 shadow-md">
                    <Avatar.Image
                        src="MyPic.jpeg"
                        alt="Devon Gay"
                        className="object-cover"
                    />
                    <Avatar.Fallback className="text-2xl font-bold bg-emerald-500/10 text-emerald-500">
                        DG
                    </Avatar.Fallback>
                </Avatar>
            </div>

            {/* Name */}
            <Typography
                type="h2"
                className="text-3xl font-black tracking-tight mb-1 text-center">
                Devon Gay
            </Typography>

            {/* Subtitle */}
            <Typography
                type="body"
                className="text-muted-foreground font-medium mb-8 text-center">
                Software Developer & IT Professional
            </Typography>

            {/* Email and Socials */}
            <div className="flex flex-col items-center gap-4 ">
                <Button
                    variant="primary"
                    className="w-full font-bold shadow-sm"
                    onPress={handleEmail}>
                    devongay132@gmail.com
                </Button>

                <div className="flex gap-4 justify-center">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="font-semibold"
                        onPress={() =>
                            handleLink("https://github.com/DevonG8")
                        }>
                        GitHub
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="font-semibold"
                        onPress={() =>
                            handleLink(
                                "https://www.linkedin.com/in/devon-gay-4b104a233/",
                            )
                        }>
                        LinkedIn
                    </Button>
                </div>
            </div>
        </Card>
    );
}
