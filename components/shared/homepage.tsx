"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-cover bg-center select-none min-h-screen flex flex-col justify-center">
      <div className={`opacity-0 ${isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}>
        <h1 className="p-8 text-center text-[#1b4a1bf9] font-extrabold text-4xl md:text-6xl lg:text-7xl">
          Cedeno Corneja CPAs Co.
        </h1>
        <div className="text-center text-lg text-[#194219] font-semibold mb-10">
          Compliance is better than Compromise
        </div>
        <div className="flex justify-center">
          <Link href="/team" className="rounded-full py-3 px-6 bg-[#1b381b] text-white hover:bg-slate-100 hover:text-black shadow-lg transition-all duration-300">
              Learn More
          </Link>
        </div>
      </div>

      <div className={`opacity-0 ${isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'}`}>
        <div className="text-center mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold mb-10">
            All About Us
          </h1>

          <div className="mx-auto max-w-lg text-lg text-justify">
            <p>
              <span className="text-xl font-extrabold">CEDENO CORNEJA CPAS CO.</span>{" "}
              is an audit and accounting firm that offers a wide range of
              services; including audit, accounting, tax, consulting, and business advisory.
              With a team coming from diverse industries and different generations, the firm possesses
              a spectrum of knowledge, skills, and experiences where it can bring out solutions to challenges.
            </p>
            <p className="mt-5">
              A General Professional Partnership registered with the Securities and Exchange Commission
              in November 2018, Cedeno Corneja CPAs Co. operates from its business address at{" "}
              <span className="font-semibold">Unit 2-C 2nd Floor of GV Square Building, Casa Milan,
              Commonwealth Avenue in Quezon City.</span> The firms commitment to upholding industry
              standards is evident through its membership in the Philippine Institute of Certified Public
              Accountants and its accreditations with BOA, BIR, and CDA. Backed by a wealth of experience
              and a track record of delivered engagements, Cedeno Corneja CPAs Co. is an alternative partner
              of businesses seeking to achieve financial stability and growth. The firms dedication to delivering
              quality services and personalized attention to its clients sets it apart from the competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
