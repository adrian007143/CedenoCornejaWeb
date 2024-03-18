import ContactForm from "./ContactFrom";

const ContactUs = () => {
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
                  Unit 2-C 2nd Floor GV Square Building Commonwealth Avenue,
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
                  CONTACT NUMNER:
                </h2>
                <p className="leading-relaxed">(02)709-26854 </p>
                <p className="leading-relaxed">+639095038581</p>
                <p className="leading-relaxed">+639178502650</p>
              </div>
            </div>
          </div>
          <ContactForm/>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
