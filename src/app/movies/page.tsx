"use client";

import { Banner1 } from "@/src/components/banners/Banner1";
import { Footer } from "@/src/components/footer/Footer";
import { Header } from "@/src/components/headerWrapper/Header";
import { MoviesCategoryList } from "@/src/components/moviesBorderWrapper/MoviesCategoryList";
import { MoviesListWrapper } from "@/src/components/moviesBorderWrapper/MoviesListWrapper";
import { Navbar } from "@/src/components/nav/Navbar";
import React, { useEffect, useState } from "react";
import { CategoryCard } from "@/src/components/category/CategoryCard";
import axios from "axios";

const Movies = () => {
  const [moviesCategories, setMoviesCategories] = useState([]);
  const [showCategories, setShowCategories] = useState([]);

  const moviesCategoryList = async () => {
    try {
      const res = await axios.get("/data/moviesData.json");
      setMoviesCategories(res.data.categories);
    } catch (e) {
      console.log("Error fetching data:", e);
    }
  };

  const showsCategoryList = async () => {
    try {
      const res = await axios.get("/data/showsData.json");
      setShowCategories(res.data.categories);
    } catch (e) {
      console.log("Error fetching data:", e);
    }
  };

  useEffect(() => {
    moviesCategoryList();
    showsCategoryList();
  }, []);

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
          {moviesCategories.map((category, index) => (
            <MoviesCategoryList
              key={index}
              categoryTopic={category.categoryTopic}
            >
              {category.movies.map((movie) => (
                <CategoryCard
                  key={movie.id}
                  categoryName={movie.title}
                  imgSrc={movie.imgSrc}
                  type="movies"
                />
              ))}
            </MoviesCategoryList>
          ))}
        </MoviesListWrapper>

        <MoviesListWrapper movieCategory="Shows">
          {showCategories.map((category, index) => (
            <MoviesCategoryList
              key={index}
              categoryTopic={category.categoryTopic}
            >
              {category.shows.map((show) => (
                <CategoryCard
                  key={show.id}
                  categoryName={show.title}
                  imgSrc={show.imgSrc}
                  type="shows"
                />
              ))}
            </MoviesCategoryList>
          ))}
        </MoviesListWrapper>
      </div>
      <Banner1 />
      <Footer />
    </div>
  );
};

export default Movies;
