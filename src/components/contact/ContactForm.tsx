"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      console.warn(
        "EmailJS env vars missing. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY"
      );
      return;
    }

    setStatus("sending");
    try {
      const templateParams = {
        from_name: name,
        reply_to: email,
        message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
    >
      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
        Contactez-moi
      </h3>

      <label className="block mb-3">
        <span className="text-sm text-gray-700 dark:text-gray-300">Nom</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 px-3 py-2"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm text-gray-700 dark:text-gray-300">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 px-3 py-2"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Message
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 px-3 py-2"
          required
        />
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Envoi..." : "Envoyer"}
        </button>
        {status === "success" && (
          <span className="text-green-600">Message envoyé — merci !</span>
        )}
        {status === "error" && (
          <span className="text-red-600">
            {"Échec de l'envoi. Vérifiez la configuration."}
          </span>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Si vous préférez, contactez directement :{" "}
        <a href="mailto:tshiabraham@gmail.com" className="text-blue-600">
          tshiabraham@gmail.com
        </a>
      </p>
    </form>
  );
}
