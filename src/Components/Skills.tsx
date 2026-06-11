import { Card, Typography } from "@heroui/react";

export default function Skills() {
    return (
        <Card className="w-full max-w flex flex-col items-stretch overflow-hidden border border-border shadow-sm min-h-97.5">
            <Card.Header className="p-4 mb-4 flex justify-center w-full">
                <Typography
                    type="h1"
                    className="text-center">
                    Skills
                </Typography>
            </Card.Header>
            <Card.Content className="mt-auto p-0 pt-6 flex flex-row  gap-6">
                {/* Tools */}
                <Card className="flex flex-row gap-4 items-stretch">
                    {/* Left: Image */}
                    <div className="relative group w-250 shrink-0 overflow-hidden rounded-lg ">
                        <Typography.Paragraph className="text-emerald-500">
                            {" "}
                            Frontend Development
                        </Typography.Paragraph>
                    </div>
                </Card>
                {/* Description */}
                <Card className="flex flex-row gap-4 items-stretch">
                    {/* Left: Image */}
                    <div className="relative group w-250 shrink-0 overflow-hidden rounded-lg ">
                        <Typography.Paragraph className="text-emerald-500">
                            {" "}
                            Frontend Development
                        </Typography.Paragraph>
                    </div>
                </Card>
            </Card.Content>
        </Card>
    );
}
