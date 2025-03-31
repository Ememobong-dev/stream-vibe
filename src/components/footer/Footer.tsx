import Image from "next/image";
import React from "react";
import facebook from "@/public/icons/facebook.svg";
import twitter from "@/public/icons/twitter.svg";
import linkedIn from "@/public/icons/linkedIn.svg";

export const Footer = () => {
  return (
    <div className="w-full bg-black-06 p-14">
      <div className="flex justify-between ">
        <div className="flex flex-col gap-3">
          <h3 className="mb-5 text-white">Home</h3>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Categories
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Devices
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Pricing
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            FAQ
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="mb-5 text-white">Movies</h3>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Genres
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Trending
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            New Release
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Popular
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="mb-5 text-white">Shows</h3>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Genres
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Trending
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            New Release
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Popular
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="mb-5 text-white">Support</h3>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Contact Us
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="mb-5 text-white">Subscription</h3>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Plans
          </span>
          <span className="text-grey-60 text-sm min-[1400px]:text-base">
            Features
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="mb-5 text-white">Connect With Us</h3>
          <div className="flex gap-3">
            <Image src={facebook} width={36} height={36} alt="icons" />
            <Image src={twitter} width={36} height={36} alt="icons" />
            <Image src={linkedIn} width={36} height={36} alt="icons" />
          </div>
        </div>
      </div>
    </div>
  );
};
