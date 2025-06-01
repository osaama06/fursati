// app/page.js
import BannerSlider from "./bannerslider/page";
import ProductSlider from "./productsSlider/page";
import ProductsPage from "./products/page";

// async function fetchProducts() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3002'; // حسب البورت اللي فتحه Next.js
//   const res = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' });

//   if (!res.ok) {
//     throw new Error('فشل في جلب المنتجات');
//   }

//   return await res.json();
// }

export default async function Home() {
  // const products = await fetchProducts(); // جلب المنتجات مباشرة من الـ API

  return (
    <main>
      <BannerSlider />
      <ProductsPage  />
    </main>
  );
}
