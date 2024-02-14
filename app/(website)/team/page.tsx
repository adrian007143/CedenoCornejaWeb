import Image from "next/image";
import Adrian from "@/public/pictures/Adrian.jpg";
import Norberto from "@/public/pictures/Norberto.png";
import Thelma from "@/public/pictures/Thelma.jpg";

function Team() {
  return (
    <div className="flex flex-col md:mx-auto md:max-w-4xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-green-900 mb-5 transition-all duration-500 ease-in-out">Our Team</h2>
        <p className="font-semibold text-gray-700 transition-all duration-500 ease-in-out">We’re Here To Help</p>
        <p className="mt-4 text-gray-700 transition-all duration-500 ease-in-out">
          Our team of certified accounting professionals works diligently and
          collaboratively to bring you individualized attention and effective,
          timely financial management solutions. At Cedeno Corneja CPAs Co., we
          love what we do, which translates into positive client experiences.
          Schedule a consultation and see how you can benefit from working with
          us.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Norberto's section */}
        <div className="flex justify-center items-center flex-col border-b border-gray-300 pb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
            <Image src={Norberto} alt="Norberto" layout="responsive" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-extrabold text-green-900 mb-2 transition-all duration-500 ease-in-out">Norberto Corneja, CPA</h3>
            <p className="font-semibold mb-1 text-gray-700 transition-all duration-500 ease-in-out">Managing Partner</p>
            <p className="text-gray-700 transition-all duration-500 ease-in-out">
              Norberto Corneja has been the backbone of Cedeno Corneja CPAs Co.
              from the very beginning, making sure we’re as organized and
              effective as possible in managing our client accounting needs.
              You can count on Norberto Corneja to be with you every step of the
              way.
            </p>
          </div>
        </div>
        {/* Adrian's section */}
        <div className="flex justify-center items-center flex-col border-b border-gray-300 pb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
            <Image src={Adrian} alt="Adrian" layout="responsive" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-extrabold text-green-900 mb-2 transition-all duration-500 ease-in-out">Adrian Cedeno, CPA</h3>
            <p className="font-semibold mb-1 text-gray-700 transition-all duration-500 ease-in-out">Managing Partner</p>
            <p className="text-gray-700 transition-all duration-500 ease-in-out">
              Adrian Cedeno is one of the managing partners of the team with
              exposure to Accounting and Taxation. Contact us today to schedule
              a consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
