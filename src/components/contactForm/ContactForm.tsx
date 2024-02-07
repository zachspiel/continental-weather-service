"use client";

import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { Button, Group, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import { sendMail } from "@/cws/components/contactForm/contactFormSubmitAction";
import { showNotification } from "@mantine/notifications";
import SectionContainer from "@/cws/components/common/SectionContainer";
import SectionTitle from "@/cws/components/common/SectionTitle";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: isNotEmpty("Please enter your name,"),
      email: isEmail("Please enter a valid email."),
      message: isNotEmpty("Please enter a message."),
    },
  });

  const handleSubmit = async (formValues: ContactFormValues) => {
    form.reset();

    showNotification({ message: "Sending message....", color: "blue" });
    await sendMail(formValues)
      .then(() => {
        showNotification({
          message: "Successfully sent message! We will be in contact shortly.",
          color: "green",
        });
      })
      .catch(() => {
        showNotification({
          message: "An error occurred. Please try again later.",
          color: "red",
        });
      });
  };

  return (
    <SectionContainer>
      <SectionTitle title={"Contact Us"} id="contactUs" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            size="md"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            size="md"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          size="md"
          {...form.getInputProps("message")}
        />

        <Group justify="end" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
    </SectionContainer>
  );
};

export default ContactForm;
