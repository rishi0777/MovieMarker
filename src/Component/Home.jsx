import React, { useState } from "react";
import data from "../assets/data.json";
import Pagination from "./Pagination";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <MovieList />
      <Pagination />
    </div>
  );
};
function Banner() {
  return (
    <div className="banner">
      <img
        className="bannerImage"
        src={
          "https://image.tmdb.org/t/p/original" + data.results[0].backdrop_path
        }
      />
      <div className="bannerTitle">{data.results[0].title}</div>
    </div>
  );
}

function MovieList() {
  const [pageMovie, setPageMovie] = useState(data.results);
  return (
    <div className="movieList">
      <h1 className="movieListHeading">Trending Movies</h1>
      <div className="pageMovie">
        {pageMovie.map((obj, idx) => {
          return (
            <div className="singleMovieItem">
              <img
                className="singleMovieItemImage"
                src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path}
              ></img>
              <div className="singleMovieItemTitle"> {obj.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
