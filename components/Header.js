import { Image } from "../utils/imageLoader";
import { Responsive } from "./ResponsiveWidth";
import ProductLogo from "../public/ProductLogo.png";
import Icon from "./Icon";
import { useState } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const toggleMenu = () => {
    const curr = isMenuShown;
    setIsMenuShown(!curr);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 md:px-48">
        <div>
          <div id="productLogo" className="flex items-center">
            <Image src={ProductLogo} alt="Logo" height={25} width={25} />
            <div className="flex flex-col">
              <h2 className="text-gray-50 font-bold text-base md:text-lg ml-2 -mb-2">
                FlyinOut
              </h2>
            </div>
          </div>
          <span className="text-secondary" style={{ fontSize: "0.8rem" }}>
            Where talent takes flight
          </span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenu}
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`w-full text-center md:flex md:justify-center md:items-center md:w-auto ${
            isMenuShown ? "" : "hidden"
          }`}
        >
          <ul className="pt-4 text-base text-white font-extrabold md:flex md:justify-between md:pt-0">
            <li>
              <a className="md:p-4 py-2 block " href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block " href="#">
                About
              </a>
            </li>
            <li>
              <a
                href="mailto:founders.flyinout@gmail.com"
                className="md:p-4 py-2 block "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
