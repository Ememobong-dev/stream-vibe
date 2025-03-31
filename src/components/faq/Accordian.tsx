import Image from "next/image";
import React from "react";
import minusIcon from "@/public/icons/minus-white.svg";
import plusIcon from "@/public/icons/plus-white.svg";
import redLine from "@/public/icons/red-line.svg";

export const Accordian = ({
  num,
  question,
  answers,
  showAccordian,
  onClick,
}: {
  num: string;
  question: string;
  answers: string;
  showAccordian?: boolean;
  onClick: () => void;
}) => {
  return (
    <div>
      <div
        className="py-4 cursor-pointer flex items-start gap-5"
        onClick={onClick}
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
                src={showAccordian ? minusIcon : plusIcon}
                className="w-5"
                alt=""
              />
            </span>
          </div>
          {/* ANSWERS */}
          {showAccordian && (
            <div>
              <p className="text-grey-60">{answers}</p>
            </div>
          )}
        </div>
      </div>

      <span>
        <Image src={redLine} alt="redline" />
      </span>
    </div>
  );
};
