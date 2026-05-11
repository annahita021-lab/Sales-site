"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 sm:py-24 lg:py-32" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl sm:rounded-3xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm sm:p-12 lg:p-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-auto mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-accent"
          >
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
          </motion.div>

          <h2 className="text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
            Ready to transform your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              property management
            </span>
            ?
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-muted-foreground px-2 sm:px-0">
            Say goodbye to management headaches. Take control with AI-powered simplicity and
            boost your success effortlessly.
          </p>

          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row px-4 sm:px-0">
            <Button
              size="lg"
              className="group gap-2 bg-primary px-6 sm:px-8 text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-transparent text-foreground hover:bg-secondary w-full sm:w-auto"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
