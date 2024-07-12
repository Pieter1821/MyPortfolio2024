/* eslint-disable react/no-unescaped-entities */
// TODO
// Provide context for the form
// Provide form validation
// Provide form submission

// fetch data from resend - API
// form validation

export default async function Contact() {
    return (
      <>
        <head>
          <meta name="description" content="Contact page for getting in touch and collaboration inquiries" />
        </head>
        <section id="contact" className="py-20 h-screen ">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semi-bold">Contact Me</h2>
            <h3 className="text-xl md:2xl">Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.</h3>
            <form className="mt-8 space-y-4 max-w-lg mx-auto" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  aria-required="true"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full p-5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  aria-label="Send Message"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
