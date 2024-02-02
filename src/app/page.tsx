import { AppShell, AppShellHeader, AppShellMain, Text } from "@mantine/core";
import SectionContainer from "@/cws/components/common/SectionContainer";
import Header from "@/cws/components/header/Header";
import Jumbotron from "@/cws/components/jumbotron/Jumbotron";
import AboutCWS from "@/cws/components/about/AboutCWS";
import Referrals from "@/cws/components/referrals/Referrals";
import ContactForm from "@/cws/components/contactForm/ContactForm";

export default function Home() {
  return (
    <AppShell>
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Jumbotron
          title="Continental Weather Service"
          section="default"
          description=""
        />
        <AboutCWS />

        <Jumbotron title="Referrals" section="referrals" />

        <SectionContainer>
          <Text>
            A list of references is available upon request. The two following
            testimonials are just a small sampling of our many satisfied clients
            in the Chicago area.
          </Text>

          <Referrals />
        </SectionContainer>

        <Jumbotron title="Contact Us" section="contactUs" />

        <SectionContainer>
          <ContactForm />
        </SectionContainer>
      </AppShellMain>
    </AppShell>
  );
}
