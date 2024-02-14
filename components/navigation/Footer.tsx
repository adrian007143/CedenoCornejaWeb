import Link from "next/link";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

const NavFooter = () => {
  const socialMedia = [
    {
      href: "https://web.facebook.com/cedeno.corneja",
      icon: <BsFacebook />,
      name: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/cedeno-corneja-cpas-co",
      icon: <BsLinkedin />,
      name: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/channel/UC7joGXDAXh4RqA1YX1YD27Q",
      icon: <BsYoutube />,
      name: "YouTube",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center w-full mt-auto">
      <div className="text-center text-gray-950 py-5 px-4 lg:order-2 lg:flex-1">
        ©2024 by Cedeno Corneja CPAs Co.
      </div>
      <div className="flex justify-center lg:justify-end items-center lg:flex-1 lg:order-1">
        {socialMedia.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="m-2 lg:m-5 text-[30px] hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavFooter;
