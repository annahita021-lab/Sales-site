"use client";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    key: "testimonial1",
    author: "Michael Johnson",
    role: "Property Manager",
    company: "Emaar Properties",
    rating: 5,
  },
  {
    key: "testimonial2",
    author: "James Carter",
    role: "Tower Administrator",
    company: "Damac Towers",
    rating: 5,
  },
  {
    key: "testimonial3",
    author: "Sarah Ahmed",
    role: "Operations Director",
    company: "Nakheel",
    rating: 5,
  },
  {
    key: "testimonial4",
    author: "David Chen",
    role: "Facilities Manager",
    company: "Meraas",
    rating: 5,
  },
];

export function HomeTestimonials() {
  const t = useTranslations("homeTestimonials");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
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

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl border border-border/50 bg-card/80 p-8 sm:p-12 backdrop-blur-xl">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 sm:left-12">
              <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                <Quote className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[activeIndex].rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8"
              >
                &ldquo;{t(`items.${testimonials[activeIndex].key}.quote`)}&rdquo;
              </motion.blockquote>

              {/* Author */}
              <motion.div
                key={`author-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonials[activeIndex].author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonials[activeIndex].author}</div>
                  <div className="text-muted-foreground">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="h-10 w-10 rounded-full border border-border/50 bg-card/80 flex items-center justify-center transition-colors hover:bg-secondary hover:border-primary/30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="h-10 w-10 rounded-full border border-border/50 bg-card/80 flex items-center justify-center transition-colors hover:bg-secondary hover:border-primary/30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Testimonial cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.key}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                index === activeIndex
                  ? "border-primary/50 bg-primary/5"
                  : "border-border/50 bg-card/50 hover:border-border hover:bg-card/80"
              }`}
            >
              <div className="flex gap-1 mb-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
              <div className="font-medium text-sm mb-1">{testimonial.author}</div>
              <div className="text-xs text-muted-foreground">{testimonial.company}</div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
