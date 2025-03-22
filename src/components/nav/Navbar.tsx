"use client";

import Image from "next/image";
import React from "react";
import brandLogo from "@/public/icons/logo.svg";
import searchIcon from "@/public/icons/searchIcon.svg";
import notiicationIcon from "@/public/icons/notiicationIcon.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  {
    navTitle: "Home",
    link: "/",
  },
  {
    navTitle: "Movies and Shows",
    link: "/movies",
  },
  {
    navTitle: "Support",
    link: "/support",
  },
  {
    navTitle: "Subscriptions",
    link: "/subscription",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="fixed top-0 bg-transparent py-3 px-14 w-full">
      <div className="flex justify-between items-center">
        <span>
          <Image src={brandLogo} onClick={() => router.push('/')} className="cursor-pointer" alt="brand_logo" />
        </span>
        <div className="flex gap-4 justify-center items-center p-2 bg-black-06 border-4 border-black-12 rounded-lg">
          {navLinks.map((navs, index) => (
            <Link href={navs.link} key={index}>
              <p
                className={`text-grey-75 py-3 px-5 ${
                  pathname === navs.link
                    ? "text-white bg-black-10 rounded-lg"
                    : ""
                } `}
              >
                {navs.navTitle}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <span>
            <Image src={searchIcon} className="cursor-pointer w-7" alt="brand_logo" />
          </span>
          <span>
            <Image src={notiicationIcon} className="cursor-pointer w-7" alt="brand_logo" />
          </span>
        </div>
      </div>
    </div>
  );
};
