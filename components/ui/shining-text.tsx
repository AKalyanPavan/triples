"use client" 

import * as React from "react"

import { motion } from "motion/react";
 
export function ShiningText({textLeft, textRight, customStyle}) {
  return (
    <motion.h1
      className={`bg-[linear-gradient(110deg,#E6A424,35%,#fff,50%,#1E62AF,75%,#E6A424)] bg-[length:200%_100%] bg-clip-text text-base font-regular text-transparent ${customStyle}`}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 6,
        ease: "linear",
      }}
    >
      {textLeft}{textRight}
    </motion.h1>
  );
}