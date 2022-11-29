export default function Footer() {
  return (
    <footer className="text-center text-white mt-20 flex items-center">
      <div className="h-30 w-full">
        <div id="productLogo" className="flex justify-center">
          <img
            className="h-10 w-12 rounded-md"
            src="https://cdn.dribbble.com/users/3028563/screenshots/17652849/media/a786e40bccabd30d4113bfd36cd1200d.jpg"
            alt="Logo"
          />
          <h2 className="text-gray-50 font-bold text-base mx-3 mt-3">FlyinOut</h2> 
        </div>
        <div className="grid grid-cols-4 mt-5 mb-5 prose">
          <div className="mx-5">
            <a href="#" className="no-underline">Twitter</a> 
          </div>
          <div className="mx-5">
          <a href="#" className="no-underline">LinkedIn</a>
          </div>
          <div className="mx-5">
          <a href="#" className="no-underline">Terms of Use</a>
          </div>
          <div className="mx-5">
          <a href="#" className="no-underline">Privacy Policy</a>
          </div>
        </div>
        <div className="mt-5 mb-20 prose">
          <span>© 2022 </span>
          <a target="_blank" className="no-underline" href="https://flyinout.in/">FlyinOut.in</a>
          <span>, All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}