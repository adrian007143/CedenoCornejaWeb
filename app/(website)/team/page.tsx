import Image from "next/image";
import Adrian from "@/public/pictures/Adrian.jpg"


function Team() {
  return (
    <div>
      <div className="text-center">
        <div className="text-[30px] mt-2 mb-5 text-[#0d350df9] font-extrabold">
          Our Team
        </div>
        <div>We’re Here To Help</div>
      </div>
    <div>
     <Image
     src={Adrian}
     alt="adrian"
     width={200}
     height={200}
     className="rounded-full shadow-lg"     
     />

    </div>


    </div>
  );
}

export default Team;
