import React from 'react'; 
import './App.css';
import Row from './row';
import request from './request';

function App() {
  return (
    <div className="App">
      <h1>Hey bonagua-netflix-clone! Let's build a Netflix Clone Front-end today</h1>
      <Row  title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals } />
      <Row  title="TRENDING" fetchUrl={request.fetchTrending } />

      <Row  title="TOP RATED" fetchUrl={request.fetchTopRated } />
      <Row  title="ACTION MOVIES" fetchUrl={request.fetchActionMovies } />
      <Row  title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies } />
      <Row  title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies } />
      <Row  title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies } />
      <Row  title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries } />
    </div>
  );
}

export default App;

