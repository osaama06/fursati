// import { cookies } from 'next/headers';
// import { verifyJwt } from '@/lib/jwt';
// import { redirect } from 'next/navigation';

// export default async function AccountPage() {
//   const token = cookies().get('token')?.value;

//   // إذا مافي توكن، رجعه يسجل دخول
//   if (!token) {
//     redirect('/login');
//   }

//   // تحقق من التوكن
//   let user;
//   try {
//     user = verifyJwt(token);
//   } catch (error) {
//     console.error('خطأ في التوكن:', error.message);
//     redirect('/login');
//   }

//   // إذا وصلنا هنا، التوكن صالح
//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h1>مرحبًا بك!</h1>
//       <p>✅ التوكن موجود، تم تسجيل الدخول بنجاح.</p>
//       <p><strong>البريد:</strong> {user.email}</p>
//     </div>
//   );
// }

// import { cookies } from 'next/headers';
// import { verifyJwt } from '@/lib/jwt';
// import { redirect } from 'next/navigation';

// export default async function AccountPage() {
//   const token = cookies().get('token')?.value;

//   if (!token) {
//     redirect('/login');
//   }

//   let user = null;
//   try {
//     user = verifyJwt(token);
//   } catch (error) {
//     console.error('JWT Error:', error.message);
//     redirect('/login');
//   }

//   if (!user || !user.email) {
//     redirect('/login');
//   }

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h1>مرحبًا بك!</h1>
//       <p>✅ التوكن موجود، تم تسجيل الدخول بنجاح.</p>
//       <p><strong>البريد:</strong> {user.email}</p>
//     </div>
//   );
// }
// "use client"

import { cookies } from 'next/headers';
import { verifyJwt } from '@/lib/jwt';
import { redirect } from 'next/navigation';
// import LogoutButton from '@/components/LogoutButton';
import LogoutButton from '../components/LogoutButton/page';



export default async function AccountPage() {
  const token = cookies().get('token')?.value;

  if (!token) redirect('/login');

  let user;
  try {
    user = verifyJwt(token);
  } catch (error) {
    redirect('/login');
  }

  if (!user || !user.email) redirect('/login');

  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem 3rem',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '480px',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '1rem', fontSize: '1.8rem', color: '#333' }}>
          👋 مرحبًا، {user.name || 'مستخدم'}!
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '0.5rem' }}>
          تم تسجيل الدخول بنجاح ✅
        </p>
        <div style={{ margin: '1.5rem 0', textAlign: 'left' }}>
          <p><strong>📛 الاسم:</strong> {user.name || 'غير متوفر'}</p>
          <p><strong>📛 username:</strong> {user.username || 'غير متوفر'}</p>
          <p><strong>📧 البريد الإلكتروني:</strong> {user.email}</p>
        </div>

        <LogoutButton />
      </div>
    </div>
  );
}
