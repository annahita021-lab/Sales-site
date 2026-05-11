"use client";

import { motion } from "framer-motion";

const daysData = [
  { day: "Sun", date: 10, selected: false },
  { day: "Mon", date: 11, selected: false },
  { day: "Tue", date: 12, selected: true },
  { day: "Wed", date: 13, selected: false },
  { day: "Thu", date: 14, selected: false },
  { day: "Fri", date: 15, selected: false },
  { day: "Sat", date: 16, selected: false },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const dayCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const timeSlotVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.03,
      duration: 0.25,
      ease: "easeOut",
    },
  }),
};

export function BookingDemo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      {/* Subtle floating effect on container */}
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Month navigation header */}
        <motion.div
          variants={itemVariants}
          className="mb-4 flex items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base font-semibold text-foreground"
          >
            May 2026
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Week strip with day cards */}
        <motion.div variants={itemVariants} className="mb-6 flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <div className="flex flex-1 justify-center gap-1">
            {daysData.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={dayCardVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`flex w-12 cursor-pointer flex-col items-center rounded-xl py-2 transition-colors ${
                  item.selected
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border border-border bg-background/50 text-foreground hover:bg-muted"
                }`}
              >
                {item.selected && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-primary"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(112, 25, 81, 0.4)",
                        "0 0 0 8px rgba(112, 25, 81, 0)",
                        "0 0 0 0 rgba(112, 25, 81, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
                <span className={`relative z-10 text-xs ${item.selected ? "text-primary-foreground" : "text-muted-foreground"}`}>
                  {item.day}
                </span>
                <span className="relative z-10 text-sm font-semibold">{item.date}</span>
              </motion.div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Time slot section heading */}
        <motion.div
          variants={itemVariants}
          className="mb-3 text-center text-sm font-medium text-foreground"
        >
          Select Hours for Tuesday, May 12
        </motion.div>

        {/* Time slot grid - 4 columns */}
        <div className="grid grid-cols-4 gap-2">
          {timeSlots.map((time, i) => {
            const isSelected = time === "09:30";
            return (
              <motion.button
                key={i}
                custom={i}
                variants={timeSlotVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-xl py-2 text-sm font-medium transition-colors ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "border border-border bg-background/50 text-foreground hover:bg-muted"
                }`}
              >
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-primary"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(112, 25, 81, 0.3)",
                        "0 0 0 4px rgba(112, 25, 81, 0)",
                        "0 0 0 0 rgba(112, 25, 81, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                  />
                )}
                <span className="relative z-10">{time}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Selection summary */}
        <motion.div
          variants={itemVariants}
          className="mt-4 text-center text-sm text-muted-foreground"
        >
          You selected time from{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-semibold text-foreground"
          >
            09:30
          </motion.span>{" "}
          to{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="font-semibold text-foreground"
          >
            10:00
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
