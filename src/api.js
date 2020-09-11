const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const url = {
  treningMovies: `${baseUrl}/trending/movies/week?api_key=${apiKey}`,
  netflixMovies: `${baseUrl}/discover/tv?api_key=${apiKey}&with_networks=213`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`,
  actionMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`,
  animationMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=16`,
  comedyMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=35`,
  documentaryMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=99`,
  horrorMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=27`,
  scifiMovies: `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=28`,
};

export default url;
