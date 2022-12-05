export default function Imports() {
  return (
    <>
      <div className="text-center flex flex-col w-full items-center mt-10 prose">
        <h1 className="text-md my-2">Import from Anywhere.</h1>
        <p>
          Import your Candidates from datasources like ATS, CRMs, Spreadsheets,
          Databases and more.
        </p>
      </div>
      <div
        className="relative w-full h-auto text-center flex justify-center"
        style={{
          backgroundImage: `url('./gridBg.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "30rem",
        }}
      >
        <div
          className="card rounded-md py-2 px-2 text-white flex items-center font-bold text-lg absolute top-0"
          style={{
            background:
              "linear-gradient(86.38deg, #D69E2E 1.67%, #F6E05E 100%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height:'3rem',
            minWidth: "16rem",
            top: "40px",
            left: "8px",
          }}
        >
          CRMs
        </div>
        <div
          className="card rounded-md py-2 px-2 text-white flex items-center font-bold text-lg absolute top-10"
          style={{
            background:
              "linear-gradient(86.69deg, #E53E3E 1.68%, #FC8181 99.53%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height:'3rem',
            minWidth: "16rem",
            left: "8px",
            top: "225px",
          }}
        >
          Databases
        </div>
        <div
          className="card rounded-md py-2 px-2 text-white flex items-center font-bold text-lg absolute top-20"
          style={{
            background:
              "linear-gradient(86.9deg, #38A169 0.33%, #68D391 99.67%)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height:'3rem',
            minWidth: "16rem",
            left: "8px",
            top: "410px",
          }}
        >
          Spreadsheets
        </div>
        <img
          className="absolute h-96 w-9/12 right-0  bottom-10"
          src="./illusmap.svg"
          alt="Illustration "
        />
      </div>
    </>
  );
}
