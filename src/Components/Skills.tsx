import { Card, Typography, Button } from "@heroui/react";

export default function Skills() {
    return (
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 items-stretch">
            {/* Left Card: Sq2uare Box (approx. 1/4) */}
            <Card className="md:basis-1/3 aspect-square p-6 flex flex-col justify-center border border-border shadow-sm shrink-0">
                <div className="space-y-4">
                    <Typography
                        type="h2"
                        className="font-bold text-center border-b border-border pb-2">
                        Tools
                    </Typography>
                    <div className="space-y-3">
                        <div>
                            <Typography
                                type="h5"
                                className="text-emerald-500 font-semibold text-sm">
                                Frontend
                            </Typography>
                            <Typography
                                type="body-sm"
                                className="text-muted-foreground leading-tight">
                                React, TypeScript, Tailwind
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                type="h5"
                                className="text-emerald-500 font-semibold text-sm">
                                Backend
                            </Typography>
                            <Typography
                                type="body-sm"
                                className="text-muted-foreground leading-tight">
                                Node.js, Express, Go
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                type="h5"
                                className="text-emerald-500 font-semibold text-sm">
                                Database
                            </Typography>
                            <Typography
                                type="body-sm"
                                className="text-muted-foreground leading-tight">
                                MySQL, PostgreSQL, MongoDB
                            </Typography>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Right Card: Rectangular Box (approx. 3/4) */}
            <Card className="flex-1 p-8 flex flex-col justify-center border border-border shadow-sm">
                <div className="flex flex-col gap-6">
                    <div>
                        <Typography
                            type="h2"
                            className="text-3xl font-black tracking-tight mb-4 text-emerald-500 text-center">
                            Skills & Expertise
                        </Typography>
                        <Typography
                            type="body"
                            className="text-lg leading-relaxed text-muted-foreground font-medium">
                            I specialize in building full-stack applications
                            with a focus on performance and user experience.
                            With a strong foundation in computer science and
                            hands-on experience in enterprise IT, I bring a
                            unique perspective to every project I work on. I am
                            passionate about solving complex problems and
                            constantly learning new technologies to stay at the
                            forefront of the industry.
                        </Typography>
                    </div>
                    <div>
                        <Button
                            variant="primary"
                            className="font-bold px-8 shadow-sm">
                            Learn More
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
