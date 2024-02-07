"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import cclogo from "@/public/assets/CCLogo.png";


function Header() {
  //**Highlight Navigation Link **/
  const currentPath = usePathname();

  // ***List of navigation links***/
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sevices", href: "/svcs" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex item-center  gap-20 bg-[#e1e2e1] bg-opacity-60 w-full shadow-lg fixed p-3 ">
      <div className="flex items-start max-w-7xl lg:mx-auto  md:px-10 xl: w-full">
        <div className="flex items-center">
          <Link href="/" className="px-8 py-0">
            <Image
              src={cclogo}
              width={90}
              height={90}
              alt="Picture of the author"
            />
          </Link>
          <p className=" text-[15px] text-[#0d240d] ">
            {" "}
            Auditing, Accounting, Tax and Management Advisory{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center flex-auto justify-end gap-2">
        <ul className="flex item-justify gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                link.href === currentPath ? "bg-slate-100" : "bg-[#acc2ac]"
              } rounded-full px-5 py-2 shadow-lg hover:bg-slate-200 transition-all`}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
