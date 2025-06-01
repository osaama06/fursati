// app/search/page.jsx

import { searchProducts } from '@/lib/api';
import ProductCard from '../productCard/page';

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q || '';
  const products = query ? await searchProducts(query) : [];

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">نتائج البحث عن: {query}</h1>
      {products.length === 0 ? (
        <p>لا توجد منتجات مطابقة.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
