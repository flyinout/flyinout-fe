export default function Email() {
    return (
        <div className="flex items-center w-full mb-5">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-primary w-full mx-4"
        />
        <button className="btn btn-primary normal-case grow-0">
          Join the waitlist!
        </button>
      </div>
    )
}