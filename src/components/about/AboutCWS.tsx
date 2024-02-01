"use client";

import SectionContainer from "@/cws/components/common/SectionContainer";
import SectionTitle from "@/cws/components/common/SectionTitle";
import { Card, rem, SimpleGrid, Text, useMantineTheme } from "@mantine/core";
import {
  IconClock,
  IconCurrentLocation,
  IconMessage2,
} from "@tabler/icons-react";
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

const AboutCWS = () => {
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
    <SectionContainer>
      <SectionTitle title="About Continental Weather Services" id="about" />

      <Text>
        Continental Weather Service can make your life a lot easier this winter
        season by providing you with accurate weather forecasts and timely
        updates. We also notify your after hours on call person of lead times of
        snow and ice so that your crews are and equipment are ready to roll when
        the first flakes arrive. No longer will you need to have someone looking
        out the window all night long waiting for the snow or ice to commence. A
        key feature why our clientele subscribe to our service is because they
        are able to call us and converse directly with a meteorologist who can
        answer all of their questions anytime of the day or night to get the
        latest storm progress reports. One does not have this valuable tool at
        their disposal if they depend on radio and television forecasts or use
        of a satellite computerized weather system.
      </Text>

      <Text>
        You will no longer have to rely on often outdated and inaccurate weather
        forecasts. Continental Weather Service tailors its forecasts to meet the
        exact needs of municipalities and snow removal services. We have over
        twenty years of experience forecasting {`Chicagoland's winters`}. We use the
        latest up-to-date equipment featuring DOPPLER RADAR and satellite which
        covers your specific plowing area.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {featureCards}
      </SimpleGrid>
    </SectionContainer>
  );
};

export default AboutCWS;
