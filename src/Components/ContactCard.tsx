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
                {/* Image */}

                <div className="flex flec-row">
                    {/* Information */}
                    <Typography.Heading> Devon Gay </Typography.Heading>
                    <Typography.Paragraph>
                        {" "}
                        Software Developer & IT Professional{" "}
                    </Typography.Paragraph>
                </div>
            </Card.Content>
        </Card>
    );
}
