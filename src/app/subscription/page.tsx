import React from "react";
import { Navbar } from "@/src/components/nav/Navbar";
import { TextArea } from "@/src/components/home-second-section/TextArea";
import { PlansCard } from "@/src/components/Cards/PlansCard";
import { Banner1 } from "@/src/components/banners/Banner1";
import { Footer } from "@/src/components/footer/Footer";

import { Table, Tag } from "antd";
import { Plans } from "@/src/components/faq/PlansArea/Plans";

const columns = [
  {
    title: "Features",
    dataIndex: "feature",
    key: "feature",
  },
  {
    title: "Basic",
    dataIndex: "basic",
    key: "basic",
  },
  {
    title: (
      <span>
        Standard <Tag color="red">Popular</Tag>
      </span>
    ),
    dataIndex: "standard",
    key: "standard",
  },
  {
    title: "Premium",
    dataIndex: "premium",
    key: "premium",
  },
];

const data = [
  {
    key: "1",
    feature: "Price",
    basic: "$9.99/Month",
    standard: "$12.99/Month",
    premium: "$14.99/Month",
  },
  {
    key: "2",
    feature: "Content",
    basic: "Wide selection of movies and shows, some new releases.",
    standard: "Wider selection, most new releases and exclusive content",
    premium: "Widest selection, all new releases and offline viewing",
  },
  {
    key: "3",
    feature: "Devices",
    basic: "1 device",
    standard: "2 devices",
    premium: "4 devices",
  },
  {
    key: "4",
    feature: "Free Trial",
    basic: "7 Days",
    standard: "7 Days",
    premium: "7 Days",
  },
  {
    key: "5",
    feature: "Cancel Anytime",
    basic: "Yes",
    standard: "Yes",
    premium: "Yes",
  },
  { key: "6", feature: "HDR", basic: "No", standard: "Yes", premium: "Yes" },
  {
    key: "7",
    feature: "Dolby Atmos",
    basic: "No",
    standard: "Yes",
    premium: "Yes",
  },
  {
    key: "8",
    feature: "Ad-Free",
    basic: "No",
    standard: "Yes",
    premium: "Yes",
  },
  {
    key: "9",
    feature: "Offline Viewing",
    basic: "No",
    standard: "Yes, for select titles",
    premium: "Yes, for all titles",
  },
  {
    key: "10",
    feature: "Family Sharing",
    basic: "No",
    standard: "Yes, up to 5 family members",
    premium: "Yes, up to 6 family members",
  },
];

const Subscription = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-52 px-14">
        <Plans />

        {/* PLANS */}
        <div className=" flex flex-col gap-14 mt-28 ">
          <div className="flex justify-between items-center">
            <TextArea
              text="Compare our plans and find the right one for you"
              subText="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
            />
          </div>

          {/* TABLES */}
          <div className="">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
            />
          </div>
        </div>
      </div>
      {/* BANNER */}
      <Banner1 />

      <Footer />
    </div>
  );
};

export default Subscription;
