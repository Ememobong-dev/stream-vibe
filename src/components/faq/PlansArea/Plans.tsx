"use client";

import React, { useState } from "react";
import { TextArea } from "../../home-second-section/TextArea";
import { PlansCard } from "../../Cards/PlansCard";

export const Plans = () => {
  const [activePlanType, setActivePlanType] = useState("monthly");

  const plansData = [
    {
      planType: "monthly",
      plansInfo: [
        {
          planAmount: "9.99",
          planDescription:
            "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
          planTitle: "Basic Plan",
        },
        {
          planAmount: "12.99",
          planDescription:
            "Access to a wider selection of movies and shows, including most new releases and exclusive content",
          planTitle: "Standard Plan",
        },
        {
          planAmount: "14.99",
          planDescription:
            "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
          planTitle: "Premium Plan",
        },
      ],
    },
    {
      planType: "yearly",
      plansInfo: [
        {
          planAmount: "19.99",
          planDescription:
            "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
          planTitle: "Premium Xtra Plan",
        },
        {
          planAmount: "24.99",
          planDescription:
            "Access to a wider selection of movies and shows, including most new releases and exclusive content",
          planTitle: "VIP Plan",
        },
        {
          planAmount: "68.99",
          planDescription:
            "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
          planTitle: "VVIP Plan",
        },
      ],
    },
  ];

//   console.log("PLANSDATA" , plansData.filter( (item) => item.planType === activePlanType));

  return (
    <div className="flex flex-col gap-14 w-full">
      <div className="flex justify-between items-center">
        <TextArea
          text="Choose the plan that's right for you"
          subText="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />

        <div className="flex w-60 justify-between gap-5 items-center p-2 rounded-lg bg-black-06 border border-black-12">
          <button
            onClick={() => setActivePlanType("monthly")}
            className={` ${
              activePlanType === "monthly"
                ? "bg-black-12 text-white border border-black-12 rounded-lg"
                : "bg-transparent text-grey-60"
            }  w-1/2  flex justify-center items-center p-2 cursor-pointer`}
          >
            <span>
              <p>Monthly</p>
            </span>
          </button>

          <button
            onClick={() => setActivePlanType("yearly")}
            className={` ${
              activePlanType === "yearly"
                ? "bg-black-12 text-white border border-black-12 rounded-lg"
                : "bg-transparent text-grey-60"
            }  w-1/2  flex justify-center items-center p-2 cursor-pointer`}
          >
            <span>
              <p>Yearly</p>
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {plansData.filter( (item) => item.planType === activePlanType)[0].plansInfo.map((item, index) => (
          <PlansCard
            key={index}
            planAmount={item.planAmount}
            planInfo={item.planDescription}
            planTitle={item.planTitle}
          />
        ))
        }
      </div>
    </div>
  );
};
