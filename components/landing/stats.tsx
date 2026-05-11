"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years of Excellence", description: "Trusted by industry leaders" },
  { value: 500, suffix: "K+", label: "Properties Managed", description: "Across multiple regions" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Based on user feedback" },
  { value: 24, suffix: "/7", label: "Support Available", description: "Always here to help" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(0, {
    duration: 2000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 sm:py-24 lg:py-32" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-ivory/40 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight lg:text-4xl px-2 sm:px-0">
            Powering the future of{" "}
            <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              real estate
            </span>
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-muted-foreground px-2 sm:px-0">
            Numbers that speak to our commitment to excellence and innovation.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-8 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-card p-4 sm:p-8 text-center backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-ivory/20 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="relative text-3xl sm:text-5xl font-bold tracking-tight">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="relative mt-2 sm:mt-3 text-sm sm:text-lg font-medium">{stat.label}</p>
              <p className="relative mt-1 text-xs sm:text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
