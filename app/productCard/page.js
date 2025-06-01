// // 'use client'

// // import Image from "next/image";
// // import Link from "next/link";

// // export default function ProductCard({ product }) {
// //   return (
// //     <div style={styles.card}>
// //       <Link href={`/products/${product.slug}`} style={styles.link}>
// //         <Image

// //           loading="lazy"
// //           src={product.images?.[0]?.src || "/placeholder.jpg"}
// //           alt={product.name}
// //           width={400}
// //           height={500}
// //           style={styles.image}
// //         />
// //         <h2 loading="lazy" style={styles.title}>{product.name}</h2>
// //         <p loading="lazy" style={styles.price}>السعر: {product.price} {product.currency}</p>
// //       </Link>
// //       <button
// //         onClick={() => addToCart(product.id)}
// //         style={styles.button}>
// //         🛒 إضافة إلى السلة
// //       </button>
// //     </div>
// //   );
// // }

// // // دالة لإضافة المنتج إلى السلة
// // function addToCart(productId) {
// //   console.log(`تمت إضافة المنتج ID: ${productId} إلى السلة`);
// // }

// // // تنسيقات CSS
// // const styles = {
// //   card: {
// //     border: '1px solid #ddd',
// //     borderRadius: '8px',
// //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
// //     padding: '20px',
// //     margin: '10px',
// //     textAlign: 'center',
// //     backgroundColor: '#fff',
// //     width: '250px',
// //     transition: 'transform 0.3s ease',
// //   },
// //   link: {
// //     textDecoration: 'none',
// //     color: '#000',
// //   },
// //   image: {
// //     borderRadius: '8px',
// //     maxWidth: '100%',
// //     height: 'auto',
// //   },
// //   title: {
// //     fontSize: '18px',
// //     fontWeight: '600',
// //     margin: '10px 0',
// //     color: '#333',
// //   },
// //   price: {
// //     fontSize: '16px',
// //     color: '#888',
// //     marginBottom: '15px',
// //   },
// //   button: {
// //     backgroundColor: '#f58f7c',
// //     color: '#fff',
// //     border: 'none',
// //     padding: '10px 20px',
// //     fontSize: '16px',
// //     cursor: 'pointer',
// //     borderRadius: '5px',
// //     transition: 'background-color 0.3s ease',
// //   },
// // };

// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react"; // لاستخدام الحالة (state) لتفاعل الزر
// import { FiShoppingCart } from 'react-icons/fi'; // لإضافة أيقونة السلة من react-icons

// export default function ProductCard({ product }) {
//   const [addedToCart, setAddedToCart] = useState(false); // حالة لتتبع ما إذا تمت إضافة المنتج إلى السلة

//   const handleAddToCart = (productId) => {
//     setAddedToCart(true); // تحديث الحالة عند إضافة المنتج إلى السلة
//     console.log(`تمت إضافة المنتج ID: ${productId} إلى السلة`);

//     // يمكنك هنا إضافة وظيفة إضافية لإظهار إشعار أو تحديث السلة
//   };

//   return (
//     <div style={styles.card}>
//       <Link href={`/products/${product.slug}`} style={styles.link}>
//         <Image
//           loading="lazy"
//           src={product.images?.[0]?.src || "/placeholder.jpg"}
//           alt={product.name}
//           width={400}
//           height={500}
//           style={styles.image}
//         />
//         <h2 loading="lazy" style={styles.title}>{product.name}</h2>
//         <p loading="lazy" style={styles.price}>السعر: {product.price} {product.currency}</p>
//       </Link>


//       <button
//         onClick={() => handleAddToCart(product.id)}
//         style={addedToCart ? { ...styles.button, ...styles.added } : styles.button}>
//         <FiShoppingCart style={{ marginRight: '8px' }} />
//         {addedToCart ? 'تمت الإضافة' : 'إضافة إلى السلة'}
//       </button>

//       {console.log(product.slug)}

//     </div>


//   );
// }

