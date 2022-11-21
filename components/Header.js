export default function Header() {
  return (
    <nav className="w-full mt-2 py-2 flex justify-between items-center">
      <div id="productLogo" className="flex items-center">
        <img
          className="h-12 w-14 rounded-md"
          src="https://cdn.dribbble.com/users/3028563/screenshots/17652849/media/a786e40bccabd30d4113bfd36cd1200d.jpg"
          alt="Logo"
        />
        <h2 className="text-gray-50 font-bold text-base ml-2">FlyinOut</h2>
      </div>
      <div className="flex text-gray-50 text-base">
        <h3 className="mr-2">Privacy</h3>
        <h3 className="mx-2">About</h3>
        <h3 className="ml-2">Contact</h3>
      </div>
    </nav>
  );
}
