

const ContactUs = () => {
  const formInput = [
    {
      id: "firstName",
      type: "text",
      name: "firstName",
      placeholder: "First Name",
    },
    {
      id: "lastName",
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
    },
    { id: "email", type: "email", name: "email", placeholder: "Email Address" },
    {
      id: "contactNo",
      type: "text",
      name: "contactNo",
      placeholder: "Contact Number",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-xl animate-fadeInUp">
            <iframe
              className="absolute inset-0"
              width="100%"
              height="100%"
              title="map"
              style={{
                filter: "opacity(1)",
                margin: "0",
                border: "none",
                overflow: "hidden",
              }}
              src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=cedeno corneja&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-2xl bg-opacity-90 border-solid">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS:
                </h2>
                <p className="mt-1">
                  Unit 2-C 2nd FloorGV Square Building Commonwealth Avenue,
                  Brgy. Greater Lagro Quezon City{" "}
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL:
                </h2>
                <a href="mailto:cedeno.corneja@gmail.com" className="text-indigo-500 leading-relaxed">
                  cedeno.corneja@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">(02)709-26854 </p>
                <p className="leading-relaxed">+639095038581</p>
                <p className="leading-relaxed">+639178502650</p>
              </div>
            </div>
          </div>
          <form action={""} className="lg:w-1/3 md:w-1/2 bg-[#f0f4f5] shadow-2xl border-solid flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 lg:p-10 rounded-lg animate-fadeInUp">
            <h2 className="text-gray-900 text-lg mb-1 title-font text-center font-extrabold">
              Contac us
            </h2>

            <div className="relative mb-4 flex flex-col gap-5 pt-3">
              {formInput.map((forminput) => (
                <input
                  key={forminput.id}
                  type={forminput.type}
                  id={forminput.id}
                  placeholder={forminput.placeholder}
                  name={forminput.name}
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              ))}
            </div>
            <div className="relative mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
