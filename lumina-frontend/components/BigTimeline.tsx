import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitCommit } from '@tabler/icons-react';

export default function Time() {
  return (
    <div>
    <Timeline active={5} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="Birth">
        <Text color="dimmed" size="sm">Born on June 5, 1999, in Sydney, New South Wales, Australia</Text>
        <Text size="xs" mt={4}>1999</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Vaccinations">
        <Text color="dimmed" size="sm">Received standard childhood vaccinations, including MMR and DPT</Text>
        <Text size="xs" mt={4}>2003</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Diagnosis">
        <Text color="dimmed" size="sm">Diagnosed with seasonal allergies (hay fever); started taking antihistamines.</Text>
        <Text size="xs" mt={4}>2010</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Incident">
        <Text color="dimmed" size="sm">Broke her arm while playing sports; received a cast for six weeks.</Text>
        <Text size="xs" mt={4}>2012</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Medication">
        <Text color="dimmed" size="sm">Developed acne; began using over-the-counter skincare products.</Text>
        <Text size="xs" mt={4}>2017</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Vaccinations">
        <Text color="dimmed" size="sm">Ensured all vaccinations were up-to-date upon travelling.</Text>
        <Text size="xs" mt={4}>2020</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Appointment">
        <Text color="dimmed" size="sm">Annual checkup with general practicitioner.</Text>
        <Text size="xs" mt={4}>2023</Text>
      </Timeline.Item>
      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Blood Test">
        <Text color="dimmed" size="sm">Half-yearly blood test appointment.</Text>
        <Text size="xs" mt={4}>2024</Text>
      </Timeline.Item>
    </Timeline>
    </div>
  );
}