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
import { Accordian } from "../components/accordian/Accordian";
import { PlansCard } from "../components/Cards/PlansCard";
import { Footer } from "../components/footer/Footer";
import { Banner1 } from "../components/banners/Banner1";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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


  }, [])


  const handleScroll = (direction: string) => {
    if (scrollRef.current && cardWidth > 0) {
      const scrollAmount = cardWidth * 5; // Scroll 5 cards at a time
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }

  }


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

        <div ref={scrollRef} className="flex  gap-3 overflow-x-scroll scroll-smooth">
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

        <div className="grid grid-cols-2  gap-x-24 gap-y-10">
          <Accordian num="01" question="What is StreamVibe?" answers="        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fuga voluptatibus veritatis deleniti beatae! Consequuntur corporis esse nostrum, explicabo maxime laudantium iusto tempora sint, molestiae minima reprehenderit sequi amet laboriosam?" />
          <Accordian num="02" question="How much does StreamVibe cost?" />
          <Accordian
            num="03"
            question="What content is available on StreamVibe?"
          />
          <Accordian num="04" question="How can I watch StreamVibe?" />
          <Accordian num="05" question="How do I sign up for StreamVibe?" />
          <Accordian num="06" question="What is the StreamVibe free trial?" />
        </div>
      </div>

      {/* Fifth Section */}
      <div className="px-14 pt-32 flex flex-col gap-14 w-full">
        <div className="flex justify-between items-center">
          <TextArea
            text="Choose the plan that's right for you"
            subText="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          />

          <div className="flex w-60 justify-between gap-5 items-center p-2 rounded-lg bg-black-06 border border-black-12">
            <button className="bg-black-12 text-white w-1/2 border border-black-12 flex justify-center items-center p-2 cursor-pointer">
              <span>
                <p>Monthly</p>
              </span>
            </button>

            <button className="bg-transparent text-grey-60  w-1/2 flex justify-center items-center p-2 cursor-pointer">
              <span>
                <p>Yearly</p>
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <PlansCard
            planAmount="9.99"
            planInfo="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
            planTitle="Basic Plan"
          />
          <PlansCard
            planAmount="12.99"
            planInfo="Access to a wider selection of movies and shows, including most new releases and exclusive content"
            planTitle="Standard Plan"
          />
          <PlansCard
            planAmount="14.99"
            planInfo="Access to a widest selection of movies and shows, including all new releases and Offline Viewing."
            planTitle="Premium Plan"
          />
        </div>
      </div>

      {/* SIXTH SECTION */}
      <Banner1 />

      <Footer />
    </div>
  );
}
