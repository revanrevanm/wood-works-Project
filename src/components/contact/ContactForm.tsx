"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import { SERVICES } from "@/lib/content";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "Karur",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*New Enquiry — Natrayan Wood Works*
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service || "General"}
Location: ${form.location}
Message: ${form.message}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-xl border border-walnut-200 bg-cream-50 px-4 py-3 text-sm text-walnut-800 outline-none transition-colors placeholder:text-walnut-400 focus:border-teak focus:ring-2 focus:ring-teak/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-walnut-600">
            Your Name *
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Eg. Saravanan"
            className={field}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-walnut-600">
            Phone Number *
          </label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+91 ..."
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-walnut-600">
            Service Needed
          </label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={field}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / Custom</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-walnut-600">
            Location
          </label>
          <select
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className={field}
          >
            <option value="Karur">Karur</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-walnut-600">
          Tell us about your project
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Eg. I need a modular kitchen for a 3BHK..."
          className={`${field} resize-none`}
        />
      </div>

      <Button type="submit" variant="whatsapp" size="lg" className="w-full">
        <Send className="h-4 w-4" /> Send Enquiry via WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Your details open a pre-filled WhatsApp message — no spam, ever.
      </p>
    </form>
  );
}
