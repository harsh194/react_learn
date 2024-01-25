import React, { useState } from 'react';
import Photo from './Photo'; // Assuming you have a Photo component

const genres = ['ganesha', 'shiva']; // Add more genres as needed

const PhotoCollection = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handlePhotoClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <h1>Photo Collection</h1>
      <p>Click on a photo to see more of that genre.</p>
      <div className="photo-grid">
        {genres.map((genre) => (
          <Photo key={genre} genre={genre} onClick={() => handlePhotoClick(genre)} />
        ))}
      </div>

      {selectedGenre && (
        <div>
          <h2>{selectedGenre} Photos</h2>
          {/* Render photos of the selected genre here */}
          {/* You can fetch and display photos based on the selectedGenre state */}
        </div>
      )}
    </div>
  );
};

export default PhotoCollection;
