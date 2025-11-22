import type { Route } from "./+types/home";
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './home.module.css';
import image from '../assets/nayoungPic.jpeg';
import { useNavigate } from 'react-router-dom';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nayoung \"Luna\" Kim" },
    { name: "description", content: "Nayoung Kim's portfolio website" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Nayoung <span className={classes.highlight}>"Luna"</span> Kim <br />
          </Title>
          <Text c="dimmed" mt="lg">
            I'm sleeping. Better not wake me up!!! I like snacks, desserts, cute clothes, and pigs.
            I like Olaf the happy snowman and Kuromi the the bringer of the end times.
            I don't like princesses because I am the best of them all :)
            Anyways, you should hire me because:
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
          >
            <List.Item className={classes.listItem}>
              <b>I can</b> : create immersive visuals that blend storytelling with latest technologies.
            </List.Item>
            <List.Item className={classes.listItem}>
              <b>I love to</b> : model and craft animations that capture the imagination.
            </List.Item>
            <List.Item className={classes.listItem}>
              <b>I am literally the best</b> : don't take my word for it! My brother tells me so, and he's never wrong.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} onClick={() => navigate('/portfolio')}>
              Portfolio
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control} onClick={() => navigate('/resume')}>
              Resume
            </Button>
          </Group>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  )
}
