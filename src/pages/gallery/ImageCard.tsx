import React, { useRef, useEffect } from "react";
import "./gallery.css";

interface ImageCardProps {
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load the image when it becomes visible
          const img = new Image();
          img.src = image; 
          img.onload = () => {
            // Once the image is loaded, set it as the source for the img element
            if (imageRef.current) {
              (imageRef.current as HTMLImageElement).src = img.src; // Use type assertion here
            }
          };
          observer.unobserve(imageRef.current!); // Use non-null assertion
        }
      });
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [image]);

  return (
    <div className="image-card">
      <img
        ref={imageRef}
        className="gallery-image"
        // alt="random"
      />
    </div>
  );
};

export default ImageCard;