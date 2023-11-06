import galleryImage from "../../../../assets/img/aboutus/gallery_image.png";
import { useNavigate } from "react-router-dom";
import "./gallery.css";
import React from 'react';
const Gallery = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/gallery");
  };
  
  return (

    
  <div className="gallery-home">
      <div className="w-100 d-flex justify-content-center container align-items-center p-4">
        <img
          alt="gallery-image"
          src={galleryImage}
          className="gallery-img mb-0"
        />
        <div className="gallery-text-container px-md-5 px-3 my-3">
        <p className="gallery-title h3">Gallery</p>
        <p className="gallery-text text-white py-3">Step into the enchanting world of Rendezvous through our Gallery, a mesmerizing portal into the heart of this annual cultural marvel. Here, we invite you to immerse yourself in the resplendent tapestry of Rendezvous, where culture, artistry, and innovation weave together in a symphony of colors and emotions. Our gallery captures not just moments but the very essence of Rendezvous itself—a breathtaking fusion of laughter, tears, exhilaration, and moments of sheer wonder. Surrender to the beauty within, and allow Rendezvous to enchant your soul.</p>
        <button className="gallery-button btn my-3" onClick={handleClick}>
          View More
        </button>
      </div>
      </div>

    </div>
  );
};

export default Gallery;
