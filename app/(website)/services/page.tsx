"use client"


import Image from "next/image";
import Accounting from "@/public/assets/accounting.jpg";
import {
  BsFillBriefcaseFill,
  BsFillPencilFill,
  BsFillFileSpreadsheetFill,
  BsFillCalculatorFill,
  BsFillBuildingsFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";

function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts
    setIsVisible(true);
  }, []);

  const serviceLists = [
    {
      id: 1,
      description: "Accounting and Bookkeeping Services",
      icon: <BsFillCalculatorFill />,
    },
    {
      id: 2,
      description: "Audit and Assurance Services",
      icon: <BsFillPencilFill />,
    },
    {
      id: 3,
      description: "Tax Planning and Compliance",
      icon: <BsFillFileSpreadsheetFill />,
    },
    {
      id: 4,
      description: "Advisory and Consulting Services",
      icon: <BsFillBriefcaseFill />,
    },
    {
      id: 5,
      description: "Government Compliance Services",
      icon: <BsFillBuildingsFill />,
    },
    {
      id: 6,
      description: "Outsourced Accounting Services",
      icon: <BsFillPeopleFill />,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-5">
      <div className={`text-[30px] font-extrabold text-[#173d17] text-center p-5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 transition-all duration-500 ease-in-out'}`}>
        Our Services
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 text-[18px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 transition-all duration-500 ease-in-out'}`}>
        <div className="flex flex-col">
          {serviceLists.map((serviceList) => (
            <ul
              key={serviceList.id}
              className="flex gap-5 m-5 text-xl items-center animate-fadeInUp"
            >
              <div>{serviceList.icon}</div>
              <div>{serviceList.description}</div>
            </ul>
          ))}
        </div>

        <div>
          <Image
            src={Accounting}
            width={800}
            height={1200}
            alt="picture of services"
            className="rounded-md shadow-lg animate-fadeInUp"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
