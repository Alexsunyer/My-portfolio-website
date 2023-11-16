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
      <p className="mb-3">
        After working for a long time as a{" "}
        <span className="font-bold">local manager</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-bold">full-stack web development</span>. My
        favorite part of programming is the{" "}
        <span className="font-bold">visual aspect</span>. I love the fact of
        being able to create so many styles and even awaken feelings in the
        user. My core stack is{" "}
        <span className="font-bold">React, Next.js and Node.js</span> and I am
        also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-bold">full-time position</span> as a software
        developer.
      </p>

      <p>
        I consider myself a{" "}
        <span className="font-bold">positive and perfectionist</span> person and
        I care about seeing the people around me{" "}
        <span className="font-bold">grow and improve</span>. When I'm not
        coding, I enjoy playing video games, and practicing sports such as
        running, gym or tennis. I also enjoy{" "}
        <span className="font-bold">learning new things</span>. I am currently
        learning about <span className="font-bold">psicology and finances</span>
        .
      </p>
    </motion.section>
  );
}
