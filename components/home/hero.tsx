"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, Building2, Users, Wrench, BarChart3, Sparkles, Calendar } from "lucide-react";
import { useRef } from "react";

export function HomeHero() {
  const t = useTranslations("homeHero");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-20">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-0 h-[500px] w-[600px] sm:h-[800px] sm:w-[1200px] -translate-x-1/2 rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, var(--primary) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 top-1/4 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.15 200) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-0 bottom-1/4 h-[250px] w-[350px] sm:h-[400px] sm:w-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(ellipse, oklch(0.5 0.12 150) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern with fade */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              {t("badge")}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t("titleLine1")}
            <br />
            <span className="bg-gradient-to-r from-primary via-[oklch(0.55_0.15_200)] to-primary bg-clip-text text-transparent">
              {t("titleLine2")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl px-2 sm:px-0"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col gap-3 sm:gap-4 sm:flex-row px-4 sm:px-0"
          >
            <Link href="https://admin.propertycareapp.com/create-subscription/53/false/EN">
              <Button
                size="lg"
                className="group gap-2 bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              >
                {t("startFreeTrial")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="https://fire.chilipiper.com/me/property-careapp/meeting-with-propertycare">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border bg-transparent text-foreground hover:bg-secondary"
              >
                <Play className="h-4 w-4" />
                {t("bookDemo")}
              </Button>
            </Link>
          </motion.div>

          {/* Floating Module Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 sm:mt-20 relative w-full max-w-5xl"
          >
            {/* Central Dashboard Preview */}
            <div className="relative mx-auto rounded-2xl border border-border/50 bg-card/80 p-2 shadow-2xl backdrop-blur-xl">
              <div className="rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/30 p-4 sm:p-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">PropertyCare</div>
                      <div className="text-xs text-muted-foreground">Dashboard Overview</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-2.5 w-2.5 rounded-full bg-chart-4" />
                    <div className="h-2.5 w-2.5 rounded-full bg-chart-5" />
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { icon: Building2, label: "Properties", value: "248", change: "+12%" },
                    { icon: Users, label: "Tenants", value: "1,842", change: "+8%" },
                    { icon: Wrench, label: "Work Orders", value: "56", change: "-23%" },
                    { icon: BarChart3, label: "Revenue", value: "$2.4M", change: "+18%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="rounded-xl border border-border/50 bg-card/60 p-3 sm:p-4 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <stat.icon className="h-4 w-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{stat.label}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg sm:text-xl font-bold">{stat.value}</span>
                        <span className={`text-xs ${stat.change.startsWith("+") ? "text-chart-4" : "text-chart-5"}`}>
                          {stat.change}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -left-4 sm:-left-12 top-1/4 rounded-xl border border-border/50 bg-card/90 p-3 shadow-xl backdrop-blur-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-[oklch(0.55_0.15_200)]/20 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-[oklch(0.55_0.15_200)]" />
                </div>
                <div>
                  <div className="text-xs font-medium">AI Insights</div>
                  <div className="text-[10px] text-muted-foreground">3 recommendations</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 sm:-right-8 top-1/3 rounded-xl border border-border/50 bg-card/90 p-3 shadow-xl backdrop-blur-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-chart-4/20 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-chart-4" />
                </div>
                <div>
                  <div className="text-xs font-medium">Appointments</div>
                  <div className="text-[10px] text-muted-foreground">8 today</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 sm:mt-20 flex flex-col items-center gap-6"
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground">
              {t("trustedBy")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
              {["Emaar", "Damac", "Nakheel", "Meraas", "Aldar", "Sobha"].map((company) => (
                <span key={company} className="text-base sm:text-lg font-semibold tracking-tight">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
