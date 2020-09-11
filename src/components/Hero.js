import React, { useState, useEffect } from "react";

import { randomMovie } from "../util";
import url from "../api";

const Hero = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      await fetch(url.treningMovies)
        .then((res) => res.json())
        .then((data) => {
          setTrendingMovie(data.results[randomMovie(data.results.length)]);
        });
    };

    fetchTrendingMovie();
  }, []);

  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="movie-title">
          {trendingMovie?.name ||
            trendingMovie?.title ||
            trendingMovie?.original_name}
        </h1>
        <div className="hero-btns">
          <button className="hero-btn">
            <i className="fas fa-play"></i> Play
          </button>
          <button className="hero-btn dark-btn">More Info</button>
        </div>
        <p className="hero-description">{trendingMovie?.overview}</p>
        <div className="fade-bottom"></div>
      </div>
      <div className="hero-img">
        <img
          src={`https://image.tmdb.org/t/p/original/${trendingMovie?.poster_path}`}
          alt="poster"
        />
      </div>
    </header>
  );
};

export default Hero;
