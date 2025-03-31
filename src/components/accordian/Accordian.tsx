import Image from "next/image";
import React, { useState } from "react";
import minusIcon from "@/public/icons/minus-white.svg";
import plusIcon from "@/public/icons/plus-white.svg";
import redLine from "@/public/icons/red-line.svg";

export const Accordian = ({
  num,
  question,
  answers,
}: {
  num: string;
  question: string;
  answers?: string;
}) => {
  const [accordianNum, setaccordianNum] = useState("00");

  const handleAccordian = (val: string) => {
    setaccordianNum(val);
  };

  return (
    // <div>
    //   <div className="py-4 cursor-pointer flex justify-between items-center" onClick={() => handleAccordian(num)}>
    //     <div className={`flex items-center gap-4`}>
    //       <div className="flex justify-center items-center text-white bg-black-12 border border-black-15 w-10 h-10 rounded-lg p-2">
    //         {num}
    //       </div>
    //       <div>
    //         <h3 className="text-white">{question}</h3>
    //       </div>
    //     </div>
    //     <div>
    //       <Image src={accordianNum === num ? minusIcon : plusIcon} className="w-5" alt="" />
    //     </div>
    //   </div>
    //   <div>
    //     <p>
    //       {answers}
    //     </p>
    //   </div>
    //   <span>
    //     <Image src={redLine} alt="redline" />
    //   </span>
    // </div>

    <div>
      <div
        className="py-4 cursor-pointer flex items-start gap-5"
        onClick={() => handleAccordian(num)}
      >
        <div className="flex justify-center items-center text-white bg-black-12 border border-black-15 w-16 h-16 rounded-lg p-2">
          {num}
        </div>
        {/*  */}
        <div className="w-full flex flex-col gap-5">
          <div className="flex w-full justify-between items-center">
            <h3 className="text-white">{question}</h3>
            <span>
              <Image
                src={accordianNum === num ? minusIcon : plusIcon}
                className="w-5"
                alt=""
              />
            </span>
          </div>
          {/* ANSWERS */}
          <div>
            <p className="text-grey-60">{answers}</p>
          </div>
        </div>
      </div>

      <span>
        <Image src={redLine} alt="redline" />
      </span>
    </div>
  );
};
