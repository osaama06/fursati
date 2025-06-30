'use client';

export const dynamic = 'force-dynamic'; // لمنع الخطأ في مرحلة البناء (prerender)

import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/checkOut.module.css';

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postcode: '',
    country: 'SA',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = async () => {
    setLoading(true);

    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, cartItems }),
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      clearCart();
      router.push('/thank-you');
    } else {
      alert(data.error || 'فشل في إنشاء الطلب');
    }
  };

  return (
    <div className={styles.checkoutPage}>
      <h1 className={styles.checkoutHeading}>الدفع</h1>

      {cartItems.length === 0 ? (
        <p className={styles.checkoutEmpty}>سلتك فارغة</p>
      ) : (
        <div className={styles.checkoutContent}>
          <div className={styles.checkoutCart}>
            <h2>🛒 محتويات السلة</h2>
            {cartItems.map((item) => (
              <div key={item.id || item.name} className={styles.checkoutCartItem}>
                <span>{item?.name || 'منتج بدون اسم'}</span>
                <span>× {item?.quantity || 1}</span>
              </div>
            ))}
          </div>

          <div className={styles.checkoutFormSection}>
            <h2>📋 بيانات العميل</h2>
            <div className={styles.checkoutFormGrid}>
              <input name="firstName" placeholder="الاسم الأول" onChange={handleChange} className={styles.checkoutInput} />
              <input name="lastName" placeholder="اسم العائلة" onChange={handleChange} className={styles.checkoutInput} />
              <input name="address" placeholder="العنوان" onChange={handleChange} className={styles.checkoutInput} />
              <input name="city" placeholder="المدينة" onChange={handleChange} className={styles.checkoutInput} />
              <input name="state" placeholder="المنطقة" onChange={handleChange} className={styles.checkoutInput} />
              <input name="postcode" placeholder="الرمز البريدي" onChange={handleChange} className={styles.checkoutInput} />
              <input name="country" value="SA" readOnly className={styles.checkoutInput} />
              <input name="email" placeholder="البريد الإلكتروني" onChange={handleChange} className={styles.checkoutInput} />
              <input name="phone" placeholder="رقم الجوال" onChange={handleChange} className={styles.checkoutInput} />
            </div>

            <button onClick={handleOrder} disabled={loading} className={styles.checkoutButton}>
              {loading ? '⏳ يتم الإرسال...' : '✅ إرسال الطلب'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
