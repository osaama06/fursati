'use client';

import { useRef } from "react";
import ProductCard from "../productCard/page";

export default function ProductSlider({ products = [] }) {
  const sliderRef = useRef(null);

  // دالة التمرير
  const scroll = (direction) => {
    const scrollAmount = 300;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!products || products.length === 0) return <p>🚫 لا توجد منتجات.</p>;

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>منتجات مختارة</h2>

      <div style={styles.sliderWrapper}>
        <button
          style={styles.arrowLeft}
          onClick={() => scroll("left")}
          aria-label="انتقل إلى اليسار"
        >
          ‹
        </button>

        <div style={styles.slider} ref={sliderRef}>
          {products.map(product => (
            <div key={product.id} style={styles.cardWrapper}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button
          style={styles.arrowRight}
          onClick={() => scroll("right")}
          aria-label="انتقل إلى اليمين"
        >
          ›
        </button>
      </div>
    </section>
  );
}

const styles = {
  container: {
    width: "100vw",
    overflow: "hidden",
    backgroundColor: "#fff",
    padding: "20px 0",
  },
  heading: {
    fontSize: "24px",
    margin: "0 40px 10px",
    direction: "rtl",
  },
  sliderWrapper: {
    position: "relative",
  },
  slider: {
    display: "flex",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    padding: "0 40px",
  },
  cardWrapper: {
    flex: "0 0 auto",
    marginInlineEnd: "10px",
  },
  arrowLeft: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "24px",
    cursor: "pointer",
  },
  arrowRight: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "24px",
    cursor: "pointer",
  },
};
