import { Image } from "../utils/imageLoader";
import { Responsive } from "./ResponsiveWidth";
import ProductLogo from "../public/ProductLogo.png";
export default function Footer() {
  return (
      <footer className="text-center text-white mt-10 flex items-center">
        <div className="h-30 w-full">
          <div id="productLogo" className="flex items-center justify-center">
            <Image
              src={ProductLogo}
              alt="Logo"
              height={25}
              width={25}
            />
            <h2 className="text-gray-50 font-bold text-base md:text-lg ml-2">
              FlyinOut
            </h2>
          </div>
          <div className="text-center sm:grid sm:grid-cols-4 auto-cols-min m-auto max-w-fit my-5">
            <div className="mx-5">
              <a href="#" className="no-underline">
                Twitter
              </a>
            </div>
            <div className="mx-5">
              <a href="#" className="no-underline">
                LinkedIn
              </a>
            </div>
            <div className="mx-5">
              <a href="#" className="no-underline">
                Terms of Use
              </a>
            </div>
            <div className="mx-5">
              <a href="#" className="no-underline">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="my-5">
            <span>© 2022 </span>
            <a
              target="_blank"
              rel="noreferrer"
              className="no-underline mx-3"
              href="https://flyinout.in/"
            >
              FlyinOut.in
            </a>
            <span> All Rights Reserved</span>
          </div>
        </div>
      </footer>
  );
}
