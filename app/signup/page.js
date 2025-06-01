'use client';

import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setMessage("");

    const { email, username, password } = form;

    if (!email || !username || !password) {
      setMessage("⚠️ الرجاء تعبئة جميع الحقول.");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(`🎉 تم التسجيل بنجاح، مرحباً ${data.user.username}!`);
      } else {
        setMessage("❌ " + (data.message || "حدث خطأ أثناء التسجيل."));
      }
    } catch (err) {
      setMessage("⚠️ فشل في الاتصال بالخادم.");
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #fceabb, #f8b500)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <form onSubmit={handleSignup} style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>📝 تسجيل حساب جديد</h2>

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <input
          type="text"
          placeholder="اسم المستخدم"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />

        <button type="submit" style={{
          backgroundColor: '#f8b500',
          color: '#fff',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease-in-out'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d49500'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f8b500'}>
          تسجيل
        </button>

        {message && (
          <p style={{ marginTop: '1rem', color: message.includes("تم") ? "green" : "red" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
