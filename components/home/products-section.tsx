"use client";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import {
  Building2,
  Users,
  Wrench,
  BarChart3,
  Sparkles,
  Home,
  Calendar,
  MessageSquare,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    key: "sales",
    icon: Building2,
    gradient: "from-primary to-[oklch(0.45_0.14_310)]",
    features: ["virtualTours", "inventory", "analytics", "agents"],
  },
  {
    key: "crm",
    icon: Users,
    gradient: "from-[oklch(0.5_0.14_200)] to-[oklch(0.45_0.12_220)]",
    features: ["leads", "pipeline", "automation", "reports"],
  },
  {
    key: "maintenance",
    icon: Wrench,
    gradient: "from-[oklch(0.5_0.16_30)] to-[oklch(0.45_0.14_50)]",
    features: ["workOrders", "assets", "scheduling", "vendors"],
  },
  {
    key: "accounting",
    icon: BarChart3,
    gradient: "from-[oklch(0.5_0.12_150)] to-[oklch(0.45_0.10_170)]",
    features: ["invoicing", "payments", "budgets", "reports"],
  },
  {
    key: "property",
    icon: Home,
    gradient: "from-[oklch(0.45_0.14_280)] to-[oklch(0.4_0.12_300)]",
    features: ["units", "tenants", "leases", "amenities"],
  },
  {
    key: "communication",
    icon: MessageSquare,
    gradient: "from-[oklch(0.55_0.15_200)] to-[oklch(0.5_0.13_220)]",
    features: ["notifications", "announcements", "chat", "surveys"],
  },
];

export function ProductsSection() {
  const t = useTranslations("productsSection");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[oklch(0.55_0.15_200)]/5 blur-[100px]" />
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

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setActiveProduct(index)}
              className="group relative"
            >
              <div
                className={`relative h-full rounded-2xl border border-border/50 bg-card/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl ${
                  activeProduct === index ? "ring-1 ring-primary/20" : ""
                }`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${product.gradient} p-0.5 mb-6`}
                >
                  <div className="h-full w-full rounded-[14px] bg-card flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                  {t(`products.${product.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-6 line-clamp-3">
                  {t(`products.${product.key}.description`)}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{t(`products.${product.key}.features.${feature}`)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  <span>{t("exploreModule")}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">{t("customSolution")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://admin.propertycareapp.com/create-subscription/53/false/EN">
              <Button size="lg" className="gap-2">
                {t("startTrial")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://fire.chilipiper.com/me/property-careapp/meeting-with-propertycare">
              <Button size="lg" variant="outline" className="gap-2">
                {t("contactSales")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
