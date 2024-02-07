import { AppShell, AppShellHeader, AppShellMain } from "@mantine/core";
import Header from "@/cws/components/header/Header";
import Jumbotron from "@/cws/components/jumbotron/Jumbotron";
import AboutCWS from "@/cws/components/about/AboutCWS";
import ContactForm from "@/cws/components/contactForm/ContactForm";
import Testimonials from "@/cws/components/testimonials/Testimonials";

export default function Home() {
  return (
    <AppShell>
      <AppShellHeader>
        <Header />
      </AppShellHeader>
      <AppShellMain>
        <Jumbotron title="Continental Weather Service" />

        <AboutCWS />
        <Testimonials />
        <ContactForm />
      </AppShellMain>
    </AppShell>
  );
}
