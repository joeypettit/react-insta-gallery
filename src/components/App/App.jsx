import Axios from 'axios';
import React, { useEffect } from 'react';
import './App.css';

function App() {

    useEffect(()=> {getGallery()}, []);

    function getGallery() {
      Axios({
        method: 'GET',
        url: '/gallery/',
      }).then((response) => {
        console.log('GET completed', response.data);
      }).catch((error) => sendStatus(500));
    }





    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList />
      </div>
    );
}

export default App;
