


import React from "react";

async function getProductBySlug(slug) {
  const consumerKey = process.env.WOO_CONSUMER_KEY;
  const secretKey = process.env.WOO_SECRET_KEY;
  const auth = Buffer.from(`${consumerKey}:${secretKey}`).toString("base64");

  const res = await fetch(
    `https://furssati.io/wp-json/wc/v3/products?slug=${slug}`,
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.length > 0 ? data[0] : null;
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <div style={{ padding: "20px", textAlign: "center" }}>❌ المنتج غير موجود</div>;
  }

  return (
    <div style={styles.page}>
      {/* الصور */}
      <div style={styles.imageSection}>
        <img
          src={product.images?.[0]?.src || "/placeholder.jpg"}
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
            />
          ))}
        </div>
      </div>

      {/* التفاصيل */}
      <div style={styles.details}>
        <h1 style={styles.title}>{product.name}</h1>

        {/* التقييم (نضيف نجوم وهمية الآن) */}
        <div style={styles.rating}>
          ⭐⭐⭐⭐☆ <span style={styles.reviewCount}>(20 تقييم)</span>
        </div>

        <p style={styles.price}>السعر: {product.price} ريال</p>

        <div
          style={styles.description}
          dangerouslySetInnerHTML={{ __html: product.short_description }}
        ></div>

        <button style={styles.button}>🛒 أضف إلى السلة</button>
        <button style={{ ...styles.button, backgroundColor: "#ff9900" }}>🛍 اشترِ الآن</button>
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
    backgroundColor: "#f0c14b",
    border: "1px solid #a88734",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: "10px",
  },
};
