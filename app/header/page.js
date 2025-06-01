// import Link from "next/link";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoIosSearch } from "react-icons/io";
// import { MdPerson } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";



// export default function Header() {
//   return (
//     <header style={styles.header}>
//       <div style={styles.wrapper}>
//         {/* الشعار */}
//         <div style={styles.logo}>
//           <Link href="/">
//             <img src="/osama.png" alt="Logo" style={styles.logoImg} />
//           </Link>
//         </div>

//           <div style={styles.location} >

//             توصيل الى <FaLocationDot/>
//           </div>

//             <div style={styles.searchBar}>
//                 <input style={styles.searchInput}  placeholder="على ايش تدرو" type="search"/>
//                 <button style={styles.searchBtn} ><IoIosSearch style={styles.searchIcon} /></button>
//             </div>

//             <div style={styles.icons}>
//           <Link href="/cart" style={{ ...styles.iconBtn, position: "relative" }}>
//           <FiShoppingCart style={styles.cartIcon}/>
//             <span style={styles.cartCount}>2</span>
//           </Link>
//           <Link href="/account" style={styles.iconBtn}>
//           <MdPerson style={styles.accountIcon} />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// const styles = {

//   header: {
//     backgroundColor: "#131921",
//     padding: "10px 0",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//     direction: "rtl",
//     color:'white'
//   },
//   wrapper: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     // padding: "0 10px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   // logo: {},
//   // logoImg: {
//   //   maxHeight: "30px",
//   // },
//   logo: {
//     display: 'flex',
//     alignItems: 'center',
//     maxHeight: '40px',
//   },
//   logoImg: {
//     maxHeight: '100%',
//     height: 'auto',
//     width: 'auto',
//     maxWidth: '100px',
//     objectFit: 'contain',
//   },

//   icons: {
//     display: "flex",
//     gap: "15px",
//     alignItems: "center",
//   },


//   // searchBar: {
//   //   backgroundColor: '#455871',
//   //   height: '2.5rem',
//   //   width: '49rem',
//   //   borderRadius: '9px',
//   //   alignItems: 'center',
//   //   position: 'relative'
//   // },

//   searchBar: {
//     backgroundColor: '#455871',
//     height: '2.5rem',
//     width: '100%', // استبدل العرض الثابت بعرض نسبي
//     maxWidth: '600px', // حد أقصى للعرض
//     borderRadius: '9px',
//     alignItems: 'center',
//     position: 'relative',

//   },
//   searchInput:{
//     background: 'wheate',
//     border: 'none',
//     color: '#131921',
//     width: '95%',
//     height:' 100%',
//     padding: '0 13px 0 0',
//     border: "none",
//     outline :'none',
//     borderRadius: '0 6px 6px 0',
//     fontSize:'1rem'


//   },
//   cartIcon:{

//     height:'20px',
//     width :'20px',
//     color:'grey'


//   }

//   ,accountIcon:{

//     height:'20px',
//     width :'20px',
//     color:'grey'

//   }
//   ,
//   searchIcon:{

//     height:'30px',
//     width :'30px',
//     color:'grey',


//   }
//   ,
//   searchBtn: {

//     // background: '#8bc4bf',.
//     position: 'absolute',
//     background:'#febd69',
//     left: '0px' ,
//     height: '100%',
//     width: '9%',
//     outline:'none',
//     cursor:'pointer',
//     outline:'none',
//     border:'none',
//     borderRadius: ' 6px 0 0 6px',

//   },
//   cartCount: {
//     position: "absolute",
//     top: "-6px",
//     left: "-10px", // لأن الاتجاه صار RTL
//     backgroundColor: "red",
//     color: "white",
//     fontSize: "12px",
//     padding: "2px 6px",
//     borderRadius: "50%",
//   },
// };


// import Link from "next/link";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoIosSearch } from "react-icons/io";
// import { MdPerson } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";

// export default function Header() {
//   return (
//     <header style={styles.header}>
//       <div style={styles.wrapper}>

//         {/* الشعار */}
//         <div style={styles.logo}>
//           <Link href="/">
//             <img src="/osama.png" alt="Logo" style={styles.logoImg} />
//           </Link>
//         </div>

//         {/* الموقع */}
//         <div style={styles.location}>
//           <div style={styles.subText}>توصيل إلى</div>
//           <strong style={styles.locationText}>
//             السعودية <FaLocationDot style={{ marginRight: "4px" }} />
//           </strong>
//         </div>

//         {/* البحث */}
//         <div style={styles.searchBar}>
//           <input style={styles.searchInput} placeholder="على ايش تدور؟" type="search" />
//           <button style={styles.searchBtn}>
//             <IoIosSearch style={styles.searchIcon} />
//           </button>
//         </div>

//         {/* اللغة */}
//         <div style={styles.language}>
//           🇸🇦 <span>العربية</span>
//         </div>

