import Email from "./Email";
import { SectionHeading, SectionSubHeading } from "./Hero";

export default function Title() {
  return (
    <div className="text-center flex flex-col items-center mt-8 text-white">
      <button className="mb-4 normal-case text-lg text-primary rounded-lg px-4 bg-yellow-500 hover:bg-yellow-600 duration-300">
        Beta Access
      </button>
      <SectionHeading>The Ultimate Modern Recruiting Platform</SectionHeading>
      <SectionSubHeading>
        Where talent takes flight your next hire is just a flight away helping
        you soar to success with the right hire Bringing the best together,
        Flyinout
      </SectionSubHeading>
      <Email></Email>
    </div>
  );
}
