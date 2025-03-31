import Image, { StaticImageData } from "next/image";
import React from "react";
import rightIcon from "@/public/icons/right-arrow.svg";

export const CategoryCard = ({
  categoryName,
  imgSrc,
}: {
  categoryName: string;
  imgSrc: StaticImageData;
}) => {
  return (
    <div className="rounded-lg category-card w-full h-auto bg-black-10 p-5 border border-black-15 flex flex-col gap-3 ">
      <span>
        <Image src={imgSrc} className="w-full" alt="right_icon" />
      </span>
      <div className="flex justify-between text-white">
        <p className="text-sm min-[1400px]:text-base font-semibold font-manrope"> {categoryName} </p>
        <span>
          <Image src={rightIcon} alt="right_icon" />
        </span>
      </div>
    </div>
  );
};
