"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeHeaderState } from "@/redux/features/activeHeader.slice";

const Intro = () => {
  const lastClick = useAppSelector(
    (state) => state.activeHeader.timeOfLastClick || 0
  );
  const { ref, inView } = useInView({ threshold: 0.6 });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inView && Date.now() - lastClick > 1000)
      dispatch(changeHeaderState({ value: "Home" }));
  }, [inView, dispatch, lastClick]);

  return (
    <section
      ref={ref}
      className="max-w-[50rem] mb-0 text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.png"
              alt="Qurban potrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full w-24 h-24 border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-2xl lg:text-3xl 2xl:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Qurban.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 md:text-lg font-medium"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900  text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 active:scale-95 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <Link
          href={"/CV.pdf"}
          download={true}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 transition border border-black/10"
        >
          Contact me here{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </Link>
        <Link
          href={"https://www.linkedin.com"}
          className="group bg-white p-4 text-gray-500 flex items-center gap-2 rounded-full hover:text-sky-600 transition border border-black/10"
          target="_blank"
        >
          <BsLinkedin className="group-hover:scale-110 transition" />
        </Link>
        <Link
          href={"https://www.linkedin.com"}
          className="group bg-white p-4 text-gray-500 text-[1.25rem] flex items-center gap-2 rounded-full hover:text-gray-950 transition border border-black/10"
          target="_blank"
        >
          <FaGithubSquare className="group-hover:scale-110 transition" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Intro;
