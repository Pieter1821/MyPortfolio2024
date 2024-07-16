
import ContactForm from "@/components/ui/contactForm";


export default async function Contact() {
  return (
    <section id="contact" className="py-20 h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semi-bold">Contact Me</h1>
        <h3 className="text-xl md:2xl">Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.</h3>
        <ContactForm />
      </div>
    </section>
  );
}
