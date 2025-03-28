"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";

const Hero = () => {
  return (
    <div>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-zinc-400 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Welcome! This Is The Landing Page For The CBSE Community. Thank You For
          Visiting The Page. We are Sorry to inform that{" "}
          <Highlight className="text-black dark:text-zinc-200">
            The Website Is Under Construction.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
