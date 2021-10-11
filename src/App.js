import React, { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/gallery/Gallery'
import Form from './components/form/Fom'

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  console.log()
  return (
    <>
      <Form />
      {images && <Gallery images={images} />}

    </>
  );
}

export default App;
