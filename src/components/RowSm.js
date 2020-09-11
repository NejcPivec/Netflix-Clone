import React, { useState, useEffect } from "react";

const Row = ({ fetchedUrl, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      await fetch(fetchedUrl)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    };

    fetchMovies();
  }, []);

  return (
    <div className="row-sm">
      <h2 className="row-title-sm">{title}</h2>
      <div className="row-movies-sm">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt="Movie Poster"
            className="movie-small"
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
