import { Overlay, Container, Title, Text } from "@mantine/core";
import classes from "./jumbotron.module.css";

interface Props {
  title: string;
  section: "default" | "contactUs" | "referrals" | "servicesOffered";
  description?: string;
}

const Jumbotron = ({ title, section, description }: Props): JSX.Element => {
  const getClassName = () => {
    switch (section) {
      case "contactUs":
        return classes.wrapperContactUs;
      case "referrals":
        return classes.wrapperReferrals;
      case "servicesOffered":
        return classes.wrapperServicesOffered;
      default:
        return classes.wrapperDefault;
    }
  };

  return (
    <div className={`${classes.wrapper} ${getClassName()}`} id={section}>
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
