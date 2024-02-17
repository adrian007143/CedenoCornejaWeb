"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import cclogo from "@/public/assets/CCLogo.png";
import classnames from "classnames";
import Container from "../shared/container";

function Header() {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={classnames(
        "flex items-center bg-[#eaefe9] bg-opacity-80 w-full shadow-lg fixed top-0 left-0 right-0 text-white p-4 z-10 transition-all",
        { "transform translate-y-0": visible, "transform -translate-y-full": !visible }
      )}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <Link href="/" className="px-8 py-0">
            <Image src={cclogo} width={90} height={90} alt="Company Logo" />
          </Link>
          <p className="text-[16px] text-[#0d240d] font-medium hidden md:block">
            Auditing, Accounting, Tax and Management Advisory
          </p>
        </div>
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={classnames({
                  "bg-slate-100 text-black": link.href === currentPath,
                  "bg-[#515f53] text-white": link.href !== currentPath,
                  "rounded-full px-5 py-2 shadow-lg hover:bg-slate-200 hover:text-black transition-all":
                    true,
                })}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <div className="md:hidden bg-[#d0ddcc] bg-opacity-80 w-full py-4">
          <ul className="flex flex-col items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={classnames({
                  "text-black": link.href === currentPath,
                  "text-[#515f53]": link.href !== currentPath,
                  "hover:text-black transition-all": true,
                })}
              >
                <li>{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
