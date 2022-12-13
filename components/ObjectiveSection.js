import { SectionHeading, SectionSubHeading } from "./Hero";

export default function ObjectiveSection() {
  return (
    <>
      <div className="text-center flex flex-col items-center mt-10 text-white">
        <SectionHeading>
          Work Less <br />
          Recruit More
        </SectionHeading>
        <SectionSubHeading>
          FlyinOut helps you boost your Recruiting Productivity at Any Scale
        </SectionSubHeading>
      </div>

      <div className="my-8 relative flex flex-col sm:flex-row sm:items-stretch w-full px-4 max-w-3xl mx-auto">
        <div
          className="flex rounded-lg  h-96 w-full"
          style={{
            background:
              "linear-gradient(77.79deg, #5C70F4 -5.75%, #9347E7 111.09%)",
          }}
        ></div>
        {/* <div
          className="absolute bg-black rounded-lg h-80 w-80 z-10"
          style={{
            top: " 50%",
            right: "-5rem",
            bottom: " 50%",
            width: "40rem",
            transform: "translateY(-50%)",
          }}
        ></div> */}
      </div>
    </>
  );
}
