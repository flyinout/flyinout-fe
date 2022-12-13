import DottedBg from "../public/DottedBg.svg";

export function Illustration() {
  return (
    <div className="relative flex flex-col sm:flex-row sm:items-stretch w-full h-80 px-4 max-w-3xl mx-auto">
      <div
        className="absolute h-full w-full z-0"
        style={{
          backgroundImage: `url(${DottedBg.src})`,
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          backgroundRepeat:'space'
        }}
      ></div>
      <div className="bg-gray-800 h-full z-10 sm:w-3/6 rounded-t-lg sm:rounded-none sm:rounded-l-lg"></div>
      <div className="bg-gray-400 h-full z-10 sm:w-2/6 "></div>
      <div className="bg-gray-50  h-full z-10 sm:w-1/6 rounded-b-lg sm:rounded-none sm:rounded-r-lg"></div>
    </div>
  );
}
