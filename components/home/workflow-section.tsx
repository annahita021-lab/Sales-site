"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import {
  FileText,
  Palette,
  Rocket,
  HeadphonesIcon,
  Check,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    key: "blueprint",
    icon: FileText,
    color: "primary",
  },
  {
    key: "design",
    icon: Palette,
    color: "chart-2",
  },
  {
    key: "delivery",
    icon: Rocket,
    color: "chart-4",
  },
  {
    key: "support",
    icon: HeadphonesIcon,
    color: "chart-5",
  },
];

export function WorkflowSection() {
  const t = useTranslations("workflow");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[oklch(0.55_0.15_200)]/5 blur-[120px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
            <div className="absolute inset-0 bg-border/50" />
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-[oklch(0.55_0.15_200)] to-chart-4"
              style={{ scaleX: lineProgress, transformOrigin: "left" }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Step card */}
                <div className="relative rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl group">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-[oklch(0.55_0.15_200)] flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className={`h-14 w-14 rounded-2xl bg-${step.color}/10 flex items-center justify-center mb-5 transition-colors group-hover:bg-${step.color}/20`}
                  >
                    <step.icon className={`h-7 w-7 text-${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{t(`steps.${step.key}.title`)}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{t(`steps.${step.key}.description`)}</p>

                  {/* Features list */}
                  <ul className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className={`h-4 w-4 text-${step.color} flex-shrink-0`} />
                        <span className="text-muted-foreground">{t(`steps.${step.key}.features.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow connector - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      className="h-6 w-6 rounded-full bg-card border border-border/50 flex items-center justify-center"
                    >
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 sm:gap-12 rounded-2xl border border-border/50 bg-card/50 px-8 py-6 backdrop-blur-sm">
            {[
              { value: "500+", label: t("stats.projects") },
              { value: "2-4", label: t("stats.weeks") },
              { value: "100%", label: t("stats.satisfaction") },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
