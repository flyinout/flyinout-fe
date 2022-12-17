import Email from "./Email";
import { SectionHeading, SectionSubHeading } from "./Hero";

export default function Title() {
  return (
    <div className="text-center flex flex-col items-center mt-8 text-white">
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
    </div>
  );
}
