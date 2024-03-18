"use client";

import { editContact } from "@/app/action/contactAction";
import { useFormStatus } from "react-dom";

const SaveContactBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="text-white bg-green-600 border-0 py-2 px-5 focus:outline-none hover:bg-green-700 rounded text-lg"
      aria-disabled={pending}
      formAction={editContact}
    >
      {pending ? "Saving...." : "Save"}
    </button>
  );
};

export default SaveContactBtn;
