import { Image } from "../utils/imageLoader";
import { Responsive } from "./ResponsiveWidth";
export default function Header() {
  return (
    <Responsive>
      <nav className="py-6 px-4 flex justify-between items-center">
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
        <div className="flex text-gray-50">
          <h3 className="mr-2 text-base">Privacy</h3>
          <h3 className="mx-2 text-base">About</h3>
          <h3 className="ml-2 text-base">Contact</h3>
        </div>
      </nav>
    </Responsive>
  );
}
