"use server";

import * as nodemailer from "nodemailer";
import { ContactFormValues } from "@/cws/components/contactForm/ContactForm";
import { render } from "@react-email/render";
import EmailTemplate from "@/cws/components/contactForm/EmailTemplate";

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export async function sendMail(formValues: ContactFormValues) {
  const mail = {
    from: formValues.email,
    to: process.env.EMAIL_RECIPIENTS,
    subject: "Message received from Continental Weather Service Website!",
    html: render(EmailTemplate(formValues)),
  };

  const result = await contactEmail.sendMail(mail);
  return result.accepted;
}
