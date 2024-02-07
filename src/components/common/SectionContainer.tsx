import { Container, SimpleGrid } from "@mantine/core";
import classes from "./common.module.css";

interface Props {
  children: React.ReactNode;
  grayBackground?: boolean;
}

const SectionContainer = (props: Props): JSX.Element => {
  return (
    <Container className={props.grayBackground ? classes.section : ""} fluid>
      <Container p={0}>
        <SimpleGrid
          cols={1}
          style={{ paddingBottom: "10rem", paddingTop: "10rem" }}
        >
          {props.children}
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default SectionContainer;
