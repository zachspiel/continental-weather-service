import * as React from "react";
import { Html } from "@react-email/html";
import { Heading, Preview, Text } from "@react-email/components";
import { ContactFormValues } from "@/cws/components/contactForm/ContactForm";

const EmailTemplate = (formValues: ContactFormValues) => {
  return (
    <Html lang="en">
      <Heading as="h3">Name</Heading>
      <Text>{formValues.name}</Text>

      <Heading as="h3">Email</Heading>
      <Text>{formValues.email}</Text>

      <Heading as="h3">Message</Heading>
      <Text>{formValues.message}</Text>

      <Preview>
        Message received from Continental Weather Service website!
      </Preview>
    </Html>
  );
};

export default EmailTemplate;