// // تنسيقات CSS
// const styles = {
//   card: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     padding: '20px',
//     margin: '10px',
//     textAlign: 'center',
//     backgroundColor: '#fff',
//     width: '250px',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   },
//   link: {
//     textDecoration: 'none',
//     color: '#000',
//   },
//   image: {
//     borderRadius: '8px',
//     maxWidth: '100%',
//     height: 'auto',
//   },
//   title: {
//     fontSize: '18px',
//     fontWeight: '600',
//     margin: '10px 0',
//     color: '#333',
//   },
//   price: {
//     fontSize: '16px',
//     color: '#888',
//     marginBottom: '15px',
//   },
//   button: {
//     backgroundColor: '#f58f7c',
//     color: '#fff',
//     border: 'none',
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     borderRadius: '5px',
//     transition: 'background-color 0.3s ease, transform 0.2s ease',
//   },
//   added: {
//     backgroundColor: '#2c2b30', // تغيير اللون عند إضافة المنتج
//     transform: 'scale(1.05)', // إضافة تأثير تكبير بسيط عند إضافة المنتج
//   },
// };


// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { FiShoppingCart } from 'react-icons/fi';
// import { FaStar } from 'react-icons/fa';

// export default function ProductCard({ product }) {
//   const [added, setAdded] = useState(false);

//   const handleAdd = (id) => {
//     setAdded(true);
//     console.log(`تمت إضافة المنتج ID: ${id}`);
//   };

//   return (
//     <div style={styles.card}>
//       <Link href={`/products/${product.slug}`} style={styles.link}>
//         <Image
//           src={product.images?.[0]?.src || "/placeholder.jpg"}
//           alt={product.name}
//           width={300}
//           height={300}
//           style={styles.image}
//         />
//         <h3 style={styles.name}>{product.name.slice(0, 55)}...</h3>

//         <div style={styles.rating}>
//           {[...Array(4)].map((_, i) => (
//             <FaStar key={i} color="#ffa41c" size={16} />
//           ))}
//           <span style={styles.reviewCount}>(20)</span>
//         </div>

//         <p style={styles.price}>{product.price} {product.currency}</p>
//         <p style={styles.shipping}>✔ توصيل مجاني</p>
//       </Link>

//       <button
//         onClick={() => handleAdd(product.id)}
//         style={added ? { ...styles.button, ...styles.added } : styles.button}
//       >
//         <FiShoppingCart style={{ marginInlineEnd: '8px' }} />
//         {added ? 'تمت الإضافة' : 'أضف إلى السلة'}
//       </button>
//     </div>
//   );
// }

'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // تأكد من المسار الصحيح

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product); // ✅ إضافة المنتج إلى السلة
    setAdded(true);
  };

  return (
    <div style={styles.card}>
      <Link href={`/products/${product.slug}`} style={styles.link}>
        <Image
          src={product.images?.[0]?.src || "/placeholder.jpg"}
          alt={product.name}
          width={300}
          height={300}
          style={styles.image}
        />
        <h3 style={styles.name}>{product.name.slice(0, 55)}...</h3>

        <div style={styles.rating}>
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} color="#ffa41c" size={16} />
          ))}
          <span style={styles.reviewCount}>(20)</span>
        </div>

        <p style={styles.price}>{product.price} {product.currency}</p>
        <p style={styles.shipping}>✔ توصيل مجاني</p>
      </Link>

      <button
        onClick={handleAdd}
        style={added ? { ...styles.button, ...styles.added } : styles.button}
      >
        <FiShoppingCart style={{ marginInlineEnd: '8px' }} />
        {added ? 'تمت الإضافة' : 'أضف إلى السلة'}
      </button>
    </div>
  );
}

const styles = {
  card: {
    width: '260px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'right',
    transition: 'transform 0.3s ease',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  image: {
    borderRadius: '8px',
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
  name: {
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '10px',
    marginBottom: '8px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '3px',
    marginBottom: '8px',
  },
  reviewCount: {
    fontSize: '14px',
    color: '#555',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#b12704',
    marginBottom: '5px',
  },
  shipping: {
    fontSize: '14px',
    color: '#007600',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#ffa41c',
    border: 'none',
    padding: '10px',
    width: '100%',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#000',
  },
  added: {
    backgroundColor: '#ddd',
    transform: 'scale(1.03)',
  },
};
