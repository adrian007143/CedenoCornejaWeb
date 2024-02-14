"use client"


import Image from "next/image";
import Adrian from "@/public/pictures/Adrian.jpg";
import Norberto from "@/public/pictures/Norberto.png";
import Thelma from "@/public/pictures/Thelma.jpg";
import { useEffect, useState } from "react";

function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col md:mx-auto md:max-w-4xl pt-10">
      <div className={`text-center mb-10 transition-all duration-500 ease-in-out animate-fadeInUp ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-extrabold text-green-900 mb-5">Our Team</h2>
        <p className="font-semibold text-gray-700">We’re Here To Help</p>
        <p className="mt-4 text-gray-700">
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
        <div className={`flex justify-center items-center flex-col border-b border-gray-300 pb-6 transition-all duration-500 ease-in-out transform hover:scale-105 animate-fadeInUp ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4 relative">
            <Image src={Norberto} alt="Norberto" style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-extrabold text-green-900 mb-2">Norberto Corneja, CPA</h3>
            <p className="font-semibold mb-1 text-gray-700">Managing Partner</p>
            <p className="text-gray-700">
              Norberto Corneja has been the backbone of Cedeno Corneja CPAs Co.
              from the very beginning, making sure we’re as organized and
              effective as possible in managing our client accounting needs.
              You can count on Norberto Corneja to be with you every step of the
              way.
            </p>
          </div>
        </div>
        {/* Adrian's section */}
        <div className={`flex justify-center items-center flex-col border-b border-gray-300 pb-6 transition-all duration-500 ease-in-out transform hover:scale-105 animate-fadeInUp ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4 relative">
            <Image src={Adrian} alt="Adrian" style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-extrabold text-green-900 mb-2">Adrian Cedeno, CPA</h3>
            <p className="font-semibold mb-1 text-gray-700">Managing Partner</p>
            <p className="text-gray-700">
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
