"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    country: "SA",
    email: "",
    phone: "",
    cartItems: [
      { id: 101, quantity: 1 },
      { id: 202, quantity: 2 },
    ],
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "فشل إنشاء الطلب");

      setSuccess("تم إنشاء الطلب بنجاح!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      <h2>صفحة الدفع</h2>

      <input type="text" name="firstName" placeholder="الاسم الأول" onChange={handleChange} />
      <input type="text" name="lastName" placeholder="الاسم الأخير" onChange={handleChange} />
      <input type="text" name="address" placeholder="العنوان" onChange={handleChange} />
      <input type="text" name="city" placeholder="المدينة" onChange={handleChange} />
      <input type="text" name="state" placeholder="المنطقة" onChange={handleChange} />
      <input type="text" name="postcode" placeholder="الرمز البريدي" onChange={handleChange} />
      <input type="text" name="email" placeholder="البريد الإلكتروني" onChange={handleChange} />
      <input type="text" name="phone" placeholder="رقم الجوال" onChange={handleChange} />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "جاري إرسال الطلب..." : "إرسال الطلب"}
      </button>

      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
