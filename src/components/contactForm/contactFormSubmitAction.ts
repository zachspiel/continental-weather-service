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

interface SendMailPayload extends ContactFormValues {
  token?: string | null;
}

export async function sendMail(formValues: SendMailPayload) {
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${formValues.token}`
  , {method: "POST"}).then((res) => res.json());

  if(!response.success) {
    return {error: "CAPTCHA failed. Please try again later"};
  }

  const mail = {
    from: formValues.email,
    to: process.env.EMAIL_RECIPIENTS,
    subject: "Message received from Continental Weather Service Website!",
    html: render(EmailTemplate(formValues)),
  };

  const result = await contactEmail.sendMail(mail);
  return {success: result.accepted};
}
