"use client"
import React from 'react'
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
  } from "@/components/ui/text-reveal-card";

const Hero_1 = () => {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full px-4 sm:px-6 md:px-8">
    <TextRevealCard
      text="Wanna Join The Cbse Community?"
      revealText="https://discord.gg/FsyJJdnBYe"
    >
      <TextRevealCardTitle>
        Sometimes, you just need to see it.
      </TextRevealCardTitle>
      <TextRevealCardDescription>
        This is a text reveal card. Hover over the card to reveal the hidden
        text.
      </TextRevealCardDescription>
    </TextRevealCard>
  </div>
  )
}

export default Hero_1
