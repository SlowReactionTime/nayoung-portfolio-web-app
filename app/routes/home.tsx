import type { Route } from "./+types/home";
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './home.module.css';
import image from '../assets/portfolio-whisper-of-the-enchanted-world.png';
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
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Nayoung <span className={classes.highlight}>"Luna"</span> Kim <br />
          </Title>
          <Text c="dimmed" mt="lg">
            Nayoung “Luna" Kim is a 3D and VFX artist based in Chicago. She creates immersive visuals that blend storytelling with cutting-edge technology.
          </Text>

          <List
            mt={36}
            spacing="sm"
            size="md"
          >
            <List.Item className={classes.listItem}>
              <b>I can</b> : create immersive visuals that blend storytelling with latest technologies.
            </List.Item>
            <List.Item className={classes.listItem}>
              <b>I love to</b> : model and craft animations that capture the imagination.
            </List.Item>
            <List.Item className={classes.listItem}>
              <b>I create</b> : works that challenge viewers to reconsider the everyday and view it from a new, often transformative perspective.
            </List.Item>
          </List>
        </div>
        <Image src={image} className={classes.image} />
      </div>
    </Container>
  )
}