//         {/* الحساب */}
//         <div style={styles.account}>
//           <div style={styles.subText}>مرحباً، سجل الدخول</div>
//           <strong>الحساب والقوائم ▾</strong>
//         </div>

//         {/* السلة والحساب */}
//         <div style={styles.icons}>
//           <Link href="/orders" style={styles.iconBlock}>
//             <div style={styles.subText}>المرتجعات</div>
//             <strong>والطلبات</strong>
//           </Link>

//           <Link href="/cart" style={{ ...styles.iconBtn, position: "relative" }}>
//             <FiShoppingCart style={styles.icon} />
//             <span style={styles.cartCount}>2</span>
//           </Link>

//           <Link href="/account" style={styles.iconBtn}>
//             <MdPerson style={styles.icon} />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }
// 'use client';

// import Link from "next/link";
// import { FiShoppingCart } from "react-icons/fi";
// import { IoIosSearch } from "react-icons/io";
// import { MdPerson } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import { useCart } from "../context/CartContext";
// export default function Header() {
//   const { cartItems } = useCart();
//   const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <header style={styles.header}>
//       <div style={styles.wrapper}>

//         {/* الشعار */}
//         <div style={styles.logo}>
//           <Link href="/">
//             <img src="/osama.png" alt="Logo" style={styles.logoImg} />
//           </Link>
//         </div>

//         {/* الموقع */}
//         <div style={styles.location}>
//           <div style={styles.subText}>توصيل إلى</div>
//           <strong style={styles.locationText}>
//             السعودية <FaLocationDot style={{ marginRight: "4px" }} />
//           </strong>
//         </div>

//         {/* البحث */}
//         <div style={styles.searchBar}>
//           <input style={styles.searchInput} placeholder="على ايش تدور؟" type="search" />
//           <button style={styles.searchBtn}>
//             <IoIosSearch style={styles.searchIcon} />
//           </button>
//         </div>

//         {/* اللغة */}
//         <div style={styles.language}>
//           🇸🇦 <span>العربية</span>
//         </div>

//         {/* الحساب */}
//         <div style={styles.account}>
//           <div style={styles.subText}>مرحباً، سجل الدخول</div>
//           <strong>الحساب والقوائم ▾</strong>
//         </div>

//         {/* السلة والحساب */}
//         <div style={styles.icons}>
//           <Link href="/orders" style={styles.iconBlock}>
//             <div style={styles.subText}>المرتجعات</div>
//             <strong>والطلبات</strong>
//           </Link>

//           <Link href="/cart" style={{ ...styles.iconBtn, position: "relative" }}>
//             <FiShoppingCart style={styles.icon} />
//             {totalQuantity > 0 && (
//               <span style={styles.cartCount}>{totalQuantity}</span>
//             )}
//           </Link>

//           <Link href="/account" style={styles.iconBtn}>
//             <MdPerson style={styles.icon} />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }



// // ... باقي الكود بدون تغيير


// const styles = {
//   header: {
//     backgroundColor: "#131921",
//     padding: "10px 0",
//     direction: "rtl",
//     color: "white",
//   },
//   wrapper: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "15px",
//     padding: "0 10px",
//   },

//   // wrapper: {
//   //   maxWidth: "1200px",
//   //   margin: "0 auto",
//   //   display: "flex",
//   //   flexWrap: "wrap",
//   //   alignItems: "center",
//   //   justifyContent: "flex-start", // ✅ هذا يحل المشكلة
//   //   // gap: "20px", // أضف مسافة بين العناصر حسب الحاجة
//   // },

//   logo: {
//     display: "flex",
//     alignItems: "center",
//     maxHeight: "40px",
//     position:'absulote',
//     right:'0px'
//   },
//   logoImg: {
//     maxHeight: "100%",
//     height: "auto",
//     width: "auto",
//     maxWidth: "100px",
//     objectFit: "contain",
//   },
//   location: {
//     color: "white",
//     textAlign: "right",
//     lineHeight: "1.2",
//     cursor: "pointer",
//   },
//   subText: {
//     fontSize: "12px",
//     color: "#ccc",
//   },
//   locationText: {
//     fontSize: "14px",
//     display: "flex",
//     alignItems: "center",
//     gap: "4px",
//   },
//   searchBar: {
//     backgroundColor: "#455871",
//     height: "2.5rem",
//     flex: "1",
//     maxWidth: "600px",
//     borderRadius: "9px",
//     display: "flex",
//     position: "relative",
//     alignItems: "center",
//   },
//   searchInput: {
//     background: "white",
//     border: "none",
//     color: "#131921",
//     width: "100%",
//     height: "100%",
//     padding: "0 13px",

