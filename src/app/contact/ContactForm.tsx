"use client";

import { useState, type FormEvent } from "react";

// NOTE: This form does not send data anywhere yet. Wire the onSubmit handler
// up to an API route (src/app/api/contact/route.ts), a form service
// (e.g. Formspree), or an email provider once you're ready to go live.
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: replace with a real submission (fetch to an API route, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-teal/30 bg-teal/5 p-6">
        <p className="font-medium text-navy">Thanks — message received.</p>
        <p className="mt-2 text-sm text-slate">
          This is a placeholder confirmation. Connect the form to a real backend to
          actually receive messages.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm focus:border-teal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm focus:border-teal focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm focus:border-teal focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-teal px-5 py-2.5 text-sm font-medium text-white hover:bg-teal/90"
      >
        Send message
      </button>
    </form>
  );
}
