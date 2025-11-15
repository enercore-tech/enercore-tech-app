import { ContactInfo } from "./components/ContactInfo";
import { ContactForm } from "./components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto max-w-6xl px-4 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Get in Touch
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Have questions about our energy solutions? We'd love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
