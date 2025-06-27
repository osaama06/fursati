import { cookies } from 'next/headers';
import OrderCard from '@/app/components/ordercard/page';

// خريطة الحالات إلى اللغة العربية
const statusMap = {
  pending: 'قيد الانتظار',
  processing: 'قيد التجهيز',
  completed: 'خالص',
  on_hold: 'معلّق',
  cancelled: 'ملغي',
  refunded: 'مُسترد',
  failed: 'فشل',
};

async function getOrders() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) return [];

  // استخراج ID المستخدم من JWT
  const payload = JSON.parse(
    Buffer.from(token.split('.')[1], 'base64').toString()
  );
  const customerId = payload.id;

  const auth = Buffer.from(
    `${process.env.WOO_CONSUMER_KEY}:${process.env.WOO_SECRET_KEY}`
  ).toString('base64');

  const res = await fetch(
    `https://furssati.io/wp-json/wc/v3/orders`,
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      cache: 'no-store',
    }
  );

  if (!res.ok) return [];

  return await res.json();
}

export default async function OrdersPage() {
  const orders = await getOrders();

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
