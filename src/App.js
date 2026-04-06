import React from 'react'; 
import './App.css';
import Row from './Row';
import requests from "./requests";
import Banner from './Banner';

/* ... other imports ... */

function App() {
  return (
    <div className="App">
      {/* Nav Bar */}
      <Banner />
      
      {/* Corrected Row Tag below - Remove the extra <Row from line 12 */}
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true} 
      />

      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      {/* ... rest of your rows ... */}
    </div>
  );
}

export default App;