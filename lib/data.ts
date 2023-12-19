import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "MERN Stack Development Course Completion",
    location: "Lahore, Pakistan",
    description:
      "I proudly completed a rigorous 1-year MERN Stack Development course at VVork Cloud Technologies. This immersive program has honed my skills in the full-stack development landscape, preparing me for the dynamic challenges of the tech industry.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Junior Instructor",
    location: "Lahore, Pakistan",
    description:
      "After completing a year-long MERN Stack Development course with VVork Cloud Technologies, I was hired as a Junior Instructor, blending my newly acquired skills with the opportunity to guide others in their learning journey.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "MERN Stack Developer at AI Networks",
    location: "Lahore, Pakistan",
    description:
      "I took on the role of MERN Stack Developer at AI Networks, engaging in impactful projects during a 3-month contract. This experience allowed me to contribute to the dynamic field of web development within the innovative environment of AI Networks.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "MERN Stack Developer at Craftoo",
    location: "Lahore, Pakistan",
    description:
      "Currently based in Craftoo, I am actively contributing as a MERN Stack Developer. Excited to be part of a dynamic team, I am engaged in crafting innovative solutions and enhancing my skills in the ever-evolving world of web development.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "Sass",
  "Bootstrap",
  "Vite",
] as const;
