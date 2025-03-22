import React from "react";

export const TextArea = ({
  text,
  subText,
}: {
  text: string;
  subText: string;
}) => {
  return (
    <div>
      <h3 className="font-manrope font-bold text-white text-4xl">{text}</h3>
      <div className="flex justify-between">
        <p className="text-grey-60 w-[70%] text-lg font-manrope font-normal">
          {subText}
        </p>
      </div>
    </div>
  );
};
