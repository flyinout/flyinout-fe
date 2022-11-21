export default function Title() {
  return (
    <div className="text-center flex flex-col items-center mt-10 prose">
      <button className="mb-4 btn btn-sm rounded-full normal-case text-amber-700 bg-orange-200">
        Early Access
      </button>
      <h1 className="my-2">The ultimate Modern Recruiting Platform</h1>
      <p>
        FlyinOut is not just your platform to find candiadtes we use state of
        the art machine learning technogies to close down on your recruitment
        needs.
      </p>
      <div className="flex items-center w-full mb-5">
        <input
          type="text"
          placeholder="Enter your email"
          class="input input-primary w-full mx-4"
        />
        <button class="btn btn-primary normal-case grow-0">
          Join the waitlist!
        </button>
      </div>
    </div>
  );
}
