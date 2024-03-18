"use client";

import { useFormStatus } from "react-dom";

const DeleteContactBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="text-white bg-red-700 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-lg"
      aria-disabled={pending}
      
    >
      {pending ? "Deleting...." : "Delete"}
    </button>
  );
};

export default DeleteContactBtn;
