import { Button } from "../components/button/Button";
import { TextArea } from "../components/home-second-section/TextArea";
import { Navbar } from "../components/nav/Navbar";
import playIcon from "@/public/icons/playIcon.svg";

import cat_img1 from "@/public/images/cat_img.jpg";
import cat_img2 from "@/public/images/cat_img2.png";
import cat_img3 from "@/public/images/cat_img3.png";
import { CategoryCard } from "../components/category/CategoryCard";
import { CarouselButtons } from "../components/button/CarouselButtons";

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

          <CarouselButtons />
        </div>

        <div className="flex  gap-3">
          <CategoryCard categoryName="Action" imgSrc={cat_img1} />
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
