export default function ObjectiveSection() {
  return (
    <>
      <div className="text-center flex flex-col items-center mt-10 prose">
        <h1 className="my-2">Work Less, Recruit More</h1>
        <p>
          FlyinOut helps you boost your Recruiting Productivity at Any Scale
        </p>
      </div>

      <div className="relative w-full">
        <div
          className="flex rounded-lg  h-96"
          style={{
            background:
              "linear-gradient(77.79deg, #5C70F4 -5.75%, #9347E7 111.09%)",
          }}
        ></div>
        <div
          className="absolute bg-black rounded-lg h-80 w-80 z-10"
          style={{
            top: " 50%",
            right: "-5rem",
            bottom: " 50%",
            width: "40rem",
            transform: 'translateY(-50%)'
          }}
        ></div>
      </div>
    </>
  );
}
