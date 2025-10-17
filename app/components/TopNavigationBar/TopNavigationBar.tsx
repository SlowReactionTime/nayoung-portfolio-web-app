import { Container, Group, Text } from "@mantine/core";
import { useState } from "react";
import classes from "./TopNavigationBar.module.css"
import { useLocation } from 'react-router-dom';

const topNavBarItems = [
    { link: '/portfolio', label: 'Portfolio' },
    { link: '/resume', label: 'Resume' },
    { link: '/about', label: 'About' },
];

// TODO: stop the "blink" on the active link caused by rerendering the top nav bar
export default function TopNavigationBar() {
    const currentPath = useLocation().pathname;
    const [activeLink, setActive] = useState(currentPath);

    const items = topNavBarItems.map((item) => (
        <a
            key={item.label}
            href={item.link}
            className={classes.link}
            data-active={activeLink === item.link || undefined}
            onClick={(_event) => {
                setActive(item.link);
            }}
        >
            {item.label}
        </a>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <a href="/">
                    <Text fz='xl' fw={700}>
                        Nayoung "Luna" Kim
                    </Text>
                </a>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>
            </Container>
        </header>
    );
}