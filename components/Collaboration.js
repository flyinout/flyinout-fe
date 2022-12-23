import { SectionHeading, SectionSubHeading } from "./Hero";
import styles from "../styles/Collaboration.module.scss";
import { motion, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
const variant = {
  rest: {
    filter: `blur(1px)`,
  },
  raise: {
    scale: [1, 1.1],
    backgroundColor: "rgb(157, 151, 170)",
    boxShadow: "9px 10px 24px 15px rgba(26,22,26,1)",
    filter: [`blur(1px)`, `blur(0.5px)`, `blur(0px)`],
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  lower: {
    scale: [1.1, 1],
    backgroundColor: "rgb(56, 52, 64)",
    boxShadow: "0 0 0 5px rgba(26,22,26,0.6)",
    filter: [
      `blur(0px)`,
      `blur(0.7px)`,
      `blur(0.5px)`,
      `blur(0.2px)`,
      `blur(1px)`,
    ],
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export default function Collaboration() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        if (index < 6) {
          setIndex(index + 1);
        } else {
          setIndex(0);
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  const togglePause = (index) => {
    if (index || index == 0) setIndex(index);
    setPaused(!paused);
  };

  return (
    <>
      <div className="text-center flex flex-col w-full items-center mt-10 mb-8 ">
        <SectionHeading>Team and Collaboration</SectionHeading>
        <SectionSubHeading>
          Collaborate and Manage your recruiting/talent acquisition teams with
          ease.
        </SectionSubHeading>
      </div>
      <div className={styles.collaborationWrapper}>
        <motion.div
          onMouseEnter={() => togglePause(0)}
          onMouseLeave={togglePause}
          variants={variant}
          initial="rest"
          animate={index == 0 ? "raise" : "lower"}
          className={
            "cursor-pointer overflow-hidden p-4 rounded-lg text-left w-full " +
            `${styles.right}`
          }
          style={{
            background: "#383440",
            boxShadow: "0 0 0 5px rgba(26,22,26,0.6)",
            maxWidth: "20rem",
            minHeight: "8rem",
          }}
        >
          <h3 className="text-md text-primary font-bold">Engaging</h3>
          <p className="text-primary">
            Send eMails and InMails directly to your candidates.
          </p>
        </motion.div>
        <motion.div
          onMouseEnter={() => togglePause(1)}
          onMouseLeave={togglePause}
          variants={variant}
          initial="rest"
          animate={index == 1 ? "raise" : "lower"}
          className={
            "cursor-pointer overflow-hidden p-4 rounded-lg text-left w-full " +
            `${styles.center}`
          }
          style={{
            background: "#383440",
            boxShadow: "0 0 0 5px rgba(26,22,26,0.6)",
            maxWidth: "20rem",
            minHeight: "8rem",
          }}
        >
          <h3 className="text-md text-primary font-bold">
            Interview Scheduling
          </h3>
          <p className="text-primary">
            Hassle free and blazing fast interview scheduling.
          </p>
        </motion.div>
        <motion.div
          onMouseEnter={() => togglePause(2)}
          onMouseLeave={togglePause}
          variants={variant}
          initial="rest"
          animate={index == 2 ? "raise" : "lower"}
          className={
            "cursor-pointer overflow-hidden p-4 rounded-lg text-left w-full " +
            `${styles.left}`
          }
          style={{
            background: "#383440",
            boxShadow: "0 0 0 5px rgba(26,22,26,0.6)",
            maxWidth: "20rem",
            minHeight: "8rem",
          }}
        >
          <h3 className="text-md text-primary font-bold">Integration</h3>
          <p className="text-primary">
            Integrate with third party applications for direct calls.
          </p>
        </motion.div>
        <motion.div
          onMouseEnter={() => togglePause(3)}
          onMouseLeave={togglePause}
          variants={variant}
          initial="rest"
          animate={index == 3 ? "raise" : "lower"}
          className={
            "cursor-pointer overflow-hidden p-4 rounded-lg text-left h-full w-full " +
            `${styles.right}`
          }
          style={{
            background: "#383440",
            boxShadow: "0 0 0 5px rgba(26,22,26,0.6)",
            maxWidth: "20rem",
            minHeight: "10rem",
          }}
        >
          <h3 className="text-md text-primary font-bold">
            Customizable Search
          </h3>
          <p className="text-primary">
            Filter and search through the right candidates. Create custom job
            postings and search for candidates based on specific criteria.
          </p>
        </motion.div>
        <motion.div
          onMouseEnter={() => togglePause(4)}
          onMouseLeave={togglePause}
          variants={variant}
          initial="rest"
          animate={index == 4 ? "raise" : "lower"}
          className={
            "cursor-pointer overflow-hidden p-4 rounded-lg text-left h-full w-full " +
            `${styles.center}`
          }
          style={{
            background: "#383440",
            boxShadow: "0 0 0 5px rgba(26,22,26,0.6)",
            maxWidth: "20rem",
            minHeight: "10rem",
          }}
        >
          <h3 className="text-md text-primary font-bold">
            Candidate Management
          </h3>
          <p className="text-primary">
            Best resume parsing functionality. Automated applicant tracking.
          </p>
        </motion.div>
        <motion.div
          onMouseEnter={() => togglePause(5)}
          onMouseLeave={togglePause}
          variants={variant}
          initial="rest"
          animate={index == 5 ? "raise" : "lower"}
          className={
            "cursor-pointer overflow-hidden p-4 rounded-lg text-left h-full w-full " +
            `${styles.left}`
          }
          style={{
            background: "#383440",
            boxShadow: "0 0 0 5px rgba(26,22,26,0.6)",
            maxWidth: "20rem",
            minHeight: "10rem",
          }}
        >
          <h3 className="text-md text-primary font-bold">
            Reporting and Analytics
          </h3>
          <p className="text-primary">
            Genereate reports, metrics and analysis instantenously to make easy
            data driven decisions.
          </p>
        </motion.div>
      </div>
    </>
  );
}
