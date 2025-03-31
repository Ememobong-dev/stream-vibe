"use client";

import { Button } from "../components/button/Button";
import { TextArea } from "../components/home-second-section/TextArea";
import { Navbar } from "../components/nav/Navbar";
import playIcon from "@/public/icons/playIcon.svg";
import devicePhone from "@/public/icons/device-phone.svg";
import deviceTablet from "@/public/icons/device-tablet.svg";
import deviceSmartTv from "@/public/icons/device-smartTv.svg";
import deviceLaptop from "@/public/icons/device-laptop.svg";
import deviceGaming from "@/public/icons/device-gaming.svg";
import deviceVr from "@/public/icons/device-vr.svg";
import cat_img1 from "@/public/images/cat_img.jpg";
import cat_img2 from "@/public/images/cat_img2.png";
import cat_img3 from "@/public/images/cat_img3.png";
import { CategoryCard } from "../components/category/CategoryCard";
import { CarouselButtons } from "../components/button/CarouselButtons";
import { DeviceServicesCard } from "../components/Cards/DeviceServicesCard";
import { Footer } from "../components/footer/Footer";
import { Banner1 } from "../components/banners/Banner1";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Faq from "../components/faq/Faq";
import { Plans } from "../components/faq/PlansArea/Plans";

export default function Home() {
  const [cardWidth, setCardWidth] = useState(0);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(".category-card");
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth + 12); // 12px accounts for the gap
      }
    }
  }, []);

  const handleScroll = (direction: string) => {
    if (scrollRef.current && cardWidth > 0) {
      const scrollAmount = cardWidth * 5; // Scroll 5 cards at a time
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="landing_page"></div>
      <div className="flex flex-col gap-6 justify-center items-center px-14">
        <h3 className="font-manrope font-bold text-white text-4xl  min-[1400px]:text-6xl">
          The Best Streaming Experience
        </h3>
        <span className="flex justify-center items-center">
          <p className="text-center  w-[75%] font-manrope font-normal text-lg text-grey-60">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </span>
        <div>
          <Link href={"/movies"}>
            <Button
              text="Start Watching Now"
              icon={playIcon}
              variant="filled"
            />
          </Link>
        </div>
      </div>
      {/* Second Section */}
      <div className="px-14 pt-32 flex flex-col gap-14 w-full">
        <div className="flex justify-between items-center">
          <TextArea
            text="Explore our wide variety of categories"
            subText="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          />

          <CarouselButtons onScroll={handleScroll} />
        </div>

        <div
          ref={scrollRef}
          className="flex  gap-3 overflow-x-scroll scroll-smooth"
        >
          <CategoryCard categoryName="Action" imgSrc={cat_img1} />
          <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
          <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
          <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
          <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
          <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
          <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
          <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
          <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
          <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
          <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
          <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
          <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
        </div>
      </div>

      {/* Third Section */}
      <div className="px-14 pt-32 flex flex-col gap-14 w-full">
        <div className="flex justify-between items-center">
          <TextArea
            text="We Provide you streaming experience across various devices."
            subText="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <DeviceServicesCard
            icon={devicePhone}
            deviceType="SmartPhones"
            info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
          />

          <DeviceServicesCard
            icon={deviceTablet}
            deviceType="Tablet"
            info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
          />

          <DeviceServicesCard
            icon={deviceSmartTv}
            deviceType="Smart TV"
            info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
          />

          <DeviceServicesCard
            icon={deviceLaptop}
            deviceType="Laptops"
            info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
          />

          <DeviceServicesCard
            icon={deviceGaming}
            deviceType="Gaming Consoles"
            info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
          />

          <DeviceServicesCard
            icon={deviceVr}
            deviceType="Vr headsets"
            info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
          />
        </div>
      </div>

      {/* Fourth Section */}
      <div className="px-14 pt-32 flex flex-col gap-14 w-full">
        <div className="flex justify-between items-center">
          <TextArea
            text="Frequently Asked Questions"
            subText="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          />

          <Link href={"/support"}>
            <Button variant="filled" text="Ask a Question" />
          </Link>
        </div>

        <Faq />
      </div>

      {/* Fifth Section */}
      <div className="px-14 pt-32">
        <Plans />
      </div>

      {/* SIXTH SECTION */}
      <Banner1 />

      <Footer />
    </div>
  );
}
