'use client';

import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ استخدم useRouter

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter(); // ✅ التوجيه

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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...form,
        cartItems,
      }),
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      clearCart();
      router.push('/thank-you'); // ✅ توجيه بعد نجاح الطلب
    } else {
      alert(data.error || 'فشل في إنشاء الطلب');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>الدفع</h1>

      {cartItems.length === 0 ? (
        <p>سلتك فارغة</p>
      ) : (
        <>
          <h2>محتويات السلة</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name} - الكمية: {item.quantity}</p>
            </div>
          ))}

          <h2 style={{ marginTop: '20px' }}>بيانات العميل</h2>

          <input name="firstName" placeholder="الاسم الأول" onChange={handleChange} />
          <input name="lastName" placeholder="اسم العائلة" onChange={handleChange} />
          <input name="address" placeholder="العنوان" onChange={handleChange} />
          <input name="city" placeholder="المدينة" onChange={handleChange} />
          <input name="state" placeholder="المنطقة" onChange={handleChange} />
          <input name="postcode" placeholder="الرمز البريدي" onChange={handleChange} />
          <input name="country" value="SA" readOnly />
          <input name="email" placeholder="البريد الإلكتروني" onChange={handleChange} />
          <input name="phone" placeholder="رقم الجوال" onChange={handleChange} />

          <button onClick={handleOrder} disabled={loading}>
            {loading ? 'يتم الإرسال...' : 'إرسال الطلب'}
          </button>
        </>
      )}
    </div>
  );
}
