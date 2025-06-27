'use client';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch('/api/logout', { method: 'POST' });

    if (res.ok) {
      router.push('/login'); // توجيه بعد تسجيل الخروج
    } else {
      alert('فشل تسجيل الخروج');
    }
  };

  return (
    <button onClick={handleLogout} style={{
      backgroundColor: '#e74c3c',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '1rem',
    }}>
      تسجيل الخروج
    </button>
  );
}
