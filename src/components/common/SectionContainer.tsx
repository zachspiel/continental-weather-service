import { Container, SimpleGrid } from "@mantine/core";

interface Props {
  children: React.ReactNode;
}

const SectionContainer = (props: Props): JSX.Element => {
  return (
    <Container fluid>
      <Container p={0}>
        <SimpleGrid
          cols={1}
          style={{ paddingBottom: "5rem", paddingTop: "3rem" }}
        >
          {props.children}
        </SimpleGrid>
      </Container>
    </Container>
  );
};

export default SectionContainer;
