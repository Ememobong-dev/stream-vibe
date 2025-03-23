import React from "react";
import { Button } from "../button/Button";

export const MoviesListWrapper = ({
  children,
  movieCategory,
}: {
  children: React.ReactNode;
  movieCategory: string;
}) => {
  return (
    <div className="px-14 my-28">
      <div className=" border border-black-15 p-5 w-full relative h-auto">
        <div className="absolute w-auto -top-5 ">
          <Button variant="filled" text={movieCategory} />
        </div>
        <div className="mt-10 relative">{children}</div>
      </div>
    </div>
  );
};
