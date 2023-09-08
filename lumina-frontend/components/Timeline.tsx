import { Timeline, Text, Button, createStyles,
  rem, } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  timelineBtn: {
    bottom: 20
  },
}));

export default function Time() {
  const { classes, theme } = useStyles();
  return (
    <div>
    <Button className={classes.timelineBtn} component="a" href="/timeline">View Full Timeline</Button>
  
    <Timeline active={1} bulletSize={24} lineWidth={2}>
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