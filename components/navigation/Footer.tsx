// FooterNew.js

import Link from "next/link";
import Image from "next/image";
import cclogo from "@/public/assets/CCLogo.png";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";


const FooterNew = () => {
  const socialMedia = [
    {
      href: "https://web.facebook.com/cedeno.corneja",
      icon: <BsFacebook />,
      name: "Facebook",
      classname:"m-2 lg:m-5 text-[30px] hover:text-[black] text-blue-600 ",
    },
    {
      href: "https://www.linkedin.com/company/cedeno-corneja-cpas-co",
      icon: <BsLinkedin />,
      name: "LinkedIn",
      classname:"m-2 lg:m-5 text-[30px] hover:text-[black] text-blue-700 "
    },
    {
      href: "https://www.youtube.com/channel/UC7joGXDAXh4RqA1YX1YD27Q",
      icon: <BsYoutube />,
      name: "YouTube",
      classname:"m-2 lg:m-5 text-[35px] hover:text-[black] text-red-600 "
    },
  ];

  return (
    <footer className="text-gray-600 body-font bottom-0 w-full bg-[#eaefe9] border-t border-gray-200">
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Link href="/" className="px-8 py-0">
            <Image src={cclogo} width={90} height={90} alt="Company Logo" />
          </Link>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </div>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Cedeno Corneja Cpas Co.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
          <div>Follow us: </div>
          {socialMedia.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className= {link.classname}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.icon}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
};

export default FooterNew;
