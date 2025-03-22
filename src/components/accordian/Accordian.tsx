import Image from "next/image";
import React from "react";
// import minusIcon from "@/public/icons/minus-white.svg";
import plusIcon from "@/public/icons/plus-white.svg";
import redLine from "@/public/icons/red-line.svg";


export const Accordian = ({
  num,
  question,
}: {
  num: string;
  question: string;
}) => {
  return (
    <div>
      <div className="py-4 flex justify-between items-center">
        <div className={`flex items-center gap-4`}>
          <div className="flex justify-center items-center text-white bg-black-12 border border-black-15 w-10 h-10 rounded-lg p-2">
            {num}
          </div>
          <div>
            <h3 className="text-white">{question}</h3>
          </div>
        </div>
        <div>
          <Image src={plusIcon} className="w-5" alt="" />
        </div>
      </div>
      <span>
        <Image src={redLine} alt="redline" />
      </span>
    </div>
  );
};
