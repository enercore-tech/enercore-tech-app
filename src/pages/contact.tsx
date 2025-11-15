import Head from "next/head";
import ContactPage from "~/modules/contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Enercore Tech</title>
        <meta name="description" content="Get in touch with Enercore Tech" />
      </Head>
      <main>
        <ContactPage />
      </main>
    </>
  );
}
