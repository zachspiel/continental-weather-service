"use client";

import SectionContainer from "@/cws/components/common/SectionContainer";
import {
  IconClock,
  IconCurrentLocation,
  IconMessage2,
} from "@tabler/icons-react";
import { Card, rem, SimpleGrid, Text, useMantineTheme } from "@mantine/core";
import classes from "@/cws/app/home.module.css";

const features = [
  {
    title: "Timely Updates",
    description:
      "Forecasts are faxed or e-mailed to your office twice daily. Time updates are faxed or given verbally.",
    icon: IconClock,
  },
  {
    title: "Accuracy",
    description:
      "Accurate temperature forecasts forewarn you of freezing and thawing times. Pinpoint precipitation times, duration, intensity and amounts for your specific areas or job sites.",
    icon: IconCurrentLocation,
  },
  {
    title: "24/7 Support",
    description:
      "We specialize in polite and friendly service, your superintendents can make unlimited calls to CWS anytime of the day or night.",
    icon: IconMessage2,
  },
];

const ServicesOffered = () => {
  const theme = useMantineTheme();

  const featureCards = features.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <SectionContainer grayBackground>
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {featureCards}
      </SimpleGrid>
    </SectionContainer>
  );
};

export default ServicesOffered;
