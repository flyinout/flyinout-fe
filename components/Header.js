import { Image } from "../utils/imageLoader";
import { Responsive } from "./ResponsiveWidth";

import { useState } from "react";
export default function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const toggleMenu = () => {
    const curr = isMenuShown;
    setIsMenuShown(!curr);
  };

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 md:px-48">
        <div id="productLogo" className="flex items-center">
          <Image
            src="https://cdn.dribbble.com/users/3028563/screenshots/17652849/media/a786e40bccabd30d4113bfd36cd1200d.jpg"
            alt="Logo"
            height={25}
            width={25}
          />
          <h2 className="text-gray-50 font-bold text-base md:text-lg ml-2">
            FlyinOut
          </h2>
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
          <ul className="pt-4 text-base md:flex md:justify-between md:pt-0">
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
              <a className="md:p-4 py-2 block " href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
