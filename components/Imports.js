import { SectionHeading, SectionSubHeading } from "./Hero";

export default function Imports() {
  return (
    <>
      <div className="text-center flex flex-col w-full items-center mt-10 mb-8">
        <SectionHeading>Import from Anywhere</SectionHeading>
        <SectionSubHeading>
          Import your Candidates from datasources like ATS, CRMs, Spreadsheets,
          Databases and more.
        </SectionSubHeading>
      </div>
      <div
        className="h-0 md:h-auto relative w-full text-center flex justify-center"
        style={{
          backgroundImage: `url('./gridBg.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "30rem",
        }}
      >
        <div
          className="rounded-lg z-10 py-2 px-2 text-primary flex justify-center items-center font-bold text-lg absolute lg:left-1/3 md:left-1/4 top-0"
          style={{
            background:
              "linear-gradient(86.38deg, #D69E2E 1.67%, #F6E05E 100%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height:'3rem',
            minWidth: "10rem",
            top: "40px",
          }}
        >
          CRMs
        </div>
        <div
          className="rounded-lg z-10 py-2 px-2 text-primary flex justify-center items-center font-bold text-lg absolute lg:left-1/3 md:left-1/4 top-10"
          style={{
            background:
              "linear-gradient(86.69deg, #E53E3E 1.68%, #FC8181 99.53%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height:'3rem',
            minWidth: "10rem",
            top: "225px",
          }}
        >
          Databases
        </div>
        <div
          className="rounded-lg z-10 py-2 px-2 text-primary flex justify-center items-center font-bold text-lg absolute lg:left-1/3 md:left-1/4 top-20"
          style={{
            background:
              "linear-gradient(86.9deg, #38A169 0.33%, #68D391 99.67%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height:'3rem',
            minWidth: "10rem",
            top: "410px",
          }}
        >
          Spreadsheets
        </div>
        <img
          className="absolute h-0 w-9/12 right-0 bottom-10  md:h-96"
          src="./illusmap.svg"
          alt="Illustration "
        />
      </div>
    </>
  );
}
