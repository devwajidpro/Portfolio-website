
"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Share2,
} from "lucide-react";

import {
    SiFiverr,
  SiGithub,
  SiUpwork,
} from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import ScrollReveal from "@/components/ScrollReveal";


const socialLinks = [
  {
    name: "Let's Connect",
    platform: "on LinkedIn",
    username: "Wajid Ali",
    href: "https://linkedin.com/in/devwajidpro",
    icon: SlSocialLinkedin,
    color: "text-blue-400",
    bg: "bg-blue-500/15",
  },
  {
    name: "Github",
    platform: "@devwajidpro",
    username: "@devwajidpro",
    href: "https://github.com/devwajidpro",
    icon: SiGithub,
    color: "text-white",
    bg: "bg-white/15",
  },
  {
    name: "Fiverr",
    platform: "@devwajidpro",
    username: "@devwajidpro",
    href: "https://www.fiverr.com/devwajidpro",
    icon: SiFiverr,
    color: "text-blue-400",
    bg: "bg-blue-500/15",
  },
  {
    name: "Upwork",
    platform: "",
    username: "",
    href: "https://www.upwork.com/freelancers/~01756bc606e240601e",
    icon: SiUpwork,
    color: "text-blue-400",
    bg: "bg-blue-500/15",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");

    try {
        await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            message: formData.message,
        },
        {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
        );

        setStatus("success");

        setFormData({
        name: "",
        email: "",
        message: "",
        });

    } catch (error) {
        console.error("Email sending failed:", error);
        setStatus("error");
    }
    };

  return (
    <section
      id="Contact"
      className="relative overflow-hidden pt-25 pb-15 px-4 text-center scroll-mt-24"
    >

      <div className="flex items-center flex-col justify-center w-full h-full gap-4 lg:pl-14 lg:pr-14 md:pl-10 md:pr-10 sm:pl-6 sm:pr-6 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-4">
        {/* Background Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-[-100px] top-[35%] h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-[-100px] top-[25%] h-80 w-80 rounded-full bg-pink-500/15 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-5xl">

          {/* Heading */}
          <ScrollReveal>
            <div className="mb-10 text-center">

              <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
                Contact Me
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex mb-10 text-center justify-center">
              <p className="mt-3 text-sm text-gray-400 sm:text-base max-w-2xl text-center">
                Have a project in mind or looking for a Full Stack Developer?
                Contact Wajid Ali to discuss web development projects,
                collaborations, or freelance opportunities.
              </p>
          </ScrollReveal>
          

          {/* Main Card */}
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/5 bg-[#111111]/95 p-4 shadow-2xl sm:p-6 md:p-8">

            {/* Inner Glass Card */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#292929] via-[#35303a] to-[#252525] p-5 sm:p-7 md:p-8">

              {/* Card Heading */}
              <div className="mb-6 flex items-center justify-between">

                <ScrollReveal delay={0.2}>
                  <h3 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    Get in Touch
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-gray-400 sm:text-sm">
                    Have something to discuss? Send me a message and let&apos;s talk.
                  </p>
                </ScrollReveal>

                <Share2
                  size={28}
                  className="shrink-0 text-purple-500"
                />

              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <ScrollReveal delay={0.3} className="relative">

                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <User
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="name"
                    autoComplete="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />

                </ScrollReveal>

                {/* Email */}
                <ScrollReveal delay={0.4} className="relative">

                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>

                  <Mail
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />

                </ScrollReveal>

                {/* Message */}
                <ScrollReveal delay={0.5} className="relative">

                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>

                  <MessageSquare
                    size={17}
                    className="absolute left-3 top-4 text-gray-400"
                  />

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />

                </ScrollReveal>

                {/* Submit Button */}
                <ScrollReveal delay={0.6}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                  <Send
                      size={16}
                      className={
                      status === "sending"
                          ? "animate-pulse"
                          : "transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      }
                  />

                  {status === "sending"
                      ? "Sending..."
                      : "Send Message"}
                  </button>
                  </ScrollReveal>


                  {status === "success" && (
                  <p
                      role="status"
                      className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-center text-sm text-green-400"
                  >
                      ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                  )}

                  {status === "error" && (
                  <p
                      role="alert"
                      className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-center text-sm text-red-400"
                  >
                      Failed to send message. Please try again.
                  </p>
                  )}
              </form>

              {/* Divider */}
              <div className="my-7 border-t border-white/10" />

              {/* Social Links */}
              <div className="rounded-xl border border-white/5 bg-white/[0.08] p-4 sm:p-5">

                  <ScrollReveal delay={0.7}>
                <h4 className="mb-5 flex items-center gap-2 text-base font-semibold text-white">
                  <span className="h-0.5 w-5 bg-gradient-to-r from-blue-500 to-purple-500" />
                  Connect With Me
                </h4>
                </ScrollReveal>

                <ScrollReveal delay={0.8} className="space-y-3">

                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition duration-300 hover:border-purple-500/40 hover:bg-white/[0.09]"
                      >

                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${social.bg} ${social.color}`}>
                          <Icon size={21} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-gray-200 transition group-hover:text-purple-300">
                            {social.name}
                          </p>

                          <p className="truncate text-xs text-gray-400">
                            {social.platform}
                          </p>
                        </div>

                      </a>
                    );
                  })}

                </ScrollReveal>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
