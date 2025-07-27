// app/(pages)/orders/page.js
'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import OrderCard from '@/app/components/ordercard/page';

// استخدام dynamic import للـ useSearchParams
const useSearchParams = dynamic(
  () => import('next/navigation').then(mod => ({ default: mod.useSearchParams })),
  { ssr: false }
);

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState(null);

  // تحميل searchParams بعد mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { useSearchParams } = require('next/navigation');
      const params = useSearchParams();
      setSearchParams(params);
    }
  }, []);

  const isNew = searchParams?.get('new') === 'true';

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/my-orders?t=${Date.now()}`, {
        cache: 'no-store'
      });
      const data = await res.json();
      console.log('الطلبات من API:', data);
      if (res.ok) {
        setOrders(data);
      } else {
        console.error(data.error || 'حدث خطأ ما');
      }
    } catch (err) {
      console.error('فشل في جلب الطلبات:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [isNew]);

  if (loading) return <p style={{ textAlign: 'center' }}>جارٍ تحميل الطلبات...</p>;

  if (!orders.length) {
    return <p style={{ textAlign: 'center' }}>لا توجد طلبات حالياً</p>;
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>طلباتي</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </ul>
    </main>
  );
}
