import { SectionHeading, SectionSubHeading } from "./Hero";
import styles from "../styles/Collaboration.module.scss";

export default function Collaboration() {
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
        <div
          className={"p-4 rounded-lg text-left w-full " + `${styles.right}`}
          style={{ background: "#383440", maxWidth: "20rem", minHeight: "8rem" }}
        >
          <h3 className="text-md text-primary font-bold">Engaging</h3>
          <p className="text-secondary">
            Send eMails and InMails directly to your candidates.
          </p>
        </div>
        <div
          className={"p-4 rounded-lg text-left w-full " + `${styles.center}`}
          style={{ background: "#383440", maxWidth: "20rem", minHeight: "8rem" }}
        >
          <h3 className="text-md text-primary font-bold">
            Interview Scheduling
          </h3>
          <p className="text-secondary">
            Hassle free and blazing fast interview scheduling.
          </p>
        </div>
        <div
          className={"p-4 rounded-lg text-left w-full " + `${styles.left}`}
          style={{ background: "#383440", maxWidth: "20rem", minHeight: "8rem" }}
        >
          <h3 className="text-md text-primary font-bold">Integration</h3>
          <p className="text-secondary">
            Integrate with third party applications for direct calls.
          </p>
        </div>
        <div
          className={"p-4 rounded-lg text-left h-full w-full " + `${styles.right}`}
          style={{ background: "#383440", maxWidth: "20rem", minHeight: "10rem" }}
        >
          <h3 className="text-md text-primary font-bold">
            Customizable Search
          </h3>
          <p className="text-secondary">
            Filter and search through the right candidates. Create custom job
            postings and search for candidates based on specific criteria.
          </p>
        </div>
        <div
          className={"p-4 rounded-lg text-left h-full w-full " + `${styles.center}`}
          style={{ background: "#383440", maxWidth: "20rem", minHeight: "10rem" }}
        >
          <h3 className="text-md text-primary font-bold">
            Candidate Management
          </h3>
          <p className="text-secondary">
            Best resume parsing functionality. Automated applicant tracking.
          </p>
        </div>
        <div
          className={"p-4 rounded-lg text-left h-full w-full " + `${styles.left}`}
          style={{ background: "#383440", maxWidth: "20rem", minHeight: "10rem" }}
        >
          <h3 className="text-md text-primary font-bold">
            Reporting and Analytics
          </h3>
          <p className="text-secondary">
            Genereate reports, metrics and analysis instantenously to make easy
            data driven decisions.
          </p>
        </div>
      </div>
    </>
  );
}
