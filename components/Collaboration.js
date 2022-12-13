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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
        <div
          className="my-2 mx-4 p-8 md:mx-8 rounded-lg text-left"
          style={{ background: "#383440" }}
        >
          <div
            className="w-8 h-8 rounded-lg"
            style={{ background: "#948DA9" }}
          ></div>
          <h3 className="text-md text-primary font-bold "> Manage</h3>
          <p className="text-secondary">
            Manage fine grained access controls for your team. Set goals for
            your team on a organization level.
          </p>
        </div>
        <div
          className="my-2 mx-4 p-8 md:mx-8 rounded-lg text-left"
          style={{ background: "#383440" }}
        >
          <div
            className="w-8 h-8 rounded-lg"
            style={{ background: "#948DA9" }}
          ></div>
          <h3 className="text-md text-primary font-bold "> Manage</h3>
          <p className="text-secondary">
            Manage fine grained access controls for your team. Set goals for
            your team on a organization level.
          </p>
        </div>
        <div
          className="my-2 mx-4 p-8 md:mx-8 rounded-lg text-left"
          style={{ background: "#383440" }}
        >
          <div
            className="w-8 h-8 rounded-lg"
            style={{ background: "#948DA9" }}
          ></div>
          <h3 className="text-md text-primary font-bold "> Manage</h3>
          <p className="text-secondary">
            Manage fine grained access controls for your team. Set goals for
            your team on a organization level.
          </p>
        </div>
      </div>
    </>
  );
}
