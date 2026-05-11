"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Bot,
  Search,
  Bell,
  Settings,
  Home,
  Users,
  FileText,
  BarChart3,
  Calendar,
  MessageSquare,
  Send,
  Sparkles,
  User,
  Clock,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  MoreHorizontal,
  ArrowRight,
  Zap,
} from "lucide-react";

// Dashboard mock data
const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Users, label: "Clients" },
  { icon: FileText, label: "Requests" },
  { icon: Calendar, label: "Viewings" },
  { icon: BarChart3, label: "Analytics" },
  { icon: MessageSquare, label: "Messages" },
];

const recentRequests = [
  { id: "5360220352", name: "Matt Fakri", status: "pending", type: "Unit Inquiry" },
  { id: "5360220348", name: "Sarah Chen", status: "assigned", type: "Viewing Request" },
  { id: "5360220341", name: "Omar Hassan", status: "completed", type: "Contract Review" },
  { id: "5360220339", name: "Lisa Park", status: "pending", type: "Price Negotiation" },
];

export function LetAIHandle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showSidebar, setShowSidebar] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [typedPrompt, setTypedPrompt] = useState("");
  
  const fullPrompt = "Who is 5360220352?";

  // Animation sequence
  useEffect(() => {
    if (isInView) {
      // Show sidebar after 0.5s
      const sidebarTimer = setTimeout(() => setShowSidebar(true), 500);
      
      // Start typing animation after sidebar appears
      const typingStart = setTimeout(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
          if (index <= fullPrompt.length) {
            setTypedPrompt(fullPrompt.slice(0, index));
            index++;
          } else {
            clearInterval(typeInterval);
            // Show typing indicator
            setTimeout(() => setShowTyping(true), 300);
            // Show response
            setTimeout(() => {
              setShowTyping(false);
              setShowResponse(true);
            }, 1500);
          }
        }, 80);
        
        return () => clearInterval(typeInterval);
      }, 1200);

      return () => {
        clearTimeout(sidebarTimer);
        clearTimeout(typingStart);
      };
    }
  }, [isInView]);

  return (
    <section id="let-ai-handle" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Zap className="h-4 w-4" />
            Smart Workflow Assistant
          </span>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Let AI Handle It
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Your intelligent assistant works directly inside your dashboard, helping you manage
            requests, assign tasks, and communicate with clients seamlessly.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Browser frame */}
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-primary/5">
            {/* Browser header */}
            <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/50 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-chart-5/60" />
                <div className="h-3 w-3 rounded-full bg-chart-4/60" />
              </div>
              <div className="ml-4 flex flex-1 items-center gap-2 rounded-lg bg-background/50 px-3 py-1.5">
                <Search className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">app.propertycare.io/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="relative flex h-[520px]">
              {/* Sidebar navigation */}
              <div className={`flex w-16 flex-col border-r border-border/50 bg-secondary/30 py-4 transition-all duration-500 ${showSidebar ? "opacity-50 blur-[1px]" : ""}`}>
                {sidebarItems.map((item, index) => (
                  <button
                    key={item.label}
                    className={`mx-2 mb-1 flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>

              {/* Main content area */}
              <div className={`flex-1 overflow-hidden transition-all duration-500 ${showSidebar ? "opacity-40 blur-[2px]" : ""}`}>
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-border/50 px-6 py-4">
                  <div>
                    <h3 className="text-lg font-semibold">Request Management</h3>
                    <p className="text-sm text-muted-foreground">12 pending requests today</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="rounded-lg p-2 hover:bg-secondary">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                    </button>
                    <button className="rounded-lg p-2 hover:bg-secondary">
                      <Settings className="h-5 w-5 text-muted-foreground" />
                    </button>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-4 gap-4 p-6">
                  {[
                    { label: "Pending", value: "12", color: "text-chart-5" },
                    { label: "In Progress", value: "28", color: "text-primary" },
                    { label: "Completed", value: "156", color: "text-chart-4" },
                    { label: "This Week", value: "94%", color: "text-chart-4" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border/50 bg-secondary/30 p-4">
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Requests table */}
                <div className="px-6">
                  <div className="rounded-xl border border-border/50 bg-secondary/20">
                    <div className="border-b border-border/50 px-4 py-3">
                      <h4 className="font-medium">Recent Requests</h4>
                    </div>
                    <div className="divide-y divide-border/50">
                      {recentRequests.map((request) => (
                        <div key={request.id} className="flex items-center justify-between px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                              <User className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{request.name}</p>
                              <p className="text-xs text-muted-foreground">#{request.id}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">{request.type}</span>
                            <span className={`rounded-full px-2 py-0.5 text-xs ${
                              request.status === "pending" ? "bg-chart-5/10 text-chart-5" :
                              request.status === "assigned" ? "bg-primary/10 text-primary" :
                              "bg-chart-4/10 text-chart-4"
                            }`}>
                              {request.status}
                            </span>
                            <button className="rounded p-1 hover:bg-secondary">
                              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Sidebar */}
              <AnimatePresence>
                {showSidebar && (
                  <motion.div
                    initial={{ x: 400, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                    }}
                    exit={{ x: 400, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="absolute right-0 top-0 flex h-full w-[380px] flex-col border-l border-primary/20 bg-card/95 backdrop-blur-xl"
                    style={{
                      boxShadow: "-20px 0 60px -15px rgba(var(--primary), 0.15)",
                    }}
                  >
                    {/* Glow effect */}
                    <div className="pointer-events-none absolute -left-20 top-0 h-full w-20 bg-gradient-to-r from-transparent to-primary/5" />
                    
                    {/* Sidebar header */}
                    <motion.div 
                      className="flex items-center gap-3 border-b border-border/50 px-4 py-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="relative">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                          <Bot className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <motion.div
                          className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-card bg-chart-4"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">AI Assistant</p>
                        <p className="text-xs text-muted-foreground">Always ready to help</p>
                      </div>
                      <Sparkles className="h-5 w-5 text-primary" />
                    </motion.div>

                    {/* Conversation area */}
                    <div className="flex-1 overflow-y-auto p-4">
                      <div className="space-y-4">
                        {/* User message */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex justify-end"
                        >
                          <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-primary px-4 py-3 text-primary-foreground">
                            <p className="text-sm">{typedPrompt}<span className="animate-pulse">|</span></p>
                          </div>
                        </motion.div>

                        {/* Typing indicator */}
                        <AnimatePresence>
                          {showTyping && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="flex justify-start"
                            >
                              <div className="rounded-2xl rounded-tl-md bg-secondary/80 px-4 py-3">
                                <div className="flex gap-1">
                                  <motion.div
                                    className="h-2 w-2 rounded-full bg-muted-foreground/60"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                  />
                                  <motion.div
                                    className="h-2 w-2 rounded-full bg-muted-foreground/60"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }}
                                  />
                                  <motion.div
                                    className="h-2 w-2 rounded-full bg-muted-foreground/60"
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* AI Response */}
                        <AnimatePresence>
                          {showResponse && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4 }}
                              className="space-y-3"
                            >
                              {/* Main response card */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="overflow-hidden rounded-2xl rounded-tl-md border border-border/50 bg-secondary/50"
                              >
                                {/* Client info header */}
                                <div className="border-b border-border/50 bg-secondary/80 px-4 py-3">
                                  <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-chart-1 to-chart-2 text-sm font-semibold text-primary-foreground">
                                      MF
                                    </div>
                                    <div>
                                      <p className="font-medium">Matt Fakri</p>
                                      <p className="text-xs text-muted-foreground">Request #5360220352</p>
                                    </div>
                                    <span className="ml-auto rounded-full bg-chart-5/10 px-2 py-0.5 text-xs text-chart-5">
                                      Pending
                                    </span>
                                  </div>
                                </div>

                                {/* Response content */}
                                <div className="p-4 text-sm">
                                  <p className="leading-relaxed text-foreground/90">
                                    Request #5360220352 belongs to <span className="font-medium">Matt Fakri</span> and is currently marked as a <span className="text-chart-5 font-medium">pending unit inquiry</span>. The buyer is interested in an in-person viewing and prefers a quick confirmation.
                                  </p>

                                  {/* Recommendation */}
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3"
                                  >
                                    <div className="mb-2 flex items-center gap-2">
                                      <Sparkles className="h-4 w-4 text-primary" />
                                      <span className="text-xs font-medium text-primary">Recommended Next Step</span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-foreground/80">
                                      Assign this request to <span className="font-medium">Ali</span>, as he speaks Spanish and is in a more suitable time zone for communicating with this client.
                                    </p>
                                  </motion.div>

                                  {/* Additional suggestions */}
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-4"
                                  >
                                    <p className="mb-2 text-xs font-medium text-muted-foreground">Additional Suggestions</p>
                                    <ul className="space-y-1.5">
                                      {[
                                        "Confirm unit availability",
                                        "Send a follow-up message with the nearest available time slots",
                                        "Generate a summary of negotiations and support tickets",
                                      ].map((suggestion, index) => (
                                        <motion.li
                                          key={index}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 0.6 + index * 0.1 }}
                                          className="flex items-start gap-2 text-sm text-foreground/70"
                                        >
                                          <ChevronRight className="mt-0.5 h-3.5 w-3.5 text-primary" />
                                          {suggestion}
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                </div>
                              </motion.div>

                              {/* Action buttons */}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap gap-2"
                              >
                                {[
                                  { label: "Assign to Ali", primary: true },
                                  { label: "Send Follow-up", primary: false },
                                  { label: "View Client Summary", primary: false },
                                ].map((action, index) => (
                                  <motion.button
                                    key={action.label}
                                    whileHover={{ scale: 1.02, y: -1 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                                      action.primary
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                        : "border border-border/50 bg-secondary/50 text-foreground hover:bg-secondary"
                                    }`}
                                  >
                                    {action.label}
                                    {action.primary && <ArrowRight className="h-3.5 w-3.5" />}
                                  </motion.button>
                                ))}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Input area */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="border-t border-border/50 bg-secondary/30 p-4"
                    >
                      <div className="flex items-center gap-2 rounded-xl border border-border/50 bg-background px-4 py-3">
                        <input
                          type="text"
                          placeholder="Ask anything about your requests..."
                          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                          readOnly
                        />
                        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform hover:scale-105">
                          <Send className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-2 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                        <Sparkles className="h-3 w-3" />
                        <span>Powered by PropertyCare AI</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
