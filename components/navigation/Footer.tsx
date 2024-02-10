import Link from "next/link";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

const NavFooter = () => {
  const socialMedia = [
    //***Add here new social media links***
    { href: "https://web.facebook.com/cedeno.corneja", icon: <BsFacebook /> },
    {
      href: "https://www.linkedin.com/company/cedeno-corneja-cpas-co",
      icon: <BsLinkedin />,
    },
    {
      href: "https://www.youtube.com/channel/UC7joGXDAXh4RqA1YX1YD27Q",
      icon: <BsYoutube />,
    },
  ];

  return (
    <div className="flex item-center w-full mt-auto">
      <div className="text-center text-gray-950 justify-between py-5 px-4">
        ©2024 by Cedeno Corneja CPAs Co.
      </div>
      <div className="flex justify-end item-center flex-auto">
        {socialMedia.map((link) => (
          <Link key={link.href} href={link.href} className="m-5 text-[30px]">
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavFooter;
