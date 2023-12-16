"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeHeaderState } from "@/redux/features/activeHeader.slice";

const About = () => {
  const lastClick = useAppSelector(
    (state) => state.activeHeader.timeOfLastClick || 0
  );
  const { ref, inView } = useInView({ threshold: 0.75 });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inView && Date.now() - lastClick > 1000)
      dispatch(changeHeaderState({ value: "About" }));
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>
      <p className="mb-3">
        After completing my intermediate studies, I decided to pursue my passion
        for programming. I enrolled in a 1-year MERN stack development course
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Web
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        cricket, video games, and watching movies. I also love{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">history</span>.
      </p>
    </motion.section>
  );
};

export default About;
