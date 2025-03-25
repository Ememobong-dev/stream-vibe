import React from "react";
import clockIcon from "@/public/icons/clockIcon.svg";
import Image, { StaticImageData } from "next/image";

interface EpisodeAreaType {
  episodeNumber: string;
  episodeNumberInWords: string;
  episodeTitle: string;
  imgSrc: StaticImageData;
  episodeDuration: string;
  episodeDescription: string;
}

export const EpisodeArea = ({
  episodeNumber,
  episodeNumberInWords,
  episodeTitle,
  imgSrc,
  episodeDuration,
  episodeDescription,
}: EpisodeAreaType) => {
  return (
    <div className="flex gap-8 py-5 items-center justify-center">
      <h2 className="text-grey-60 text-3xl"> {episodeNumber} </h2>
      <div className="flex items-center gap-5">
        <span>
          <Image src={imgSrc} className="w-[200px] h-[100px]"  alt="episode_thumbnail" />
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl flex flex-wrap ">
              Chapter {episodeNumberInWords} : {episodeTitle}
            </h3>
            <div className="flex  p-2 rounded-lg items-center gap-2 bg-black-08 border border-black-15">
              <span>
                <Image src={clockIcon} alt="clock" />
              </span>
              <span className="text-grey-60">{episodeDuration} mins</span>
            </div>
          </div>
          <p className="text-grey-60 text-base">{episodeDescription}</p>
        </div>
      </div>
    </div>
  );
};
