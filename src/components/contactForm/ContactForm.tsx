"use client";

import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { Button, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import { sendMail } from "@/cws/components/contactForm/contactFormSubmitAction";
import { showNotification } from "@mantine/notifications";
import SectionContainer from "@/cws/components/common/SectionContainer";
import SectionTitle from "@/cws/components/common/SectionTitle";
import ReCAPTCHA from "react-google-recaptcha";
import useRecaptcha from "@/cws/hooks/useCaptcha";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { capchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha();

  console.log(capchaToken);
  console.log(process.env.NEXT_PUBLIC_SITE_KEY);
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
    if (!capchaToken) {
      showNotification({
        color: "red",
        message: "Captcha failed",
      });
    }

    form.reset();

    showNotification({ message: "Sending message....", color: "blue" });

    await sendMail({ ...formValues, token: capchaToken })
      .then((response) => {
        if (response.error) {
          showNotification({
            color: "red",
            message: response.error,
          });
        } else if (response.success) {
          showNotification({
            message:
              "Successfully sent message! We will be in contact shortly.",
            color: "green",
          });
        }

        handleRecaptcha("");
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
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
          my="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          size="md"
          {...form.getInputProps("message")}
        />

        <div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY ?? ""}
            onChange={handleRecaptcha}
          />

          <Button type="submit" size="md" mt="md">
            Send message
          </Button>
        </div>
      </form>
    </SectionContainer>
  );
};

export default ContactForm;
