import { useState } from "react";

export default function Title() {

  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    console.log('console ', e)
    setEmail(e)

  }

  const onSubmit = async () => {
    console.log('onSubmit')

    let regexCheck = String(email.trim())
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!regexCheck) {
      console.log('Not happening');
      return;
    }

    // defining dummy linkedIn
    let linkedIn = 'changethis.linkedin'
 

    if (fetch) {
      await fetch('/api/sheets', {
        method: 'POST',
        body: JSON.stringify({ email: email.trim(), linkedIn: linkedIn.trim()}),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((data) => console.log(data));
    }
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
