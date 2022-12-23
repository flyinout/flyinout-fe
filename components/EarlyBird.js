import { Image } from "../utils/imageLoader";
import Email from "./Email";
import { SectionHeading, SectionSubHeading } from "./Hero";
import { Responsive } from "./ResponsiveWidth";
import CheckIcon from "../public/checkIcon.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  offscreen: {
    x: "-100vw",
  },
  onscreen: {
    x: 0,
    transition: { delay: 0.5, duration: 1 },
  },
};

export default function EarlyBird() {
  return (
    <>
      <div className="text-center flex flex-col w-full items-center mt-10 mb-8">
        <SectionHeading>Built for Product and Tech</SectionHeading>
        <SectionSubHeading>
          Specifically designed for recruiting people for Technical and Product
          roles. Helping you soar to success with the right hire.
          <br /> Bringing the best together!
        </SectionSubHeading>
      </div>
      <div
        className="relative flex flex-col mx-4 rounded-lg md:mx-auto md:flex-row md:p-8 md:max-w-4xl"
        style={{
          background:
            "linear-gradient(180deg, #1E1B26 0%, rgba(30, 27, 38, 0) 100%)",
          border: "1px solid rgba(148, 141, 169, 0.35)",
        }}
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="md:w-1/2 w-full p-4"
        >
          <motion.h1 whileHover={{ scale: 1.1 }} className="text-lg font-bold my-2 text-primary">
            Join Early
          </motion.h1>
          <motion.p whileHover={{ scale: 1.1 }} className="text-secondary">
            Specifically designed for recruiting people for Technical and
            Product related roles.
          </motion.p>
          <div className="mt-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center "
            >
              <Image src={CheckIcon} alt="Check" height={15} width={15} />{" "}
              <span className="text-secondary ml-2"> Product Updates</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center "
            >
              <Image src={CheckIcon} alt="Check" height={15} width={15} />{" "}
              <span className="text-secondary ml-2">Early Access</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center "
            >
              <Image src={CheckIcon} alt="Check" height={15} width={15} />{" "}
              <span className="text-secondary ml-2">
                Subscription Discounts
              </span>
            </motion.div>
          </div>
          <div className="-ml-4 mt-4 -mb-4">
            <Email />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            background: `url('${"./image.png"}')`,
            width: "40%",
            height: "68%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="absolute hidden md:block bg-white rounded-tl-xl md:h-5/6 md:w-5/12 right-0 bottom-0"
        ></motion.div>
      </div>
    </>
  );
}
