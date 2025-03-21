import Image from "next/image";
import { Button } from "../components/button/Button";
import { TextArea } from "../components/home-second-section/TextArea";
import { Navbar } from "../components/nav/Navbar";
import playIcon from "@/public/icons/playIcon.svg";
import leftIcon from "@/public/icons/left-arrow.svg";
import rightIcon from "@/public/icons/right-arrow.svg";
import cat_img1 from "@/public/images/cat_img.jpg";
import cat_img2 from "@/public/images/cat_img2.png";
import cat_img3 from "@/public/images/cat_img3.png";
import { CategoryCard } from "../components/category/CategoryCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="landing_page"></div>
      <div className="flex flex-col gap-6 justify-center items-center px-14">
        <h3 className="font-manrope font-bold text-white text-6xl">
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
          <Button text="Start Watching Now" icon={playIcon} variant="filled" />
        </div>
      </div>
      {/* Second Section */}
      <div className="px-14 pt-32 flex flex-col gap-14 w-full">
        <div className="flex justify-between items-center">
          <TextArea
            text="Explore our wide variety of categories"
            subText="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          />

          <div className="flex w-60 justify-between items-center p-2 rounded-lg bg-black-06 border border-black-12">
            <div className="bg-black-10 border border-black-12 flex justify-center items-center p-2 cursor-pointer">
              <span>
                <Image src={leftIcon} alt="left-arrow" />
              </span>
            </div>

            <div className="flex  justify-between">
              {[...Array(4)].map((_, index) => (
                <div
                  className={`rounded-2xl ${
                    index === 0 ? "bg-red-45" : "bg-black-20"
                  }  border w-8 h-2 p-px`}
                  key={index}
                ></div>
              ))}
            </div>

            <div className="bg-black-10 border border-black-12 flex justify-center items-center p-2 cursor-pointer">
              <span>
                <Image src={rightIcon} alt="left-arrow" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex  gap-3">
        <CategoryCard categoryName="Action" imgSrc={cat_img1} />
        <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
        <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
        <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
        <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
      </div>
      </div>
      
    </div>
  );
}
