"use client";

import React from "react";
import { CarouselButtons } from "../button/CarouselButtons";

export const MoviesCategoryList = ({
  categoryTopic,
  children
}: {
  categoryTopic: string;
  children: React.ReactNode
}) => {

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="font-manrope font-bold text-3xl min-[1400px]:text-4xl text-white">
          {" "}
          {categoryTopic}{" "}
        </h3>
        <CarouselButtons  />
      </div>
      <div className="grid grid-cols-5 gap-5 my-10">
        {children}
      </div>
    </div>
  );
};
