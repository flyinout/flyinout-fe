export default function Automations() {
  return (
    <div className="my-10 w-full flex">
      <div
        className="card px-8 flex flex-col justify-end w-7/12 h-auto mr-2"
        style={{ background: "#383440" }}
      >
        <div className="w-10/12 mb-6 rounded-xl h-16" style={{background: 'linear-gradient(0deg, rgba(148, 141, 169, 0.3) 0%, rgba(148, 141, 169, 0) 68.54%, rgba(148, 141, 169, 0) 140%)'}}>

        </div>
        <div className="w-12/12 mb-6 rounded-xl h-16" style={{background: 'rgba(148, 141, 169, 0.3)'}}>

        </div>
        <div  className="w-12/12 mb-6 rounded-xl h-16" style={{background: 'rgba(148, 141, 169, 0.3)'}}>

        </div>
      </div>
      <div
        className="card py-8 bg-gray-700 w-5/12 h-auto ml-2"
        style={{ background: "#383440" }}
      >
        <div className="px-10">
        <div className="flex items-center mb-6">
          <img
            className="h-12 w-14 rounded-md"
            src="https://cdn.dribbble.com/users/3028563/screenshots/17652849/media/a786e40bccabd30d4113bfd36cd1200d.jpg"
            alt="Logo"
          />
          <h2 className="text-gray-50 font-bold text-base ml-2">FlyinOut</h2>
        </div>
        <h3 className="font-bold text-2xl mb-6">Email Template</h3>
        <p className="w-2/3 text-gray-500 text-md mb-6">
          Customizable templates for your emails helping you
          in a <span className="font-bold underline"> faster </span>
          workflow.
        </p>
        </div>
        <div className="w-3/5 mb-6 rounded-r-xl h-20" style={{background: 'rgba(148, 141, 169, 0.3)'}}>

        </div>
        <div  className="w-4/5 mb-6 rounded-r-xl h-32" style={{background: 'rgba(217, 211, 244, 0.3)'}}>

        </div>
      </div>
    </div>
  );
}
