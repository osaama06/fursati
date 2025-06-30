'use client';

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
export default function ClientProduct({ product, variations }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(product.images?.[0]?.src);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedVariationId, setSelectedVariationId] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const hasSizes = product.attributes?.some(attr => attr.name === 'المقاس' || attr.name.toLowerCase().includes("size"));
  const sizes = hasSizes
    ? product.attributes.find(attr => attr.name === 'المقاس' || attr.name.toLowerCase().includes("size")).options
    : [];

  const handleSizeChange = (size) => {
    setSelectedSize(size);

    const match = variations.find(v =>
      v.attributes.some(attr =>
        attr.name.toLowerCase().includes("size") &&
        attr.option === size
      )
    );

    setSelectedVariationId(match ? match.id : null);
  };

  const handleAddToCart = () => {
    if (hasSizes && !selectedVariationId) {
      setShowError(true);
      return;
    }

    setShowError(false);

    addToCart({
      id: selectedVariationId || product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0]?.src,
      size: selectedSize || null,
    });

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div style={styles.page}>
      {showToast && (
        <div style={styles.toast}>
          ✅ تمت إضافة المنتج إلى السلة
        </div>
      )}

      {/* الصور */}
      <div style={styles.imageSection}>
        <img
          src={selectedImage}
          alt={product.name}
          style={styles.mainImage}
        />
        <div style={styles.thumbnailList}>
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`image-${i}`}
              style={styles.thumbnail}
              onClick={() => setSelectedImage(img.src)}
            />
          ))}
        </div>
      </div>

      {/* التفاصيل */}
      <div style={styles.details}>
        <h1 style={styles.title}>{product.name}</h1>

        <div style={styles.rating}>
          ⭐⭐⭐⭐☆ <span style={styles.reviewCount}>(20 تقييم)</span>
        </div>

        <p style={styles.price}>السعر: {product.price} ريال</p>

        <div
          style={styles.description}
          dangerouslySetInnerHTML={{ __html: product.short_description }}
        ></div>

        {hasSizes && (
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontWeight: 'bold' }}>اختر المقاس:</p>
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              {sizes.map((size, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => handleSizeChange(size)}
                  />{" "}
                  {size}
                </label>
              ))}
            </div>
            {showError && <p style={{ color: "red", marginTop: "10px" }}>⚠️ يجب اختيار المقاس</p>}
          </div>
        )}

        <button style={styles.button} onClick={handleAddToCart}>🛒 أضف إلى السلة</button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "row",
    padding: "30px",
    gap: "30px",
    flexWrap: "wrap",
  },
  imageSection: {
    flex: "1 1 300px",
    maxWidth: "400px",
  },
  mainImage: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  thumbnailList: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  thumbnail: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  },
  details: {
    flex: "2 1 400px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  rating: {
    fontSize: "16px",
    marginBottom: "15px",
  },
  reviewCount: {
    marginLeft: "10px",
    color: "#888",
  },
  price: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#b12704",
    marginBottom: "15px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#251f35",
    color:'#fff',
    border: "1px solid #a88734",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: "10px",
  },
  toast: {
    position: "fixed",
    top: "120px",
    left: "20px",
    backgroundColor: "#251f35",
    color: "white",
    padding: "12px 20px",
    borderRadius: "5px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    zIndex: 9999,
    fontWeight: "bold",
  },
};
