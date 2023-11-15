import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBrush, FaWineGlassAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import emojiCardGame from "@/public/emojiCardGame.png";
import hackanews from "@/public/Hackanews.png";
import btrfootwear from "@/public/btrfootwear.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Animation & VFX Degree",
    location: "La Salle, Barcelona",
    description:
      "Studied an international 'Animation & VFX' degree, that included computer generated imagery, special effects and 3D artwork.",
    icon: React.createElement(FaBrush),
    date: "Expected graduation - 2022",
  },
  {
    title: "Waitress & Catering",
    location: "Spain, Barcelona",
    description:
      "Worked as a waitress and as a local manager in some restaurants and locals of Barcelona.",
    icon: React.createElement(FaWineGlassAlt),
    date: "2020 - 2023",
  },
  {
    title: "Full-Stack bootcamp HACKABOSS",
    location: "Remote",
    description:
      "After getting interested in programming, I graduated after 6 months of studying. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer Junior",
    location: "TEINOR.SA, Barcelona",
    description:
      "I worked as a full-stack developer for 2 months in 1 job and I upskilled in some more developer tools.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Javascript Memory Card Game",
    description:
      "I worked on this project with the purpose of learning more about JavaScript and DOM. It is about an interactive card game called Memory",
    tags: ["JavaScript", "CSS", "DOM"],
    imageUrl: emojiCardGame,
  },
  {
    title: "Hack a News",
    description:
      "News web portal created for the final project of the Bootcamp. It is a forum where you can create, edit, comment and rate news.",
    tags: ["MySQL", "Nodejs", "ReactJS", "CSS"],
    imageUrl: hackanews,
  },
  {
    title: "BTRFOOTWEAR",
    description:
      "It is a full-stack foot wear ecommerce made with ReactJS and Typescript. I used Sequelize, Redux and Sass too.",
    tags: [
      "MySQL",
      "Nodejs",
      "Sequelize",
      "ReactJS",
      "Nodejs",
      "Typescript",
      "Redux",
      "Sass",
    ],
    imageUrl: btrfootwear,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
