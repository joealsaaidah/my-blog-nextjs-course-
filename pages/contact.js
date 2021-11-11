import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your inquiries'></meta>
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
