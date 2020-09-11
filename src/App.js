import React from "react";
import "./css/style.css";
import url from "./api";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import RowSm from "./components/RowSm";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Row fetchedUrl={url.netflixMovies} title="Netflix Originals" />
      <RowSm fetchedUrl={url.topRated} title="Top Rated" />
      <RowSm fetchedUrl={url.actionMovies} title="Action Movies" />
      <RowSm fetchedUrl={url.comedyMovies} title="Comedy Movies" />
      <RowSm fetchedUrl={url.documentaryMovies} title="Documentary Movies" />
      <RowSm fetchedUrl={url.horrorMovies} title="Horror Movies" />
      <RowSm fetchedUrl={url.scifiMovies} title="Sci-fi Movies" />
    </div>
  );
}

export default App;
