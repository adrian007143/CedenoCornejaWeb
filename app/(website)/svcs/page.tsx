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
import { list } from "postcss";

function Services() {
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
    <div>
      <div className="text-[30px] font-extrabold text-[#173d17] text-center p-5">
        Our Services
      </div>

      <div className="p-5 grid grid-flow-col gap-5 text-[18px]">
        <div className=" flex flex-col">
          {serviceLists.map((serviceList) => (
            <ul
              key={serviceList.id}
              className="flex gap-5 m-8 text-xl items-center"
            >
              <div> {serviceList.icon} </div>
              <div> {serviceList.description}</div>
            </ul>
          ))}
        </div>

        <div>
          <Image
            src={Accounting}
            width={800}
            height={1200}
            alt="picture of services"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
