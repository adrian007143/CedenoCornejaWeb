import Link from "next/link";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

const NavFooter = () => {
  return (
    <div className="flex item-center w-full">
      <div className="text-center justify-between py-5 px-4">
        ©2024 by Cedeno Corneja CPAs Co.
      </div>
      <div className="flex justify-end item-center flex-auto">
        <Link
          href="https://web.facebook.com/cedeno.corneja"
          className="m-5 text-[30px]"
        >
          <BsFacebook />
        </Link>
        <Link
          href="https://www.linkedin.com/company/cedeno-corneja-cpas-co"
          className="m-5 text-[30px]"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UC7joGXDAXh4RqA1YX1YD27Q"
          className="m-5 text-[30px]"
        >
          <BsYoutube />
        </Link>
      </div>
    </div>
  );
};

export default NavFooter;
