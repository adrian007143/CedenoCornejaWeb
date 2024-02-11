import Image from "next/image";
import Adrian from "@/public/pictures/Adrian.jpg";
import Norberto from "@/public/pictures/Norberto.png";
import Thelma from "@/public/pictures/Thelma.jpg";

function Team() {
  return (
    <div className="flex flex-col  mb-20">
      <div className="flex flex-col text-center justify-center mx-40">
        <div className="text-[30px] mt-2 mb-5 text-[#0d350df9] font-extrabold">
          Our Team
        </div>
        <div className="mb-10 font-semibold text-[#1b291b]">
          We’re Here To Help
        </div>
        <p>
          Our team of certified accounting professionals works diligently and
          collaboratively to bring you individualized attention and effective,
          timely financial management solutions. At Cedeno Corneja CPAs Co., we
          love what we do, which translates into positive client experiences.
          Schedule a consultation and see how you can benefit from working with
          us.
        </p>
      </div>
      {/* start here */}
      <div className="lg:flex lg:justify-start lg:flex-col lg:mt-10 gap-20 lg:mx-40 md:m-auto md:flex md:flex-col">
        <div className="flex md:mt-5">
          <div style={{minWidth: 100, 
            maxWidth: 250,
            minHeight: 100,
            maxHeight: 250,}}>
            <Image
              src={Norberto}
              alt="Norberto"
              width={250}
              height={250}
              className="rounded-full shadow-lg"
              
            />
          </div>
          <div className="flex flex-col gap-4 mx-10 ">
            <h1 className="font-extrabold text-[22px]">
              Norberto Corneja, CPA
            </h1>
            <p>Managing Partner</p>
            <p>
              Norberto Corneja has been the backbone of Cedeno Corneja CPAs Co.
              from the very beginning, making sure we’re as organized and
              effective as possible in managing our client   accounting needs.
              You can count on Norberto Corneja to be with you every step of the
              way
            </p>
          </div>
        </div>
        <div className="flex">
          <div style={{minWidth: 100, 
            maxWidth: 250,
            minHeight: 100,
            maxHeight: 250,}}>
            <Image
              src={Adrian}
              alt="adrian"
              width={160}
              height={160}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4 mx-10 je">
            <h1 className="font-extrabold text-[22px]">Adrian Cedeno, CPA</h1>
            <p>Managing Partner</p>
            <p>
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
