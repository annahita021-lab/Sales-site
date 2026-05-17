"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useEffect, useState } from "react";
import {
  Shield,
  Zap,
  Globe,
  HeadphonesIcon,
  Layers,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

const bentoItems = [
  {
    key: "security",
    icon: Shield,
    size: "large",
    gradient: "from-primary/10 to-primary/5",
    stat: { value: 99.9, suffix: "%", label: "uptime" },
  },
  {
    key: "speed",
    icon: Zap,
    size: "medium",
    gradient: "from-chart-5/10 to-chart-5/5",
    stat: { value: 50, suffix: "ms", label: "response" },
  },
  {
    key: "global",
    icon: Globe,
    size: "medium",
    gradient: "from-[oklch(0.55_0.15_200)]/10 to-[oklch(0.55_0.15_200)]/5",
    stat: { value: 8, suffix: "+", label: "countries" },
  },
  {
    key: "support",
    icon: HeadphonesIcon,
    size: "small",
    gradient: "from-chart-4/10 to-chart-4/5",
    stat: { value: 24, suffix: "/7", label: "support" },
  },
  {
    key: "integrations",
    icon: Layers,
    size: "small",
    gradient: "from-chart-2/10 to-chart-2/5",
    stat: { value: 14, suffix: "+", label: "integrations" },
  },
  {
    key: "growth",
    icon: TrendingUp,
    size: "wide",
    gradient: "from-chart-3/10 to-chart-3/5",
    stat: { value: 300, suffix: "%", label: "efficiency" },
  },
];

export function WhyChooseUsSection() {
  const t = useTranslations("whyChooseUs");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
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

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Large card - Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sm:col-span-2 lg:row-span-2 group"
          >
            <div className="h-full rounded-3xl border border-border/50 bg-card/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${bentoItems[0].gradient} flex items-center justify-center mb-6`}>
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">{t("items.security.title")}</h3>
              <p className="text-muted-foreground mb-8">{t("items.security.description")}</p>
              
              {/* Animated stat */}
              <div className="mt-auto">
                <div className="text-5xl sm:text-6xl font-bold text-primary mb-2">
                  <AnimatedCounter value={99.9} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{t("items.security.stat")}</div>
              </div>

              {/* Security badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["SSL", "GDPR", "SOC2"].map((badge) => (
                  <span key={badge} className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Medium card - Speed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group"
          >
            <div className="h-full rounded-3xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-chart-5/30 hover:shadow-xl">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${bentoItems[1].gradient} flex items-center justify-center mb-4`}>
                <Zap className="h-6 w-6 text-chart-5" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("items.speed.title")}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("items.speed.description")}</p>
              <div className="text-3xl font-bold text-chart-5">
                {"<"}<AnimatedCounter value={50} suffix="ms" />
              </div>
            </div>
          </motion.div>

          {/* Medium card - Global */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group"
          >
            <div className="h-full rounded-3xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[oklch(0.55_0.15_200)]/30 hover:shadow-xl">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${bentoItems[2].gradient} flex items-center justify-center mb-4`}>
                <Globe className="h-6 w-6 text-[oklch(0.55_0.15_200)]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t("items.global.title")}</h3>
              <p className="text-sm text-muted-foreground mb-4">{t("items.global.description")}</p>
              <div className="text-3xl font-bold text-[oklch(0.55_0.15_200)]">
                <AnimatedCounter value={8} suffix="+" />
              </div>
            </div>
          </motion.div>

          {/* Small card - Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group"
          >
            <div className="h-full rounded-3xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-chart-4/30 hover:shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${bentoItems[3].gradient} flex items-center justify-center`}>
                  <HeadphonesIcon className="h-6 w-6 text-chart-4" />
                </div>
                <div className="text-2xl font-bold text-chart-4">24/7</div>
              </div>
              <h3 className="text-lg font-bold mb-1">{t("items.support.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("items.support.description")}</p>
            </div>
          </motion.div>

          {/* Small card - Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="group"
          >
            <div className="h-full rounded-3xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-chart-2/30 hover:shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${bentoItems[4].gradient} flex items-center justify-center`}>
                  <Layers className="h-6 w-6 text-chart-2" />
                </div>
                <div className="text-2xl font-bold text-chart-2">14+</div>
              </div>
              <h3 className="text-lg font-bold mb-1">{t("items.integrations.title")}</h3>
              <p className="text-sm text-muted-foreground">{t("items.integrations.description")}</p>
            </div>
          </motion.div>

          {/* Wide card - Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="sm:col-span-2 group"
          >
            <div className="h-full rounded-3xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-chart-3/30 hover:shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${bentoItems[5].gradient} flex items-center justify-center flex-shrink-0`}>
                  <TrendingUp className="h-7 w-7 text-chart-3" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{t("items.growth.title")}</h3>
                  <p className="text-muted-foreground">{t("items.growth.description")}</p>
                </div>
                <div className="text-4xl font-bold text-chart-3">
                  <AnimatedCounter value={300} suffix="%" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
