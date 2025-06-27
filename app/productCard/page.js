'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // تأكد من المسار الصحيح
import '@/styles/ProductCard.css';

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="product-card">
      <Link href={`/products/${product.slug}`} className="product-card-link">
        <Image
          src={product.images?.[0]?.src || "/placeholder.jpg"}
          alt={product.name || "Product"}
          width={300}
          height={300}
        />
        <h3 className="product-name">{product.name}</h3>

        <div className="rating">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} color="#ffa41c" size={16} />
          ))}
          <span className="review-count">(20)</span>
        </div>

        <p className="price">{product.price} {product.currency || "ر.س"}</p>
        <p className="shipping">✔ توصيل مجاني</p>
      </Link>

      <button
        className={`add-to-cart-btn ${added ? 'added' : ''}`}
        onClick={handleAdd}
      >
        <FiShoppingCart className="cart-icon" />
        {added ? 'تمت الإضافة' : 'أضف إلى السلة'}
      </button>
    </div>
  );
}
