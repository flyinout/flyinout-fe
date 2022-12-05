import Email from "./Email";

export default function EarlyBird() {
  return (
    <>
      <div className="text-center flex flex-col w-full items-center mt-10 prose">
        <h1 className="my-2">Built for Product and Tech</h1>
        <p className="text-md">
          Specifically designed for recruiting people for Technical and Product
          related roles
        </p>
      </div>
      <div
        className="relative card p-8 mx-8 my-5 rounded-lg w-full"
        style={{
          background:
            "linear-gradient(180deg, #1E1B26 0%, rgba(30, 27, 38, 0) 100%)",
          border: "1px solid rgba(148, 141, 169, 0.35)",
        }}
      >
        <div className="w-1/2">
          <h1 className="text-lg font-bold my-2">Join Early</h1>
          <p>
            Specifically designed for recruiting people for Technical and
            Product related roles.
          </p>
          <div className="mt-2">
            <div className="flex items-center ">
              <img
                className="h-4 w-4 rounded-md mr-2 my-1"
                src="./checkIcon.svg"
                alt="Check"
              />{" "}
              <span> Product Updates</span>
            </div>
            <div className="flex items-center ">
              <img
                className="h-4 w-4 rounded-md mr-2 my-1"
                src="./checkIcon.svg"
                alt="Check"
              />{" "}
              <span>Early Access</span>
            </div>
            <div className="flex items-center ">
              <img
                className="h-4 w-4 rounded-md mr-2 my-1"
                src="./checkIcon.svg"
                alt="Check"
              />{" "}
              <span>Subscription Discounts</span>
            </div>
          </div>
          <div className="-ml-4 mt-4 -mb-4">
            <Email />
          </div>
        </div>
        <div className="absolute bg-white rounded-tl-xl h-5/6 w-5/12 right-0 bottom-0"></div>
      </div>
    </>
  );
}
