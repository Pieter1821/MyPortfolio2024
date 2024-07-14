'use client';

import { useState } from 'react';
import EmailTemplate from './email-template';
import { Resend } from 'resend';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const data = await resend.emails.send({
        from: 'your-email@example.com',
        to: ['recipient@example.com'],
        subject: `New message from ${name}`,
        react: <EmailTemplate name={name} email={email} message={message} />,
      });

      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-lg mx-auto" aria-label="Contact form">
      {/* Form fields */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          aria-label="Send Message"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {isSubmitted && <div className="text-green-500">Message sent successfully!</div>}
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
};

export default ContactForm;
