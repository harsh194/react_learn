// Photo.jsx

import React from 'react';

const Photo = ({ genre, onClick }) => {
  return (
    <div className="photo-item" onClick={onClick}>
      {/* Adjust the src attribute to correctly point to the images based on the genre */}
      <img src={`./public/images/${genre}/${genre}_photo1.png`} alt={genre} />
      <p>{genre}</p>
    </div>
  );
};

export default Photo;

