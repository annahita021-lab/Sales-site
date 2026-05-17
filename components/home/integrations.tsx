"use client";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const integrations = [
  "FCM", "Apple", "Amazon Hub", "Google Analytics", "Google Calendar",
  "Zego", "Expert Texting", "QuickBooks", "Stripe", "Zapier",
  "Twilio", "SendGrid", "Slack", "Microsoft",
];

export function HomeIntegrations() {
  const t = useTranslations("homeIntegrations");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4"
          >
            {t("badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto text-muted-foreground text-sm sm:text-base"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Scrolling logos */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 sm:gap-12"
              animate={{ x: [0, -1500] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {[...integrations, ...integrations].map((integration, index) => (
                <div
                  key={`${integration}-${index}`}
                  className="flex-shrink-0 px-6 py-4 rounded-xl border border-border/30 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-colors group"
                >
                  <span className="text-base sm:text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {integration}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
