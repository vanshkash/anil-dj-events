"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactForm() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    toast.success("Message sent successfully!");

    formRef.current.reset();

  } catch (error) {
    console.log(error);

    toast.error("Failed to send message.");
  }

  setLoading(false);
};

  return (
    <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
      <form
  ref={formRef}
  onSubmit={sendEmail}
  className="space-y-5"
>

  {/* Name */}
  <div>
    <label className="mb-2 block text-sm font-medium text-gray-300">
      Full Name *
    </label>

    <input
      type="text"
      name="user_name"
      required
      minLength={3}
      placeholder="Enter your full name"
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/40"
    />
  </div>

  {/* Phone */}
  <div>
    <label className="mb-2 block text-sm font-medium text-gray-300">
      Phone Number *
    </label>

    <input
      type="tel"
      name="user_phone"
      required
      pattern="[0-9]{10}"
      maxLength={10}
      minLength={10}
      placeholder="Enter 10-digit phone number"
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/40"
    />

    <p className="mt-2 text-xs text-gray-400">
      Enter a valid 10-digit mobile number.
    </p>
  </div>

  {/* Event Type */}
  <div>
    <label className="mb-2 block text-sm font-medium text-gray-300">
      Event Type *
    </label>

    <input
      type="text"
      name="event_type"
      required
      minLength={3}
      placeholder="Wedding, Party, DJ Night..."
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/40"
    />
  </div>

  {/* Message */}
  <div>
    <label className="mb-2 block text-sm font-medium text-gray-300">
      Message (Optional)
    </label>

    <textarea
      rows={2}
      name="message"
      placeholder="Tell us about your event..."
      className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500/40"
    />
  </div>

  {/* Button */}
  <button
    type="submit"
    disabled={loading}
    className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
  >
    {loading ? "Sending..." : "Send Message"}
  </button>

</form>

    </div>
  );
}