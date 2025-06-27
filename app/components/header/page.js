'use client';

import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/Header.css";

export default function Header() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowHeader(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // منع التمرير عند فتح القائمة
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  // categories

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
    <header className={`header ${!showHeader ? 'header--hidden' : ''}`}>
      <div className="wrapper">
        <div className="logo">
          <div className="menu" onClick={() => setMenuOpen(true)}>
            <IoMenuSharp />
          </div>
          <Link href="/">
            <img src="/fursati-logo.png" alt="Logo" className="logo-img" />
          </Link>
        </div>

        <div className="account">
          <Link href="../signup">
            <div className="sub-text">تسجيل الدخول</div>
          </Link>
        </div>

        <div className="icons">
          <Link href="/orders" className="icon-block">
            <div className="sub-text">المرتجعات</div>
            <strong>والطلبات</strong>
          </Link>
          <Link href="/account" className="icon-btn">
            <MdPerson className="icon" />
          </Link>
          <Link href="/cart" className="icon-btn cart-icon">
            <FiShoppingCart className="icon" />
            {totalQuantity > 0 && (
              <span className="cart-count">{totalQuantity}</span>
            )}
          </Link>
        </div>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            className="search-input"
            placeholder="على ايش تدور؟"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" type="submit" aria-label="بحث">
            <IoIosSearch className="search-icon" />
          </button>
        </form>
      </div>

      {/* ✅ القائمة الجانبية الثابتة */}
      {menuOpen && (
        <div className="side-menu">
          <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
          <div className="side-menu-content">
      <ul >
        {categories.map((cat) => (
          <li key={cat.id} >
            <Link href={`${cat.slug}`} >{cat.name}</Link>
          </li>
        ))}
      </ul>
          </div>





        </div>
      )}
    </header>
  );
}
