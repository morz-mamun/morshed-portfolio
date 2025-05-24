"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./contactForm";
import { Github, Linkedin, Twitter } from "lucide-react";
import SparklesPreview from "../banner/sparklesPreview";
import { contactItemData } from "@/constants/contact-me-data";
import ContactItem from "./contact-item";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative text-center mb-12">
            <SparklesPreview title={"Get In Touch"} />
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold">
              Contact me
            </h2>
            <p className="max-w-xl mx-auto text-sm text-textPrimary dark:text-textSecondary">
              Have a project in mind or want to discuss a potential
              collaboration? Feel free to reach out to me using the contact form
              below or through my contact information.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="space-y-5">
              <h1 className="text-textPrimary dark:text-textSecondary uppercase font-bold text-2xl">
                Contact Info
              </h1>
              {contactItemData.map((item) => (
                <ContactItem
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  isLink={item.isLink}
                />
              ))}
            </div>
            {/* Social Links */}
            <div className="space-y-5 pt-10">
              <h1 className="text-textPrimary dark:text-textSecondary uppercase font-bold text-2xl">
                Social Info
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center gap-6 w-fit px-7 py-4 rounded-full shadow-xl shadow-primary/70 dark:shadow-brand/50"
              >
                <a
                  href="https://github.com/morz-mamun"
                  target="_blank"
                  className="text-primary/70 hover:text-primary dark:hover:text-brand transition-colors clip-path-icon-container"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-morshed-alam-2324022a4"
                  target="_blank"
                  className="text-primary/70 hover:text-primary dark:hover:text-brand transition-colors clip-path-icon-container"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/morzMamun"
                  target="_blank"
                  className="text-primary/70 hover:text-primary dark:hover:text-brand transition-colors clip-path-icon-container"
                >
                  <Twitter size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div
              className={`relative dark:bg-zinc-800/50 dark:border-zinc-700/50 rounded-xl p-6 md:p-8 border`}
            >
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <ContactForm />
              <BorderBeam
                duration={8}
                delay={3}
                size={200}
                className="from-transparent via-blue-500 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
