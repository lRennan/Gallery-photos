import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const accessKey = 'NY0Cge90HSqlSB6hr1WXLgOLSYnt0juqa0Kovb96fIo'; // Unsplash API Access Key

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=21`); // Fetch 20 photos
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <h1>Rennan Photo Gallery</h1>
      <div className="gallery">
        {photos.map(photo => (
          <div key={photo.id} className="photo">
            <a href={photo.links.html} target="_blank" rel="noopener noreferrer">
              <img src={photo.urls.small} alt={photo.alt_description} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
