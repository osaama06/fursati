'use client';

export default function LogoutButton() {
  const handleLogout = () => {
    document.cookie = 'token=; path=/; max-age=0';
    window.location.href = '/login';
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        marginTop: '1rem',
        padding: '12px 24px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#d32f2f'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f44336'}
    >
      تسجيل الخروج
    </button>
  );
}
