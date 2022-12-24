import { Image } from "../utils/imageLoader";
import { Responsive } from "./ResponsiveWidth";
import ProductLogo from "../public/ProductLogo.png";

export default function Automations() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center md:items-stretch md:mx-auto px-4 md:max-w-4xl">
      <div
        className="flex flex-col rounded-lg justify-end w-full md:w-7/12 h-auto overflow-x-hidden"
        style={{ background: "#383440" }}
      >
        <div
          className="w-10/12 mb-6 -mx-6 rounded-lg h-16"
          style={{
            background:
              "linear-gradient(0deg, rgba(148, 141, 169, 0.3) 0%, rgba(148, 141, 169, 0) 68.54%, rgba(148, 141, 169, 0) 140%)",
          }}
        ></div>
        <div
          className="w-full -ml-8 mb-6 rounded-lg h-16"
          style={{ background: "rgba(148, 141, 169, 0.3)" }}
        ></div>
        <div
          className="w-full -ml-8 mb-6 rounded-lg h-16"
          style={{ background: "rgba(148, 141, 169, 0.3)" }}
        ></div>
      </div>
      <div
        className="rounded-lg py-8 bg-gray-700 w-full h-auto my-4 md:my-0 md:ml-4"
        style={{ background: "#383440" }}
      >
        <div className="px-10">
          <div className="flex items-center">
            <Image src={ProductLogo} alt="Logo" height={25} width={25} />
            <h2 className="text-gray-50 font-bold text-base md:text-lg ml-2">
              FlyinOut
            </h2>
          </div>
          <h3 className="font-bold text-2xl text-primary mt-3 mb-6">
            Email Template
          </h3>
          <p className=" text-secondary text-md mb-6">
            Customizable templates for your emails helping you in a{" "}
            <span className="font-bold underline"> faster </span>
            workflow.
          </p>
        </div>
        <div
          className="w-3/5 mb-6 rounded-r-lg h-16"
          style={{ background: "rgba(148, 141, 169, 0.3)" }}
        ></div>
        <div
          className="w-4/5 mb-6 rounded-r-lg h-20"
          style={{ background: "rgba(217, 211, 244, 0.3)" }}
        ></div>
      </div>
    </div>
  );
}
