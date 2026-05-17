"use client";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState, useEffect } from "react";
import {
  Sparkles,
  Bot,
  Languages,
  Lightbulb,
  Zap,
  MessageSquare,
  FileText,
  TrendingUp,
  Send,
} from "lucide-react";

const aiFeatures = [
  { key: "assistant", icon: Bot },
  { key: "translation", icon: Languages },
  { key: "insights", icon: Lightbulb },
  { key: "automation", icon: Zap },
  { key: "summaries", icon: FileText },
  { key: "predictions", icon: TrendingUp },
];

export function AIFeaturesSection() {
  const t = useTranslations("aiFeatures");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Simulated chat messages
  const chatMessages = [
    { role: "user", text: "Show me pending maintenance requests" },
    { role: "ai", text: "I found 12 pending maintenance requests. 3 are high priority. Would you like me to assign them to available technicians?" },
  ];

  // Typing animation
  useEffect(() => {
    if (isInView && !isTyping) {
      setIsTyping(true);
      const text = chatMessages[0].text;
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setTypedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  // Rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % aiFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Futuristic background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[oklch(0.14_0.02_330)] to-background" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.5 0.18 330 / 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.15 200 / 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.5 0.18 330 / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.5 0.18 330 / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6"
          >
            <Sparkles className="h-4 w-4" />
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            {t("title")}
            <br />
            <span className="bg-gradient-to-r from-primary via-[oklch(0.55_0.15_200)] to-[oklch(0.5_0.14_150)] bg-clip-text text-transparent">
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

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* AI Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3 bg-secondary/30">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-[oklch(0.55_0.15_200)] flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <motion.div
                    className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-chart-4 border-2 border-card"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm">AI Assistant</div>
                  <div className="text-xs text-muted-foreground">{t("alwaysReady")}</div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-4 space-y-4 min-h-[300px]">
                {/* User message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[80%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-primary-foreground text-sm">
                    {typedText}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-0.5 h-4 bg-primary-foreground ml-0.5 align-middle"
                    />
                  </div>
                </motion.div>

                {/* AI response */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 2 }}
                  className="flex gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div className="max-w-[85%]">
                    <div className="rounded-2xl rounded-tl-md bg-secondary/50 px-4 py-2.5 text-sm">
                      {chatMessages[1].text}
                    </div>
                    {/* Quick actions */}
                    <div className="flex gap-2 mt-2">
                      {["Assign All", "View List", "Priority Only"].map((action) => (
                        <button
                          key={action}
                          className="text-xs px-3 py-1.5 rounded-full border border-border/50 bg-card/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Input area */}
              <div className="border-t border-border/50 p-3 bg-secondary/20">
                <div className="flex items-center gap-2 rounded-xl bg-card/80 border border-border/50 px-3 py-2">
                  <input
                    type="text"
                    placeholder={t("askAnything")}
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                    readOnly
                  />
                  <button className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 rounded-xl border border-border/50 bg-card/90 p-3 shadow-lg backdrop-blur-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-[oklch(0.55_0.15_200)]" />
                <span className="text-xs font-medium">12 Languages</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 rounded-xl border border-border/50 bg-card/90 p-3 shadow-lg backdrop-blur-xl"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-chart-5" />
                <span className="text-xs font-medium">Instant Response</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => setActiveFeature(index)}
                className={`relative group cursor-pointer rounded-xl border p-4 transition-all duration-300 ${
                  activeFeature === index
                    ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border/50 bg-card/50 hover:border-border hover:bg-card/80"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`h-12 w-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeFeature === index
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground group-hover:bg-secondary/80"
                    }`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{t(`features.${feature.key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`features.${feature.key}.description`)}
                    </p>
                  </div>
                </div>

                {/* Active indicator */}
                {activeFeature === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
