import { Banner1 } from "@/src/components/banners/Banner1";
import { Footer } from "@/src/components/footer/Footer";
import { Header } from "@/src/components/headerWrapper/Header";
import { MoviesCategoryList } from "@/src/components/moviesBorderWrapper/MoviesCategoryList";
import { MoviesListWrapper } from "@/src/components/moviesBorderWrapper/MoviesListWrapper";
import { Navbar } from "@/src/components/nav/Navbar";
import React from "react";

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
           <MoviesCategoryList categoryTopic="Our Genres" />
           <MoviesCategoryList categoryTopic="Popular Top 10 In Genres" />
           <MoviesCategoryList categoryTopic="Trending Now" />
           <MoviesCategoryList categoryTopic="New Releases" />
           <MoviesCategoryList categoryTopic="Must - Watch Movies" />
          </div>
        </MoviesListWrapper>

        <MoviesListWrapper movieCategory="Show">
          <div>
           <MoviesCategoryList categoryTopic="Our Genres" />
           <MoviesCategoryList categoryTopic="Popular Top 10 In Genres" />
           <MoviesCategoryList categoryTopic="Trending Now" />
           <MoviesCategoryList categoryTopic="New Releases" />
           <MoviesCategoryList categoryTopic="Must - Watch Movies" />
          </div>
        </MoviesListWrapper>
      </div>
      <Banner1 />
      <Footer />
    </div>
  );
};

export default Movies;
