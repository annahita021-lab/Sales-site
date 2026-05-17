"use client";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import {
  Building2,
  Users,
  Wrench,
  BarChart3,
  Sparkles,
  Home,
  ArrowRight,
} from "lucide-react";

const modules = [
  { key: "sales", icon: Building2, color: "primary" },
  { key: "crm", icon: Users, color: "chart-4" },
  { key: "maintenance", icon: Wrench, color: "chart-5" },
  { key: "accounting", icon: BarChart3, color: "chart-2" },
  { key: "property", icon: Home, color: "chart-3" },
  { key: "ai", icon: Sparkles, color: "primary" },
];

export function PlatformOverview() {
  const t = useTranslations("platformOverview");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <br />
            <span className="bg-gradient-to-r from-primary to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
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

        {/* Platform ecosystem visualization */}
        <div className="relative">
          {/* Central hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48"
          >
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />

            {/* Central circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center backdrop-blur-xl">
              <div className="text-center">
                <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-2" />
                <span className="text-xs sm:text-sm font-semibold">PropertyCare</span>
              </div>
            </div>
          </motion.div>

          {/* Module cards in orbit */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative rounded-2xl border border-border/50 bg-card/80 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  {/* Connection line to center */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 -mt-12 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div
                    className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-${module.color}/10 flex items-center justify-center mb-3 transition-colors group-hover:bg-${module.color}/20`}
                  >
                    <module.icon className={`h-5 w-5 sm:h-6 sm:w-6 text-${module.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1">{t(`modules.${module.key}.title`)}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    {t(`modules.${module.key}.description`)}
                  </p>

                  {/* Hover arrow */}
                  <div className="mt-3 flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{t("learnMore")}</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection lines SVG - Desktop only */}
          <svg
            className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 pointer-events-none"
            style={{ zIndex: -1 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Lines from center to modules would be drawn here */}
          </svg>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "40K+", label: t("stats.users") },
            { value: "8", label: t("stats.countries") },
            { value: "14+", label: t("stats.integrations") },
            { value: "99.9%", label: t("stats.uptime") },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-6 rounded-2xl bg-secondary/30 border border-border/30"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
