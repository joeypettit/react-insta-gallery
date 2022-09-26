import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Banner from '../Banner/Banner';
import Header from '../Header/Header'

function App() {
    const [galleryList, setGalleryList] = useState(['no values yet!']);



    function getGallery() {
      axios({
        method: 'GET',
        url: '/gallery/',
      }).then((response) => {
        console.log('GET completed', response.data);
        setGalleryList(response.data);
      }).catch((error) => console.log(error));
    }

    useEffect(()=> {
      getGallery();
    }, []);

    return (
      <div className="App">
        <Banner />
        <Header />
        <GalleryList galleryList={galleryList} getGallery={getGallery}/>

      </div>
    );
}

export default App;
