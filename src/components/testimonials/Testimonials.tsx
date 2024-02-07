import classes from "./testimonials.module.css";
import { Group, Paper, Text } from "@mantine/core";
import SectionContainer from "@/cws/components/common/SectionContainer";
import SectionTitle from "@/cws/components/common/SectionTitle";

const testimonials = [
  {
    name: "Kenneth R. Neal",
    title: "Street Superintendent",
    location: "City of Elmhurst, IL",
    phone: "630-530-3014",
    content:
      "It is my pleasure to highly recommend the professional services of " +
      "Continental Weather Service. Mike Spiel has done an outstanding job of " +
      "forecasting winter weather for the City of Elmhurst ever since the beginning" +
      "of Continental. His twice daily faxes reports have been quire accurate thus " +
      "allowing us to anticipate snowstorms in advance and be better prepared for them. " +
      "His availability at any time of the day or night for questions and consultation " +
      "has been a great asset in making critical decisions regarding snow fighting " +
      "operations. His pleasant demeanor helps make the often frustrating task of" +
      "mobilizing men and equipment a lot easier. \n We have been very pleased " +
      "will aspects of our dealings with Continental Weather Service and plan to " +
      "continue using Mike as our key forecaster for future years.",
  },
  {
    name: "Roy Hervas",
    title: "Tri-Star Plowing & Landscaping",
    location: "Schaumburg, IL",
    phone: "847-584-5070",
    content:
      "I would like to take this opportunity to thank you for your accurate " +
      "weather predictions for the past six winters. It is so important for us to " +
      "have an accurate idea of when a storm will hit a certain area and how much " +
      "snow will fall so that we can have our trucks and equipment ready in time. " +
      "Your services have been extremely important to us during the past six winters. " +
      "I have been in business for 15 years and I have never slept so good knowing " +
      "that if I had anything to worry about my phone would ring. I will never " +
      "forget the incident in which most of our local forecasters were calling " +
      "for a major snowstorm. You told me not to worry about it and that I should " +
      "expect about an inch and a half of snow. You were exactly right! I believe " +
      "because of your ability to keep me informed, our response times to our accounts " +
      "got excellent reviews on the surveys we sent out to our customers. My worst " +
      "nightmare would be to wake up in the morning to snow on the ground. The last " +
      "six years, with your service, this has never happened because of your friendly " +
      "3am phone calls. Thanks again!",
  },
];

const Testimonials = () => {
  return (
    <SectionContainer grayBackground>
      <SectionTitle title="Testimonials" id="testimonials" />
      {testimonials.map((referral) => {
        return (
          <Paper
            withBorder
            radius="md"
            className={classes.comment}
            key={referral.name}
          >
            <Group>
              <div>
                <Text fz="sm">{referral.name}</Text>
                <Text fz="xs" c="dimmed">
                  {referral.title} • {referral.location}
                </Text>
              </div>
            </Group>
            <div className={classes.content}>{referral.content}</div>
          </Paper>
        );
      })}
    </SectionContainer>
  );
};

export default Testimonials;
