import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBrush, FaWineGlassAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import emojiCardGame from "@/public/emojiCardGame.png";
import hackanews from "@/public/Hackanews.png";
import btrfootwear from "@/public/btrfootwear.png";
import myPortfolio from "@/public/myPortfolio.png";

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
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack web development bootcamp",
    location: "HACKABOSS, Remote",
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
    title: "FOOTWEAR ECOMMERCE",
    description:
      "Foot wear ecommerce made with Postgres, ReactJS and Typescript. I used Sequelize, Redux and Sass too.",
    tags: [
      "Postgres",
      "Node.js",
      "Sequelize",
      "React",
      "Typescript",
      "Redux",
      "Sass",
    ],
    imageUrl: btrfootwear,
    link: "https://github.com/Alexsunyer/BTRFOOTWEAR",
  },
  {
    title: "NEWS PORTAL",
    description:
      "News web portal created for the final project of the Bootcamp. Users can edit their profile and create, edit, comment and rate news.",
    tags: ["SQL", "Node.js", "React", "CSS"],
    imageUrl: hackanews,
    link: "https://github.com/Alexsunyer/Noticias_Colaborativas",
  },
  {
    title: "MEMORY CARD GAME",
    description:
      "I worked on this project with the purpose of learning more about JavaScript and DOM. It is about an interactive card game called Memory.",
    tags: ["JavaScript", "CSS", "DOM"],
    imageUrl: emojiCardGame,
    link: "https://github.com/Alexsunyer/17rt-parejas-emojis",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "SQL",
  "PostgreSQL",
  "Node.js",
  "Express.js",
  "React",
  "Redux",
  "Next.js",
  "TailwindCSS",
  "Framer Motion",
  "Git",
] as const;
