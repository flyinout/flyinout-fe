import DottedBg from "../public/DottedBg.svg";
import IphoneMock from "../public/iPhoneMockup.png";
import IPadMock from "../public/iPadMockup.png";
import { Image } from "../utils/imageLoader";
import Email from "./Email";
import { SectionHeading, SectionSubHeading } from "./Hero";

export function Illustration() {
  return (
    <div
      className="relative flex flex-col sm:flex-row justify-center sm:items-stretch  w-full px-4 overflow-hidden"
      style={{ height: "30rem" }}
    >
      <div
        className="absolute w-full z-0"
        style={{
          backgroundImage: `url(${DottedBg.src})`,
          height: "30rem",
          width: "100vw",
          left: "50%",
          right: "50%",
          top: "1.5rem",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      ></div>
      <div className="text-center w-full sm:flex sm:flex-col sm:justify-center sm:items-center z-20">
        <SectionHeading>
          Get the inside scoop on the best job opportunities <br />
          Sign up for early bird access now!
        </SectionHeading>
        <SectionSubHeading>
          We solve every recruitment problem you ever faced!<br></br>
          We integrate to your existent CRMs, databases and much more!
        </SectionSubHeading>
      </div>
      <div className="md:block lg:hidden relative bg-transparent w-1/3 z-10 overflow-hidden">
        <div className="absolute right-0 top-20">
          <Image src={IphoneMock} alt="Screen" width={400} height={800}></Image>
        </div>
      </div>
      <div className="hidden lg:block xl:hidden relative bg-transparent w-2/3 z-10 overflow-hidden">
        <div className="absolute right-0 top-0 translate-y-32">
          <Image src={IPadMock} alt="Screen" width={800} height={500}></Image>
        </div>
      </div>
      <div className="hidden xl:block relative bg-transparent w-2/3 z-10 overflow-hidden">
        <div className="absolute right-0 top-0">
          <Image src={IPadMock} alt="Screen" width={800} height={500}></Image>
        </div>
      </div>
    </div>
  );
}
