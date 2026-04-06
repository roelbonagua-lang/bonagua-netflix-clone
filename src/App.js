import React from 'react'; 
import './App.css';
import Row from './row'; // Fixed: Changed 'Row' to 'row' to match your file name
import requests from "./Requests";
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* Added Nav here so it displays at the top of your page */}
      <Nav />
      
      <Banner />
      
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true} 
      />

      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;