import { Card, Typography } from "@heroui/react";

export default function WKD() {
    return (
        <Card
            variant="transparent"
            className="w-full max-w flex flex-col items-stretch overflow-hidden border border-border shadow-sm min-h-97.5">
            <Card.Header className="p-4 mb-4 flex justify-center w-full">
                <Typography
                    type="h1"
                    className="text-center">
                    WKD
                </Typography>
            </Card.Header>
            <Card.Content className="mt-auto p-0 pt-6"></Card.Content>
        </Card>
    );
}
