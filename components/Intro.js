import Email from "./Email";
import { SectionHeading, SectionSubHeading } from "./Hero";
import {
  motion,
  useTransform,
  useMotionValue,
  useScroll,
  useViewportScroll,
} from "framer-motion";
import Header from "./Header";
import { useEffect } from "react";
import { Image } from "../utils/imageLoader";
import FAstronaut from '../public/flyingAstronaut.jpg'

const Title = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  useEffect(() => {
    scrollY.onChange((s) => console.log("scrollY ", s));
    scrollYProgress.onChange((s) => console.log("scrollYProgress ", s));
  }, [scrollY, scrollYProgress]);

  // const opacity = useTransform(pageScroll, [0, "100vh"]);

  return (
    <motion.div className="h-screen">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-center h-full flex flex-col justify-center items-center text-white"
        style={{  scale:scale }}
      >
        <div className="absolute opacity-5 -z-0">
          <Image src={FAstronaut}  alt="Flying Astronaut" width={900} height={900}></Image>
        </div>
        <button
          className="mb-4 normal-case text-lg text-primary rounded-lg px-4 duration-300 hover:bg-purple-300"
          style={{ backgroundColor: "#5f259f" }}
        >
          Beta Access
        </button>
        <SectionHeading>The Ultimate Modern Recruiting Platform</SectionHeading>
        <SectionSubHeading>
          Your next hire is just a flight away!
        </SectionSubHeading>
        <Email></Email>
      </motion.div>
    </motion.div>
  );
};

export default Title;
