import { Banner1 } from "@/src/components/banners/Banner1";
import { Footer } from "@/src/components/footer/Footer";
import { Header } from "@/src/components/headerWrapper/Header";
import { MoviesCategoryList } from "@/src/components/moviesBorderWrapper/MoviesCategoryList";
import { MoviesListWrapper } from "@/src/components/moviesBorderWrapper/MoviesListWrapper";
import { Navbar } from "@/src/components/nav/Navbar";
import React from "react";
import cat_img1 from "@/public/images/cat_img.jpg";
import cat_img2 from "@/public/images/cat_img2.png";
import cat_img3 from "@/public/images/cat_img3.png";
import { CategoryCard } from "@/src/components/category/CategoryCard";

const Movies = () => {
  return (
    <div>
      <Navbar />
      <Header
        headerImg="moviesHeader"
        headerTitle="Avengers : Endgame"
        headerDescription="With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen."
      />
      <div>
        <MoviesListWrapper movieCategory="Movies">
          <div>
            <MoviesCategoryList categoryTopic="Our Genres">
              <CategoryCard categoryName="Action" imgSrc={cat_img1} />
              <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
              <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
              <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
              <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
            </MoviesCategoryList>

       

          </div>
        </MoviesListWrapper>

        <MoviesListWrapper movieCategory="Show">
          <div>
            <MoviesCategoryList categoryTopic="Our Genres">
              <CategoryCard categoryName="Action" imgSrc={cat_img1} />
              <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
              <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
              <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
              <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
            </MoviesCategoryList>

            <MoviesCategoryList categoryTopic="Popular Top 10 In Genres">
              <CategoryCard categoryName="Action" imgSrc={cat_img1} />
              <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
              <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
              <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
              <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
            </MoviesCategoryList>

            <MoviesCategoryList categoryTopic="Trending Now">
              <CategoryCard categoryName="Action" imgSrc={cat_img1} />
              <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
              <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
              <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
              <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
            </MoviesCategoryList>

            <MoviesCategoryList categoryTopic="New Releases">
              <CategoryCard categoryName="Action" imgSrc={cat_img1} />
              <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
              <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
              <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
              <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
            </MoviesCategoryList>

            <MoviesCategoryList categoryTopic="Must - Watch Movies">
              <CategoryCard categoryName="Action" imgSrc={cat_img1} />
              <CategoryCard categoryName="Adventure" imgSrc={cat_img2} />
              <CategoryCard categoryName="Comedy" imgSrc={cat_img3} />
              <CategoryCard categoryName="Drama" imgSrc={cat_img1} />
              <CategoryCard categoryName="Horrow" imgSrc={cat_img2} />
            </MoviesCategoryList>

          </div>
        </MoviesListWrapper>
      </div>
      <Banner1 />
      <Footer />
    </div>
  );
};

export default Movies;
