import Image, { StaticImageData } from "next/image";
import React from "react";

export const DeviceServicesCard = ({
  icon,
  deviceType,
  info,
}: {
  icon: StaticImageData;
  deviceType: string;
  info: string;
}) => {
  return (
    <div className="p-5 rounded-lg border border-black-15 bg-gradient-to-tr from-[#0F0F0F]  via-[#0F0F0F] via-65% to-red-45/30  to-100%">
      <div className="flex gap-4 items-center">
        <span>
          <Image src={icon} alt="device_icon" />
        </span>
        <span>
          <p className="font-semibold font-manrope text-xl min-[1400px]:text-2xl text-white"> {deviceType} </p>
        </span>
      </div>
      <div className="mt-3 text-grey-60 font-normal font-manrope min-[1400px]:text-lg">
        <p>{info}</p>
      </div>
    </div>
  );
};
