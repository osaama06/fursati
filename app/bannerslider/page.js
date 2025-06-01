"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const banners = [
  "/banner1.png",
  "/banner2.png",
  "/banner3.png",
  "/banner4.png",
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused, current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div
      style={styles.sliderContainer}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {banners.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`banner-${index}`}
          style={{
            ...styles.slide,
            opacity: index === current ? 1 : 0,
            zIndex: index === current ? 1 : 0,
          }}
        />
      ))}
      <button onClick={prevSlide} style={{ ...styles.arrow, left: "20px" }}>
        <FaChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} style={{ ...styles.arrow, right: "20px" }}>
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}

const styles = {
  sliderContainer: {
    position: "relative",
    // width: "100vw",

    maxWidth:'100%',
    height: "600px", // ارتفاع السلايدر مثل أمازون
    overflow: "hidden",
    margin: "0 auto",
    padding: "0",
  },
  slide: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.5s ease-in-out",
    top: 0,
    left: 0,
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    zIndex: 10,
  },
};
