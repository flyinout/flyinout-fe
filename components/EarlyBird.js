import { Image } from "../utils/imageLoader";
import Email from "./Email";
import { SectionHeading, SectionSubHeading } from "./Hero";
import { Responsive } from "./ResponsiveWidth";
import CheckIcon from "../public/checkIcon.svg";

export default function EarlyBird() {
  return (
    <>
      <div className="text-center flex flex-col w-full items-center mt-10 mb-8">
        <SectionHeading>Built for Product and Tech</SectionHeading>
        <SectionSubHeading>
          Specifically designed for recruiting people for Technical and Product
          related roles
        </SectionSubHeading>
      </div>
      <div
        className="relative flex flex-col mx-4 rounded-lg md:mx-auto md:flex-row md:p-8 md:max-w-4xl"
        style={{
          background:
            "linear-gradient(180deg, #1E1B26 0%, rgba(30, 27, 38, 0) 100%)",
          border: "1px solid rgba(148, 141, 169, 0.35)",
        }}
      >
        <div className="md:w-1/2 w-full p-4">
          <h1 className="text-lg font-bold my-2 text-primary">Join Early</h1>
          <p className="text-secondary">
            Specifically designed for recruiting people for Technical and
            Product related roles.
          </p>
          <div className="mt-2">
            <div className="flex items-center ">
              <Image src={CheckIcon} alt="Check" height={15} width={15} />{" "}
              <span className="text-secondary ml-2"> Product Updates</span>
            </div>
            <div className="flex items-center ">
              <Image src={CheckIcon} alt="Check" height={15} width={15} />{" "}
              <span className="text-secondary ml-2">Early Access</span>
            </div>
            <div className="flex items-center ">
              <Image src={CheckIcon} alt="Check" height={15} width={15} />{" "}
              <span className="text-secondary ml-2">Subscription Discounts</span>
            </div>
          </div>
          <div className="-ml-4 mt-4 -mb-4">
            <Email />
          </div>
        </div>
        <div className="absolute hidden md:block bg-white rounded-tl-xl md:h-5/6 md:w-5/12 right-0 bottom-0"></div>
      </div>
    </>
  );
}
