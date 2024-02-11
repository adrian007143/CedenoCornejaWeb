"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import cclogo from "@/public/assets/CCLogo.png";
import classnames from "classnames";
import Container from "../shared/container";

function Header() {
  //**Highlight Navigation Link **/
  const currentPath = usePathname();

  // ***List of navigation links***/
  const links = [
    { label: "Home", href: "/" },
    // { label: "About", href: "/about" },
    { label: "Sevices", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="flex item-center  gap-20 bg-[#d0ddcc] bg-opacity-80 w-full shadow-lg fixed p-3 ">
      <Container className="flex items-center justify-between gap-20">
        <div className="flex items-center justify-start">
          <Link href="/" className="px-8 py-0">
            <Image
              src={cclogo}
              width={90}
              height={90}
              alt="Picture of the author"
            />
          </Link>
          <p className=" text-[16px] text-[#0d240d] font-medium ">
            Auditing, Accounting, Tax and Management Advisory{" "}
          </p>
        </div>
        <div className="flex items-center flex-auto justify-end gap-2">
          <ul className="flex item-justify gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={classnames({
                  "bg-slate-100": link.href === currentPath,
                  "bg-[#515f53] text-[white]": link.href !== currentPath,
                  "rounded-full px-5 py-2 shadow-lg hover:bg-slate-200 hover:text-black transition-all":
                    true,
                })}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>

        {/****THIS FOR DEVELOPMENT STAGE ***/ }
        {/* <div className="flex items-center gap-4 ">
           <Link href="#" className="rounded-full px-5 py-2 shadow-lg bg-gray-900 text-[white] hover:bg-slate-200 transition-all">
                Login
           </Link>
           <Link href="#" className="rounded-full px-5 py-2 shadow-lg bg-[#183118] text-[white] hover:bg-slate-200 transition-all">
                Sign-up
           </Link>

        </div> */}
        
      </Container>
    </nav>
  );
}

export default Header;
