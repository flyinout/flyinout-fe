import { Image } from "../utils/imageLoader";
import { Responsive } from "./ResponsiveWidth";
import ProductLogo from "../public/ProductLogo.png";
import { SectionHeading, SectionSubHeading } from "./Hero";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Automations() {
  const { scrollYProgress } = useViewportScroll();
  const assembleX = useTransform(scrollYProgress, [0, 1], [-200, 100]);
  const bringOnX = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <>
      <motion.div className="text-center w-full sm:flex sm:flex-col sm:justify-center sm:items-center z-20">
        <SectionHeading>Broaden your recruitment horizon</SectionHeading>
      </motion.div>
      <div className="my-8 flex flex-col items-center md:flex-row md:justify-center md:items-stretch md:mx-auto px-4 md:max-w-4xl">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100vw", opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col rounded-lg justify-end w-full md:w-7/12 h-auto overflow-x-hidden"
          style={{ background: "#383440", x: assembleX }}
        >
          <Icon icon={faRocket} size="6x" style={{ color: "#fff" }} />
          <div
            className="w-full h-16 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(0deg, rgba(148, 141, 169, 0.3) 0%, rgba(148, 141, 169, 0) 68.54%, rgba(148, 141, 169, 0) 140%)",
            }}
          >
            <span className="mb-4 text-white text-xl">
              Assemble a top notch crew
            </span>
          </div>
          {/* <div
            className="w-full -ml-8 mb-6 rounded-lg h-16"
            style={{ background: "rgba(148, 141, 169, 0.3)" }}
          ></div>
          <div
            className="w-full -ml-8 mb-6 rounded-lg h-16"
            style={{ background: "rgba(148, 141, 169, 0.3)" }}
          ></div> */}
        </motion.div>
        <motion.div
          className="rounded-lg pt-8 bg-gray-700 w-full h-auto my-4 md:my-0 md:ml-4"
          style={{ background: "#383440", x: bringOnX }}
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="px-10">
            <div className="flex items-center">
              <Image src={ProductLogo} alt="Logo" height={25} width={25} />
              <h2 className="text-gray-50 font-bold text-base md:text-lg ml-2">
                FlyinOut
              </h2>
            </div>
            <h3 className="font-bold text-2xl text-primary mt-3 mb-6">
              Bring On-Board
            </h3>
            <p className=" text-secondary text-base mb-6">
              Keep track of anything up to date with your team and make faster
              decisions to offer the best candidate experience.
            </p>
          </div>
          {/* <div
            className="w-3/5 mb-6 rounded-r-lg h-16"
            style={{ background: "rgba(148, 141, 169, 0.3)" }}
          ></div> */}
          {/* <div
            className="w-4/5 mb-6 rounded-r-lg h-20"
            style={{ background: "rgba(217, 211, 244, 0.3)" }}
          ></div> */}
        </motion.div>
      </div>
    </>
  );
}
