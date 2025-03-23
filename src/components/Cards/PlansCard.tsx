import React from "react";
import { Button } from "../button/Button";

export const PlansCard = ({
  planTitle,
  planInfo,
  planAmount,
}: {
  planTitle: string;
  planInfo: string;
  planAmount: string;
}) => {
  return (
    <div className="rounded-lg bg-black-10 text-white border border-black-15 p-10">
      <div className="flex flex-col gap-3">
        <h3 className=" text-xl min-[1400px]:text-2xl font-bold font-manrope"> {planTitle} </h3>
        <span>
          <p className="text-grey-60 text-sm min-[1400px]:text-base">{planInfo}</p>
        </span>
        <span className="flex items-end">
          <p className="text-2xl min-[1400px]:text-4xl text-white font-manrope font-semibold">{planAmount}</p>
          <p className="text-grey-60 text-lg">/month</p>
        </span>
        <div className="flex justify-between">
          <Button variant="bordered" size="sm" text="Start Free Trial" />
          <Button variant="filled" size="sm" text="Choose Plan" />
        </div>
      </div>
    </div>
  );
};
