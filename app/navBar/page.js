// // // // import { Link } from 'react-router-dom';
// // // import Link from "next/link";
// // // import { HiOutlineHome } from 'react-icons/hi2';





// // // const NavBar = () => {
// // //     return (
// // //         <nav style={styles.nav}>


// // //             <ul style={styles.navList}>
// // //             {/* <h1>
// // //             <Link href ="/" style={styles.navLink}><HiOutlineHome /></Link>
// // //             </h1> */}
// // //                 <li style={styles.navItem}>
// // //                     <Link href ="/products" style={styles.navLink}>المنتجات</Link>
// // //                 </li>
// // //                 <li style={styles.navItem}>
// // //                     <Link href ="/about" style={styles.navLink}>من نحن</Link>
// // //                 </li>
// // //                 <li style={styles.navItem}>
// // //                     <Link href ="/contact" style={styles.navLink}>تواصل</Link>
// // //                 </li >

// // //                 <li style={styles.navItem}>
// // //                     <Link href ="/products" style={styles.navLink}>المنتجات</Link>
// // //                 </li>
// // //                 <li style={styles.navItem}>
// // //                     <Link href ="/about" style={styles.navLink}>من نحن</Link>
// // //                 </li>
// // //                 <li style={styles.navItem}>
// // //                     <Link href ="/contact" style={styles.navLink}>تواصل</Link>
// // //                 </li >
// // //                 <li style={styles.navItem}>
// // //                     <Link href ="/products" style={styles.navLink}>المنتجات</Link>
// // //                 </li>
// // //                 <li style={styles.navItem}>
// // //                     <Link href ="/about" style={styles.navLink}>من نحن</Link>
// // //                 </li>
// // //                 <li style={styles.navItem}>
// // //                     <Link href ="/contact" style={styles.navLink}>تواصل</Link>
// // //                 </li >
// // //             </ul>
// // //         </nav>
// // //     );
// // // };

// const styles = {
//     nav: {
//         backgroundColor: '#232f3e',
//         // padding: '10px',
//         alignItems :'center',
//         height:'2.5rem'
//     },
//     navList: {
//         height:'100%',
//         listStyle: 'none',
//         display: 'flex',
//         justifyContent: 'space-around',
//         margin: 0,
//         padding: 0,
//         alignItems :'center'

//     },
//     navItem: {
//         // margin: '0 10px',
//     },
//     navLink: {
//         color: '#fff',
//         textDecoration: 'none',
//         fontSize: '16px',
//     },
// };

// // // export default NavBar;





// // // components/Navbar.js
// // 'use client'

// // import Link from 'next/link'
// // import { useEffect, useState } from 'react'
// // import { getCategories } from '@/lib/getCategories'

// // const NavBar = () => {
// //   const [categories, setCategories] = useState([])

// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         const data = await getCategories()
// //         console.log('Fetched categories:', data) // عرض التصنيفات في الـ console

// //         setCategories(data)
// //       } catch (error) {
// //         console.error('Error fetching categories:', error)
// //       }
// //     }

// //     fetchCategories()
// //   }, [])

// //   const navbarStyles = {
// //     padding: '16px',
// //     // backgroundColor: '#f0f0f0',
// //         backgroundColor: '#232f3e',

// //     display: 'flex',
// //     gap: '16px',
// //   }

// //   const linkStyles = {
// //     color: '#1e40af',
// //     textDecoration: 'none',
// //     padding: '4px 8px',
// //     borderRadius: '4px',
// //     fontSize: '16px',
// //   }

// //   return (
// //     <nav style={navbarStyles}>
// //       {categories.length > 0 ? (
// //         categories.map((cat) => (
// //           <Link key={cat.id} href={`/category/${cat.slug}`} style={linkStyles}>
// //             {cat.name}
// //           </Link>
// //         ))
// //       ) : (
// //         <p>Loading categories...</p>
// //       )}
// //     </nav>
// //   )
// // }

// // export default NavBar



// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const res = await fetch('/api/categories');
//         const data = await res.json();

//         if (res.ok) {
//           setCategories(data);
//         } else {
//           console.error('API error:', data);
//         }
//       } catch (err) {
//         console.error('Failed to fetch categories:', err);
//       }
//     }

//     fetchCategories();
//   }, []);

//   return (
//     <nav style={{ backgroundColor: '#333', padding: '10px', color: '#fff' }}>
//       <ul style={{ display: 'flex', gap: '10px', listStyle: 'none' }}>
//         {categories.map((cat) => (
//           <li key={cat.id}>
//             <Link href={`/category/${cat.slug}`} style={{ color: '#fff' }}>
//               {cat.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }


// components/Navbar.js
// 'use client';
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const res = await fetch('/api/categories'); // لازم يكون عندنا route محلي أو مباشرة من Woo
//         const data = await res.json();
//         const filtered = data.filter(cat => cat.count > 0); // فقط التصنيفات اللي فيها منتجات
//         setCategories(filtered);
//       } catch (err) {
//         console.error("خطأ في جلب التصنيفات:", err);
//       }
//     }

//     fetchCategories();
//   }, []);

//   return (
//     <nav>
//       <ul>
//         {categories.map((cat) => (
//           <li key={cat.id}>
//             <Link href={`/category/${cat.slug}`}>{cat.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }




// components/Navbar.js
'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("/api/categories");
      const data = await res.json();
      const filtered = data.filter(cat => cat.count > 0);
      setCategories(filtered);
    }

    fetchCategories();
  }, []);

  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        {categories.map((cat) => (
          <li key={cat.id} style={styles.navItem}>
            <Link href={`/category/${cat.slug}`} style={styles.navLink}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}



const styles = {
    nav: {
        backgroundColor: '#232f3e',
        // padding: '10px',
        alignItems :'center',
        height:'2.5rem'
    },
    navList: {
        height:'100%',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        margin: 0,
        padding: 0,
        alignItems :'center'

    },
    navItem: {
        // margin: '0 10px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    },
};


