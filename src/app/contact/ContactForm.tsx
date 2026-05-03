"use client";

import { useState, type FormEvent } from "react";
import { BRAND_EMAIL } from "@/lib/constants";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Beachside Beans — note from ${name}`);
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${BRAND_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={send}
      className="space-y-5 font-body text-roast"
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg border border-roast/20 bg-foam px-4 py-3 outline-none ring-ocean/30 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-roast/20 bg-foam px-4 py-3 outline-none ring-ocean/30 focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full resize-y rounded-lg border border-roast/20 bg-foam px-4 py-3 outline-none ring-ocean/30 focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-sunrise py-3 font-body text-sm uppercase tracking-wider text-chalk transition-colors hover:bg-sunrise/90 active:scale-[0.99]"
      >
        Send it →
      </button>
    </form>
  );
}
