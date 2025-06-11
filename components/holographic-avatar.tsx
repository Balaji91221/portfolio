"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HolographicAvatar() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Holographic rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-0 rounded-full border-2 border-primary/20"
        style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-purple-500/20"
        style={{ width: "140%", height: "140%", top: "-20%", left: "-20%" }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-pink-500/20"
        style={{ width: "160%", height: "160%", top: "-30%", left: "-30%" }}
      />

      {/* Avatar container */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative w-80 h-80 rounded-full overflow-hidden holographic glass border-4 border-primary/30 mx-auto"
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-purple-500/10" />
        
        {/* Image container with proper centering */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/Balaji.jpg"
            alt="Kelavath Balaji Naik"
            width={320}
            height={320}
            className="object-cover object-top w-full h-full"
            priority
          />
        </div>

        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 mix-blend-overlay" />

        {/* Scanning line effect */}
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
        />
      </motion.div>

      {/* Floating particles around avatar */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.cos((i * 60 * Math.PI) / 180) * 40],
            y: [0, Math.sin((i * 60 * Math.PI) / 180) * 40],
            rotate: 360,
          }}
          transition={{
            duration: 8 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/60 rounded-full"
          style={{
            transformOrigin: `${Math.cos((i * 60 * Math.PI) / 180) * 120}px ${Math.sin((i * 60 * Math.PI) / 180) * 120}px`,
          }}
        />
      ))}
    </div>
  )
}