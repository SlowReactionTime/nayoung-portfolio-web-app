import type { FC, JSX } from "react";
import { Container, Title, SimpleGrid, Card, Image, Text, Group, Badge, Stack, Divider } from '@mantine/core';

export interface PortfolioPageData {
    title: string;
    images: string[];
    typeAndLength: string;
    programUsed: string;
    projectHighlight: string;
    projectDuration: string;
    description: string;
}

export interface PortfolioPageDataWrapper {
    data: PortfolioPageData;
}

export const PortfolioPage: FC<PortfolioPageDataWrapper> = ({ data }): JSX.Element => {
    const { title, images, typeAndLength, programUsed, projectHighlight, projectDuration, description } = data;

    return (
        <Container size="lg" py="xl">
            <Stack spacing="lg">
                <Group position="apart" align="flex-start">
                    <Title order={1}>{title}</Title>
                    <Group spacing="sm">
                        <Badge color="gray" variant="light" size="lg">
                            {typeAndLength || '—'}
                        </Badge>
                        <Badge color="blue" variant="light" size="lg">
                            {projectDuration || '—'}
                        </Badge>
                    </Group>
                </Group>

                <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 2 }, { maxWidth: 'sm', cols: 1 }]} spacing="md">
                    {images && images.length > 0 ? (
                        images.map((src, idx) => (
                            <Card key={idx} shadow="sm" radius="md" withBorder p="lg">
                                <Card.Section>
                                    <Image src={src} alt={`${title} ${idx + 1}`} height={260} fit="cover" />
                                </Card.Section>
                            </Card>
                        ))
                    ) : (
                        <Card shadow="sm" radius="md" withBorder p="lg">
                            <Card.Section>
                                <div style={{ padding: 28, background: '#f8f9fa', fontSize: 16 }}>No images available</div>
                            </Card.Section>
                        </Card>
                    )}
                </SimpleGrid>

                <Divider my="md" />

                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing="xl">
                    <Stack spacing={8}>
                        <Text size="md" weight={700}>Program Used</Text>
                        <Text size="md" color="dimmed">{programUsed || '—'}</Text>

                        <Text size="md" weight={700} mt="md">Project Highlight</Text>
                        <Text size="md" color="dimmed">{projectHighlight || '—'}</Text>
                    </Stack>

                    <Stack spacing={8}>
                        <Text size="md" weight={700}>Description</Text>
                        {description ? (
                            <Text size="md" color="dark" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>{description}</Text>
                        ) : (
                            <Text size="md" color="dimmed">No description provided.</Text>
                        )}
                    </Stack>
                </SimpleGrid>
            </Stack>
        </Container>
    );
};