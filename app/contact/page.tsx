const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <form className="mt-8 space-y-4 max-w-lg mx-auto">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  