import React, { useState } from "react";

const CustomSlider = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ width: "80%", margin: "auto", position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          ❮
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
