"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can we launch the platform under our own tower's name and brand?",
    answer:
      "Absolutely. Our solution is fully white-labeled. The mobile apps (iOS & Android) and the desktop platform will feature your tower's logo, colors, and unique branding, ensuring a premium experience for your clients.",
  },
  {
    question: "Can we use our own custom domain for the web platform?",
    answer:
      "Yes. Your Sales & Rental portal will run on your own domain (e.g., sales.yourtowername.com), maintaining full brand consistency across the web.",
  },
  {
    question: "Which platforms is the software available on?",
    answer:
      "The platform is cross-platform and fully synchronized. It runs natively on iOS, Android, and all modern Desktop browsers, allowing potential buyers and renters to browse your property from any device.",
  },
  {
    question: "Who handles the technical updates and App Store submissions?",
    answer:
      "We handle the heavy lifting. Our team manages all technical maintenance, security updates, and the process of publishing your branded apps to the Apple App Store and Google Play Store.",
  },
  {
    question: "How do we manage the available units for sale or rent?",
    answer:
      "You will have access to a centralized management dashboard. From there, you can easily add unit details, high-resolution galleries, 3D virtual tours, and pricing information in real-time.",
  },
  {
    question: "Can we showcase tower amenities alongside the listings?",
    answer:
      "Yes. The platform is designed to sell a lifestyle, not just a unit. You can highlight the tower's premium amenities—such as the gym, spa, or concierge services—to add value to every listing.",
  },
  {
    question: "How are inquiries from potential buyers or renters handled?",
    answer:
      "All leads are captured directly through your branded platform. Your sales team will receive instant notifications via the dashboard and email, allowing for immediate follow-up with prospective clients.",
  },
  {
    question: "Is our building's data secure?",
    answer:
      "Security is our priority. We provide dedicated database environments and industry-standard encryption to ensure that all your tower's information and client data remain private and protected.",
  },
  {
    question: "Can this platform be integrated with other management features?",
    answer:
      "Yes. The Sales & Rental module can work seamlessly with our broader property management ecosystem, including move-in/move-out coordination and resident communication tools.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute left-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 text-center lg:mb-16"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            FAQ
          </span>
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground lg:text-lg">
            Everything you need to know about PropertyCare. Have a question not listed? Contact our support team.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 sm:px-6 shadow-sm transition-colors data-[state=open]:border-primary/40 data-[state=open]:bg-white"
                >
                  <AccordionTrigger className="py-4 sm:py-5 text-left text-sm sm:text-base font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 sm:pb-5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="#contact"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Get in touch with our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
