"use client";

import { useFormStatus } from "react-dom";

const SubmitContactBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      aria-disabled={pending}
    >
      {pending ? "Submitting...." : "Submit"}
    </button>
  );
};

export default SubmitContactBtn;
