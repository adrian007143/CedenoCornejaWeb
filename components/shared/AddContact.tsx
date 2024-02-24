import { create } from "@/app/action/contactAction";
import Form from "../forms/Form";
import Input from "../forms/Input";


const contactInput = [
  { id: "1", name: "firstname", type: "text", placeholder: "First Name" },
  { id: "2", name: "lastname", type: "text", placeholder: "Last Name" },
  { id: "3", name: "email", type: "email", placeholder: "Email Address" },
  { id: "4", name: "contactno", type: "text", placeholder: "Contact No" },
];

const AddContact = () => {
  return (
    <Form
      action={create}
      className="lg:w-1/3 md:w-1/2 bg-gray-100 shadow-2xl border-solid flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 lg:p-10 rounded-lg animate-fadeInUp"
    >
      <h2 className="text-green-800 font-sans mb-5 title-font text-center font-bold text-3xl ">
        Contact Us
      </h2>
      <div className="relative mb-4 flex flex-col gap-5 pt-3 sm:p-2">
        {contactInput.map((contact) => (
          <Input
            key={contact.id}
            name={contact.name}
            type={contact.type}
            placeholder={contact.placeholder}
            required
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        ))}
      </div>
      <div className="relative mb-4 sm:p-2">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Submit
      </button>
    </Form>
  );
};

export default AddContact;
