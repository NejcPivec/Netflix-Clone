import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ fetchedUrl, title }) => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");

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

  const onClick = (movie) => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(movie.name)
        .then((url) => {
          setTrailer(url);
        })
        .catch((err) => console.log(err));
    }
  };

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // Get id out of youtube link
  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-movies">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => onClick(movie)}
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt="Movie Poster"
            className="movie"
          />
        ))}
      </div>
      {trailer && (
        <YouTube
          videoId={youtube_parser(trailer)}
          opts={opts}
          className="video"
        />
      )}
    </div>
  );
};

export default Row;
