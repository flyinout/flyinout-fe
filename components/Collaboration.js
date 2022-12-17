import { SectionHeading, SectionSubHeading } from "./Hero";

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
     
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between w-full">
        <div
          className="my-2 mx-4 p-8 md:mx-8 rounded-lg text-left max-w-md min-w-md"
          style={{ background: "#383440" }}
        >
          <div
            className="w-8 h-8 rounded-lg"
            style={{ background: "#948DA9" }}
          ></div>
          <h3 className="text-md text-primary font-bold ">Engaging</h3>
          <p className="text-secondary">
            Send eMails and InMails directly to your candidates.
          </p>
        </div>
        <div
          className="my-2 mx-4 p-8 md:mx-8 rounded-lg text-left max-w-md"
          style={{ background: "#383440" }}
        >
          <div
            className="w-8 h-8 rounded-lg"
            style={{ background: "#948DA9" }}
          ></div>
          <h3 className="text-md text-primary font-bold ">
            Interview Scheduling
          </h3>
          <p className="text-secondary">
            Hassle free and blazing fast interview scheduling.
          </p>
        </div>
        <div
          className="my-2 mx-4 p-8 md:mx-8 rounded-lg text-left max-w-md min-w-md"
          style={{ background: "#383440" }}
        >
          <div
            className="w-8 h-8 rounded-lg"
            style={{ background: "#948DA9" }}
          ></div>
          <h3 className="text-md text-primary font-bold ">Integration</h3>
          <p className="text-secondary">
            Integrate with third party applications for direct calls.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between w-full">
        <div
          className="my-2 mx-4 p-8 md:mx-8 rounded-lg text-left max-w-md min-w-md"
          style={{ background: "#383440" }}
        >
          <div
            className="w-8 h-8 rounded-lg"
            style={{ background: "#948DA9" }}
          ></div>
          <h3 className="text-md text-primary font-bold ">
            Customizable Search
          </h3>
          <p className="text-secondary">
            Filter and search through the right candidates. Create custom job
            postings and search for candidates based on specific criteria.
          </p>
        </div>
        <div
          className="my-2 mx-4 p-8 md:mx-8 rounded-lg text-left max-w-md min-w-md"
          style={{ background: "#383440" }}
        >
          <div
            className="w-8 h-8 rounded-lg"
            style={{ background: "#948DA9" }}
          ></div>
          <h3 className="text-md text-primary font-bold ">
            {" "}
            Candidate Management
          </h3>
          <p className="text-secondary">
            Best resume parsing functionality. Automated applicant tracking.
          </p>
        </div>
        <div
          className="my-2 mx-4 p-8 md:mx-8 rounded-lg text-left max-w-md min-w-md"
          style={{ background: "#383440" }}
        >
          <div
            className="w-8 h-8 rounded-lg"
            style={{ background: "#948DA9" }}
          ></div>
          <h3 className="text-md text-primary font-bold ">
            {" "}
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
