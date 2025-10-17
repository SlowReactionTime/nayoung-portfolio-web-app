import { Button, Card, CardSection, Group, Image, Text } from '@mantine/core';
import classes from './PortfolioItem.module.css';
import type { FC, JSX } from 'react';

interface PortfolioItemData {
    image: string,
    title: string,
    description: string,
    programUsed: string
}

export interface PortfolioItemDataWrapper {
    data: PortfolioItemData
}

export const PortfolioItem: FC<PortfolioItemDataWrapper> = ({ data }): JSX.Element => {
    const { image, title, description, programUsed } = data;

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image className={classes.fixedSizeImage} src={image} alt={title} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="apart">
                    <Text fz="xl" fw={500}>
                        {title}
                    </Text>
                </Group>
                <Text fz="md">
                    {description}
                </Text>
            </Card.Section>
            <CardSection className={classes.section} mt='md' c="dimmed">
                <Text className={classes.label}>
                    {programUsed}
                </Text>
            </CardSection>
            <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }}>
                    Show details
                </Button>
            </Group>
        </Card>
    );
}