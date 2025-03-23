import { Header } from "@/src/components/headerWrapper/Header";
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
        <MoviesListWrapper movieCategory="Shows">
          <div>
            Hello World
          </div>
        </MoviesListWrapper>
      </div>
    </div>
  );
};

export default Movies;
