import { SectionHeading, SectionSubHeading } from "./Hero";
import styles from "../styles/Collaboration.module.scss";
import { motion, useTransform } from "framer-motion";
import { useState } from "react";
const variant = {
  rest: {
    filter: `blur(1px)`,
    scale: 1,
  },
  raise: {
    scale: 1.1,
    backgroundColor: "rgb(157, 151, 170)",
    boxShadow: "9px 10px 24px 15px rgba(26,22,26,1)",
    filter: [`blur(1px)`, `blur(0.5px)`, `blur(0px)`],
  },
};

export default function Collaboration() {
  const scale = 1.1;
  const [isHover, setIsHover] = useState(false);
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
          variants={variant}
          initial="rest"
          whileHover="raise"
          className={
            "overflow-hidden p-4 rounded-lg text-left w-full " +
            `${styles.right}`
          }
          style={{
            background: "#383440",
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
          variants={variant}
          initial="rest"
          whileHover="raise"
          className={
            "overflow-hidden p-4 rounded-lg text-left w-full " +
            `${styles.center}`
          }
          style={{
            background: "#383440",
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
          variants={variant}
          initial="rest"
          whileHover="raise"
          className={
            "overflow-hidden p-4 rounded-lg text-left w-full " +
            `${styles.left}`
          }
          style={{
            background: "#383440",
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
          variants={variant}
          initial="rest"
          whileHover="raise"
          className={
            "overflow-hidden p-4 rounded-lg text-left h-full w-full " +
            `${styles.right}`
          }
          style={{
            background: "#383440",
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
          variants={variant}
          initial="rest"
          whileHover="raise"
          className={
            "overflow-hidden p-4 rounded-lg text-left h-full w-full " +
            `${styles.center}`
          }
          style={{
            background: "#383440",
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
          initial="rest"
          whileHover="raise"
          variants={variant}
          className={
            "overflow-hidden p-4 rounded-lg text-left h-full w-full " +
            `${styles.left}`
          }
          style={{
            background: "#383440",
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
