import React from "react";
import { Button } from "../button/Button";

export const Banner1 = () => {
  return (
    <div className="p-14 ">
      <div className="px-14 bannerImage1 flex justify-between items-center">
        <div>
          <h3 className="font-bold text-5xl text-white">
            Start your free trial today!
          </h3>
          <p className="text-grey-60">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <Button variant="filled" text="Start a Free Trial" />
      </div>
    </div>
  );
};