//     borderRadius: " 6px ",
//     fontSize: "1rem",
//     outline: "none",
//   },
//   searchBtn: {
//     position: "absolute",
//     left: "0px",
//     height: "100%",
//     width: "9%",
//     background: "#febd69",
//     border: "none",
//     borderRadius: "6px 0 0 6px",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   searchIcon: {
//     height: "24px",
//     width: "24px",
//     color: "#333",
//   },
//   icons: {
//     display: "flex",
//     gap: "15px",
//     alignItems: "center",
//   },
//   iconBtn: {
//     display: "flex",
//     alignItems: "center",
//     color: "white",
//     fontSize: "14px",
//     position: "relative",
//   },
//   iconBlock: {
//     textAlign: "right",
//     cursor: "pointer",
//   },
//   cartCount: {
//     position: "absolute",
//     top: "-6px",
//     left: "-10px",
//     backgroundColor: "red",
//     color: "white",
//     fontSize: "12px",
//     padding: "2px 6px",
//     borderRadius: "50%",
//   },
//   icon: {
//     height: "20px",
//     width: "20px",
//     color: "grey",
//   },
//   account: {
//     textAlign: "right",
//     cursor: "pointer",
//   },
//   language: {
//     display: "flex",
//     alignItems: "center",
//     gap: "5px",
//     cursor: "pointer",
//     fontSize: "14px",
//   },
// };



'use client';

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.wrapper}>

        {/* الشعار */}
        <div style={styles.logo}>
          <Link href="/">
            <img src="/osama.png" alt="Logo" style={styles.logoImg} />
          </Link>
        </div>

        {/* الموقع */}
        <div style={styles.location}>
          <div style={styles.subText}>توصيل إلى</div>
          <strong style={styles.locationText}>
            السعودية <FaLocationDot style={{ marginRight: "4px" }} />
          </strong>
        </div>

        {/* البحث */}
        <form style={styles.searchBar} onSubmit={handleSearch}>
          <input
            style={styles.searchInput}
            placeholder="على ايش تدور؟"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button style={styles.searchBtn} type="submit" aria-label="بحث">
            <IoIosSearch style={styles.searchIcon} />
          </button>
        </form>

        {/* اللغة */}
        <div style={styles.language}>
          🇸🇦 <span>العربية</span>
        </div>

        {/* الحساب */}
        <div style={styles.account}>
          <div style={styles.subText}>مرحباً، سجل الدخول</div>
          <strong>الحساب والقوائم ▾</strong>
        </div>

        {/* السلة والحساب */}
        <div style={styles.icons}>
          <Link href="/orders" style={styles.iconBlock}>
            <div style={styles.subText}>المرتجعات</div>
            <strong>والطلبات</strong>
          </Link>

          <Link href="/cart" style={{ ...styles.iconBtn, position: "relative" }}>
            <FiShoppingCart style={styles.icon} />
            {totalQuantity > 0 && (
              <span style={styles.cartCount}>{totalQuantity}</span>
            )}
          </Link>

          <Link href="/account" style={styles.iconBtn}>
            <MdPerson style={styles.icon} />
          </Link>
        </div>
      </div>
    </header>
  );
}


const styles = {
  header: {
    backgroundColor: "#131921",
    padding: "10px 0",
    direction: "rtl",
    color: "white",
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    padding: "0 10px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    maxHeight: "40px",
  },
  logoImg: {
    maxHeight: "100%",
    height: "auto",
    width: "auto",
    maxWidth: "100px",
    objectFit: "contain",
  },
  location: {
    color: "white",
    textAlign: "right",
    lineHeight: "1.2",
    cursor: "pointer",
  },
  subText: {
    fontSize: "12px",
    color: "#ccc",
  },
  locationText: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  searchBar: {
    backgroundColor: "#455871",
    height: "2.5rem",
    flex: "1",
    maxWidth: "600px",
    borderRadius: "9px",
    display: "flex",
    position: "relative",
    alignItems: "center",
  },
  searchInput: {
    background: "white",
    border: "none",
    color: "#131921",
    width: "100%",
    height: "100%",
    padding: "0 13px",
    borderRadius: "6px",
    fontSize: "1rem",
    outline: "none",
  },
  searchBtn: {
    position: "absolute",
    left: "0px",
    height: "100%",
    width: "9%",
    background: "#febd69",
    border: "none",
    borderRadius: "6px 0 0 6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    height: "24px",
    width: "24px",
    color: "#333",
  },
  icons: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  iconBtn: {
    display: "flex",
    alignItems: "center",
    color: "white",
    fontSize: "14px",
    position: "relative",
  },
  iconBlock: {
    textAlign: "right",
    cursor: "pointer",
  },
  cartCount: {
    position: "absolute",
    top: "-6px",
    left: "-10px",
    backgroundColor: "red",
    color: "white",
    fontSize: "12px",
    padding: "2px 6px",
    borderRadius: "50%",
  },
  icon: {
    height: "20px",
    width: "20px",
    color: "grey",
  },
  account: {
    textAlign: "right",
    cursor: "pointer",
  },
  language: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};
