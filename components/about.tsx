"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-2xl leading-loose">
        After enrolling in a{" "}
        <span className="font-bold">full-stack web development bootcamp</span> I
        discovered my passion for programming. My favorite part is the{" "}
        <span className="font-bold">visual aspect</span>. I love the fact of
        being able to create so many styles and even awaken feelings in the
        user. I am currently looking for a{" "}
        <span className="font-bold">full-time position</span> as a full-stack or
        frontend developer.
      </p>
    </motion.section>
  );
}
