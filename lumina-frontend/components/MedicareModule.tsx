import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem, Card, Image, Group, Badge, Center } from '@mantine/core';
import { text } from 'node:stream/consumers';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.colors.violet[5],
  },

  carousel: {
    marginLeft: rem(200),
    marginRight: rem(200),
    marginTop: rem(200)
  },

  button: {
    marginLeft: rem(300),
  },


  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },
  text: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    backgroundColor:"white",
    padding:rem(20),
    borderRadius:rem(10),
    color: theme.colors.violet[5],
    marginLeft: rem(50),
    marginTop:rem(100),
    marginRight: rem(50),
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string,
  title: string;
  category: string;
  text_content: string;
  btnLink: string;
  btnText: string;
}

function Cardbuild({ image ,title, category, text_content, btnLink, btnText }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="xl"
      p="xl"
      radius="md"
      className={classes.card}
      
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>

        <Text className={classes.text}>
          {text_content}
        </Text>
       

      </div>
      <Center>
      <Button variant="white" color="dark" component='a' href={btnLink} className={classes.button}>
        {btnText}
      </Button>
      </Center>
      
    </Paper>
  );
}

const data = [
  {
    image: '',
    title: 'First Check - are you Enrolled?',
    category: 'Enrolling in Medicare',
    text_content:"Hint: If you’re on your parent’s Medicare card, you’re already enrolled. This means you don’t need to re-enrol. When you’re 15 years old, you can get your own Medicare card.",
    btnLink:"https://www.servicesaustralia.gov.au/how-to-set-up-your-medicare-online-account?context=22751#:~:text=If%20you%20have%20a%20Medicare,%2C%20you're%20already%20enrolled.",
    btnText:"Am I enrolled?"
  },
  {
    image: 'https://www.stubbswallace.com.au/wp-content/uploads/2015/09/logo_mygov.png',
    title: 'Sign in to myGov.',
    category: 'Mygov',
    text_content:"Go to myGov and select Sign in. Enter your username and password and select Sign in. ",
    btnLink:"https://www2.medicareaustralia.gov.au/moasso/sps/oidc/rp/moa/kickoff/mygov?target_link_uri=%2Fmoaonline",
    btnText:"MyGov"
  },
  {
    image: '',
    title: 'Select My card.',
    category: 'Enrolling in Medicare',
    text_content:"Select Get a new card and number.",
    btnLink:"https://www.servicesaustralia.gov.au/enrolling-medicare?context=60092#howtoenrol",
    btnText:"Read More"
  }
];

export default function Module() {
const { classes } = useStyles();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Cardbuild {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(1) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 1}
      className={classes.carousel}
    >
    <Carousel.Slide key={"First Page"}><Card shadow="sm">
      <Card.Section >
        <Image src="https://ds8526jcpbygs.cloudfront.net/wp-content/uploads/2017/07/medicare.jpg" height={275} alt="Norway"/>
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Get your own Medicare card and number</Text>
        <Badge color="violet" variant="light">
          15+
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
      You can get your own Medicare card and number if you’re 15 or older and enrolled in Medicare.
      </Text>

      <Button variant="light" color="violet" fullWidth mt="md" radius="md">
        Start Module
      </Button>
    </Card> 

    </Carousel.Slide >
      {slides}
    </Carousel>
  );
}