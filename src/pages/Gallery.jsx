import React, { useEffect, useState } from "react";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      "https://source.unsplash.com/300x200/?pizza",
      "https://source.unsplash.com/300x200/?burger",
      "https://source.unsplash.com/300x200/?pasta",
      "https://source.unsplash.com/300x200/?dessert"
    ]);
  }, []);

  return (
    <div className="container">
      <h1>Food Gallery</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} alt="food" />
        ))}
      </div>
    </div>
  );
}

export default Gallery;