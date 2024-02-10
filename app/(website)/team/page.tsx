import Image from "next/image";
import adrian from "@/public/pictures/adrian.jpg"


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
     src={adrian}
     alt="adrian"
     width={300}
     height={300}
     
     />

    </div>


    </div>
  );
}

export default Team;
