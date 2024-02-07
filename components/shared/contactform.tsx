"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const Contactform = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("First Name:", firstname);
    console.log("Last Name:", lastname);
  };

  return (
    <div className=" rounded-lg shadow-2xl border p-14 bg-slate-200 bg-opacity-50 ">
      <div className="text-center">
        <h1 className="text-[30px] text-[#173d17] font-extrabold">
          Contact Us
        </h1>
        <p className="mt-2">Please fill in the form below:</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10">
        <div className="flex item-center justify-center flex-col gap-5">
          <div className="flex items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-5">
              <Input
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                type="text"
                name="firstname"
                required
                id="firstname"
                className="input input-bordered w-full max-w rounded-md"
                placeholder="First Name"
              />
              <Input
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                type="text"
                name="lastname"
                id="lastname"
                required
                className="input input-bordered w-full max-w"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-5">
              <Input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                id="email"
                required
                className="input input-bordered w-full max-w"
                placeholder="Email Address"
              />
              <Input
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                type="text"
                name="contact"
                id="contact"
                required
                className="input input-bordered w-full max-w"
                placeholder="Phone or Mobile number"
              />
            </div>
          </div>
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="rounded-lg justify-center h-60 "
            placeholder="Message"
            required
          ></Textarea>
          <Button variant="outline" className="bg-[#839083] shadow-2xl mt-10 ">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
