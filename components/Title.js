import { useState } from "react";
import { SectionHeading, SectionSubHeading } from "./Hero";
import { Responsive } from "./ResponsiveWidth";

export default function Title() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = async () => {
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
      const resp = await fetch('/api/sheets', {
        method: 'POST',
        body: JSON.stringify({ email: email.trim(), linkedIn: linkedIn.trim()}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await resp.json();
    }
  };

  return (
    <div className="text-center flex flex-col items-center mt-10 text-white">
      <button className="mb-4 btn btn-sm normal-case text-base text-primary rounded-lg px-4 bg-yellow-500 hover:bg-yellow-600 duration-300">
        Beta Access
      </button>
      <SectionHeading>The Ultimate Modern Recruiting Platform</SectionHeading>
      <SectionSubHeading>
        FlyinOut is not just your platform to find candiadtes we use state of
        the art machine learning technogies to close down on your recruitment
        needs.
      </SectionSubHeading>
      <Responsive>
        <div className="flex flex-col items-center w-full px-4 md:px-2 my-8 md:flex-row md:justify-center">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="input input-bordered max-w-xs text-gray-900 w-full grow-1 px-2 mb-4 md:mb-0  md:mr-2"
          />
          <button
            className="btn btn-primary normal-case md:ml-2"
            onClick={onSubmit}
          >
            Join the waitlist!
          </button>
        </div>
      </Responsive>
    </div>
  );
}
