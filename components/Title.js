import Email from "./Email";
import { SectionHeading, SectionSubHeading } from "./Hero";

export default function Title() {
  return (
    <div className="text-center flex flex-col items-center mt-10 text-white">
      <button className="mb-4 btn btn-sm normal-case text-base text-primary rounded-lg px-4 bg-yellow-500 hover:bg-yellow-600 duration-300">
        Beta Access
      </button>
      <SectionHeading>The Ultimate Modern Recruiting Platform</SectionHeading>
      <SectionSubHeading>
        FlyinOut is not just your platform to find candiadtes we use state of
        the art machine learning technogies to close down on your recruitment
        needs.
      </SectionSubHeading>
      <Email></Email>
    </div>
  );
}
