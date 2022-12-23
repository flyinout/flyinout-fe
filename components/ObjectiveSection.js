import { SectionHeading, SectionSubHeading } from "./Hero";
import DesktopView from "../public/desktopView.png";
import {
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion";

const ObjectiveSection = () => {
  const { scrollYProgress } = useViewportScroll();
  const imageX = useTransform(scrollYProgress, [0, 1], [1, 100]);
  return (
    <>
      <div className="text-center flex flex-col items-center mt-10 text-white">
        <SectionHeading>Work Less Recruit More</SectionHeading>
        <SectionSubHeading>
          FlyinOut helps you boost your Recruiting Productivity at Any Scale
        </SectionSubHeading>
      </div>

      <div className="my-8 relative flex flex-col sm:flex-row sm:items-stretch w-full px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col justify-center rounded-lg p-8 h-48 lg:h-96 w-full"
          style={{
            background:
              "linear-gradient(77.79deg, #5C70F4 -5.75%, #9347E7 111.09%)",
          }}
        >
          <h2 className="text-primary text-lg font-bold">
            Blazingly Fast Search
          </h2>
          <h3 className="text-primary text-base font-bold w-full lg:w-2/4 my-4">
            Once you have imported your candidates, jobs and companies, you can
            perform complicated searches with filters at incredible speeds.
          </h3>
        </motion.div>
        <motion.div
          initial={{ x: "100vw",y:'-50%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden lg:block absolute rounded-lg h-80 w-80 z-10"
          style={{
            top: " 50%",
            right: "-5rem",
            bottom: "50%",
            width: "50%",
            transform: "translateY(-50%)",
            background: " #151515",
            backgroundImage: `url(${DesktopView.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            border: "1px solid rgba(148, 141, 169, 0.35)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
            x:imageX
          }}
        ></motion.div>
      </div>
    </>
  );
}

export default ObjectiveSection;