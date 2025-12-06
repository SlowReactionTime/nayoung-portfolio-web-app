import resumePdf from '../assets/NAYOUNG_LUNA_KIM_Resume.pdf'
import { Container, Title, Text, Group, Button } from '@mantine/core'

export default function Resume() {
  return (
    <Container style={{ padding: '2rem 0' }}>
      <Title order={1} style={{ marginBottom: 12 }}>
        Resume
      </Title>

      <Text color="dimmed" style={{ marginBottom: 16 }}>
        You can view or download my resume using the buttons below.
      </Text>

      <Group spacing="sm" style={{ marginBottom: 18 }}>
        <Button component="a" href={resumePdf} target="_blank" rel="noopener noreferrer" variant="outline">
          Open Resume
        </Button>
        <Button component="a" href={resumePdf} download>
          Download PDF
        </Button>
      </Group>

      <div style={{ width: '100%', height: '80vh', border: '1px solid #e6e6e6', borderRadius: 6, overflow: 'hidden' }}>
        <iframe
          src={resumePdf}
          title="Nayoung Luna Kim Resume"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </Container>
  )
}