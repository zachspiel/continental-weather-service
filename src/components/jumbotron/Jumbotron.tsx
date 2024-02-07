import { Overlay, Container, Title, Text } from "@mantine/core";
import classes from "./jumbotron.module.css";

interface Props {
  title: string;
  description?: string;
}

const Jumbotron = ({ title, description }: Props): JSX.Element => {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={0} />

      <div className={classes.inner}>
        <Title className={classes.title}>{title}</Title>
      </div>

      <Container size={640}>
        <Text size="lg" className={classes.description}>
          {description}
        </Text>
      </Container>
    </div>
  );
};

export default Jumbotron;
