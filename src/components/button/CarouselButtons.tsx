import React from "react";
import Image from "next/image";
import leftIcon from "@/public/icons/left-arrow.svg";
import rightIcon from "@/public/icons/right-arrow.svg";

export const CarouselButtons = ({onScroll}: {onScroll: (direction: string) => void}) => {
  return (
    <>
      <div className="flex w-60 justify-between items-center p-2 rounded-lg bg-black-06 border border-black-12">
        <div onClick={() => onScroll("left")} className="bg-black-10 border border-black-12 flex justify-center items-center p-2 cursor-pointer">
          <span>
            <Image src={leftIcon} alt="left-arrow" />
          </span>
        </div>

        <div className="flex  justify-between">
          {[...Array(4)].map((_, index) => (
            <div
              className={`rounded-2xl ${
                index === 0 ? "bg-red-45" : "bg-black-20"
              }  border w-8 h-2 p-px`}
              key={index}
            ></div>
          ))}
        </div>

        <div onClick={() => onScroll("right")} className="bg-black-10 border border-black-12 flex justify-center items-center p-2 cursor-pointer">
          <span>
            <Image src={rightIcon} alt="left-arrow" />
          </span>
        </div>
      </div>
    </>
  );
};
