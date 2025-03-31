import Image, { StaticImageData } from "next/image";
import React from "react";
import rightIcon from "@/public/icons/right-arrow.svg";
import { useRouter } from "next/navigation";

export const CategoryCard = ({
  categoryName,
  imgSrc,
  type
}: {
  categoryName: string;
  imgSrc: StaticImageData;
  type: "movies" | "shows";
}) => {
  const router = useRouter();

  return (
    <div className="rounded-lg cursor-pointer category-card w-full h-auto bg-black-10 p-5 border border-black-15 flex flex-col gap-3 "
    onClick={() =>
      router.push(`/${type}/${categoryName.replace(/\s+/g, "-").toLowerCase()}`)
    }
    >
      <span>
        <Image src={imgSrc} className="w-full" width={300} height={300} alt="right_icon" />
      </span>
      <div className="flex justify-between items-center cursor-pointer text-white">
        <p className="text-sm min-[1400px]:text-base font-semibold font-manrope"> {categoryName} </p>
        <span>
          <Image src={rightIcon} height={20} width={20} alt="right_icon" />
        </span>
      </div>
    </div>
  );
};
