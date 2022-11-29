import { useState } from "react";

export default  function Title() {

  const [email, setEmail] = useState('')

  const handleEmailChange =  (e) => {
    console.log('console ', e)
    setEmail(e)
    
  }

  const onSubmit =async () => {
    console.log('onSubmit')
     fetch('/api/sheets', {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

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
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="Enter your email"
          className="input input-primary w-full mx-4"
        />
        <button onClick={onSubmit} className="btn btn-primary normal-case grow-0">
          Join the waitlist!
        </button>
      </div>
    </div>
  );
}
