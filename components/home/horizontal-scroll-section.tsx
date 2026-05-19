"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, MessageSquare, Calendar, ClipboardList, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const features = [
  {
    id: "work-orders",
    title: "Work Orders that run smoothly",
    description:
      "A system that manages maintenance requests, tracks progress, sends notifications, and hands off cleanly to other teams without third-party tools or integrations.",
    pills: [
      "Higher completion rates",
      "Fewer handoffs",
      "Less manual work",
      "Native to platform",
    ],
    cta: "Explore Work Orders",
    ctaLink: "/products/maintenance",
  },
  {
    id: "selling",
    title: "Seamless Selling Experience",
    description:
      "A native sales engine that powers expert property services with real-time visibility, fast follow-up, and transparent reporting.",
    pills: [
      "Faster closings",
      "Fewer delays",
      "Real-time visibility",
      "AI-assisted workflows",
    ],
    cta: "Explore Sales",
    ctaLink: "/products/sales",
  },
  {
    id: "ai-chat",
    title: "AI Chat that understands",
    description:
      "An AI assistant built for speed and efficiency. AI-powered responses let tenants spend time with answers, not waiting.",
    pills: [
      "Instant responses",
      "AI documentation",
      "Higher satisfaction",
      "Faster resolution",
    ],
    cta: "Explore AI Chat",
    ctaLink: "/products/ai",
  },
  {
    id: "reservations",
    title: "Reservations made simple",
    description:
      "A reservation system that manages bookings, tracks availability, sends confirmations, and syncs with your calendar seamlessly.",
    pills: [
      "Real-time availability",
      "Automated confirmations",
      "Calendar sync",
      "Easy rescheduling",
    ],
    cta: "Explore Reservations",
    ctaLink: "/products/reservations",
  },
];

// Work Orders Mockup - Kanban style
function WorkOrdersMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <div className="flex gap-4">
          {/* New Column */}
          <div className="flex-1">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">New Requests</h4>
            <div className="space-y-2">
              <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center">
                    <span className="text-xs font-medium">AK</span>
                  </div>
                  <span className="font-medium text-sm">Alex Kim</span>
                </div>
                <p className="text-xs text-muted-foreground">AC not working</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                    <span className="text-xs font-medium">DC</span>
                  </div>
                  <span className="font-medium text-sm">Daniel Cruz</span>
                </div>
                <p className="text-xs text-muted-foreground">Leaky faucet</p>
              </div>
            </div>
          </div>
          {/* In Progress Column */}
          <div className="flex-1">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">In Progress</h4>
            <div className="space-y-2">
              <div className="bg-green-50 rounded-xl p-3 border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Emma Smith"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="font-medium text-sm">Emma Smith</span>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <Check className="w-3 h-3" />
                  <span className="text-xs">Assigned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Selling Mockup - Property cards
function SellingMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="relative">
        {/* Main property card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-72">
          <div className="relative h-40">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop"
              alt="Property"
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              For Sale
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-semibold">Modern Villa</h4>
            <p className="text-sm text-muted-foreground">Austin, TX</p>
            <p className="text-lg font-bold text-primary mt-2">$425,000</p>
          </div>
        </div>
        {/* Floating offer card */}
        <div className="absolute -right-8 top-12 bg-white rounded-xl shadow-lg p-3 w-48">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              alt="James Smith"
              width={28}
              height={28}
              className="rounded-full"
            />
            <div>
              <p className="text-xs font-medium">James Smith</p>
              <p className="text-[10px] text-muted-foreground">5.0★ • Buyer</p>
            </div>
          </div>
          <p className="text-xs bg-green-50 text-green-700 p-2 rounded-lg">
            Offering $430,000
          </p>
        </div>
      </div>
    </div>
  );
}

// AI Chat Mockup
function AIChatMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-primary" />
          </div>
          <span className="font-medium text-sm">AI Assistant</span>
          <span className="ml-auto text-xs text-green-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Online
          </span>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-muted flex-shrink-0"></div>
            <div className="bg-muted rounded-xl rounded-tl-none p-3 max-w-[80%]">
              <p className="text-xs">When is my rent due?</p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="bg-primary text-primary-foreground rounded-xl rounded-tr-none p-3 max-w-[80%]">
              <p className="text-xs">Your rent of $1,850 is due on the 1st of each month. You can pay through the portal or set up autopay.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-muted flex-shrink-0"></div>
            <div className="bg-muted rounded-xl rounded-tl-none p-3">
              <p className="text-xs">Can I submit a maintenance request?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reservations Mockup - Calendar style
function ReservationsMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">May 2026</h4>
          <div className="flex gap-1">
            <button className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs">←</button>
            <button className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs">→</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={i} className="text-muted-foreground py-1">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {[...Array(31)].map((_, i) => (
            <span
              key={i}
              className={`py-2 rounded-lg ${
                i === 18 || i === 19 || i === 20
                  ? "bg-primary text-primary-foreground"
                  : i === 14 || i === 15
                  ? "bg-amber-100 text-amber-700"
                  : "hover:bg-muted"
              }`}
            >
              {i + 1}
            </span>
          ))}
        </div>
        {/* Reservation card */}
        <div className="mt-4 p-3 bg-primary/5 rounded-xl border border-primary/20">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs font-medium">Amenity Booking</p>
              <p className="text-[10px] text-muted-foreground">May 19-21 • Pool Area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const getMockup = () => {
    switch (index) {
      case 0:
        return <WorkOrdersMockup />;
      case 1:
        return <SellingMockup />;
      case 2:
        return <AIChatMockup />;
      case 3:
        return <ReservationsMockup />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-shrink-0 w-[90vw] md:w-[80vw] lg:w-[70vw] h-full px-4 md:px-8">
      <div className="h-full bg-[#e8ede5] rounded-3xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 leading-tight">
            {feature.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-md">
            {feature.description}
          </p>
          
          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {feature.pills.map((pill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs md:text-sm bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-foreground/80"
              >
                <span className="w-1 h-1 bg-foreground/40 rounded-full"></span>
                {pill}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="w-fit group" asChild>
            <a href={feature.ctaLink}>
              {feature.cta}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Right mockup */}
        <div className="flex-1 relative min-h-[300px] lg:min-h-0">
          {getMockup()}
        </div>
      </div>
    </div>
  );
}

export function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll progress to horizontal translation
  // We want to move from 0% to -(100% * (numCards - 1))
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(features.length - 1) * 100}%`]
  );

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      {/* Section title - positioned above the sticky container */}
      <div className="sticky top-0 z-10 bg-background pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif italic tracking-tight text-center text-foreground"
          >
            Everything you need to manage properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            Powerful tools designed to streamline every aspect of property management
          </motion.p>
        </div>
      </div>

      {/* Sticky horizontal scroll container */}
      <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full py-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
