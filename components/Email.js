import { Responsive } from "./ResponsiveWidth";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Email() {
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
      console.log("Not happening");
      return;
    }

    if (fetch) {
      const resp = await fetch("/api/sheets", {
        method: "POST",
        body: JSON.stringify({
          email: email.trim(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await resp.json();
    }
  };
  return (
    <Responsive>
      <motion.div className="flex flex-col items-center w-full px-4 md:px-2 my-8 md:flex-row md:justify-center">
        <motion.div
          className="w-full mr-2"
          whileHover={{
            scale: [1, 1.1],
            duration: 0.8,
            stiffness: 1,
          }}
        >
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="input input-bordered max-w-md text-white placeholder-white w-full grow-1 px-2 mb-4 md:mb-0  md:mr-2"
          />
        </motion.div>
        <motion.button
          whileHover={{
            scale: [1, 1.1],
            fontSize: ["14px", "16px"],
            duration: 1,
            stiffness: 1,
          }}
          className="btn btn-primary normal-case md:ml-2 transition-none"
          onClick={onSubmit}
        >
          Join the waitlist!
        </motion.button>
      </motion.div>
    </Responsive>
  );
}
