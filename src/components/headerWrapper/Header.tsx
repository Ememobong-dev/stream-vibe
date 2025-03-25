import React from "react";
import { Button } from "../button/Button";
import playIcon from "@/public/icons/playIcon.svg";
import plusIcon from "@/public/icons/plus-white.svg";
import audioIcon from "@/public/icons/audio-icon.svg";
import likeIcon from "@/public/icons/likeIcon.svg";
import Image from "next/image";

export const Header = ({
  headerImg,
  headerTitle,
  headerDescription,
//   carousel,
}: {
  headerImg: string;
  headerTitle: string;
  headerDescription: string;
  carousel?: boolean;
}) => {
  return (
    <div>
      <div className={` ${headerImg} relative`}>
        <div className="flex flex-col justify-center items-center">
          <div className="absolute bottom-36">
            <div className="flex flex-col gap-4 justify-center items-center">
              <h3 className="text-white capitalize font-manrope font-bold text-3xl min-[1400px]:text">
                {" "}
                {headerTitle}{" "}
              </h3>
              <span className="flex justify-center">
                <p className="text-grey-60 w-[75%] text-base min-[1400px]:text-lg text-center">
                  {headerDescription}
                </p>
              </span>
              <div className="flex gap-4">
                <Button variant="filled" icon={playIcon} text="Play Now" />
                <div className="flex justify-center w-10 h-10 bg-black-06 border border-black-15 items-center">
                  <Image src={plusIcon} alt="icon" />
                </div>
                <div className="flex justify-center w-10 h-10 bg-black-06 border border-black-15 items-center">
                  <Image src={likeIcon} alt="icon" />
                </div>
                <div className="flex justify-center w-10 h-10 bg-black-06 border border-black-15 items-center">
                  <Image src={audioIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
