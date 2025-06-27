// app/category/[slug]/page.js
import ProductCard from "@/app/productCard/page";
async function getCategoryBySlug(slug) {
    const auth = Buffer.from(`${process.env.WOO_CONSUMER_KEY}:${process.env.WOO_SECRET_KEY}`).toString("base64");

    const res = await fetch(
      "https://furssati.io/wp-json/wc/v3/products/categories",
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );

    const categories = await res.json();
    return categories.find((cat) => cat.slug === slug);
  }

  async function getProductsByCategoryId(id) {
    const auth = Buffer.from(`${process.env.WOO_CONSUMER_KEY}:${process.env.WOO_SECRET_KEY}`).toString("base64");

    const res = await fetch(
      `https://furssati.io/wp-json/wc/v3/products?category=${id}`,
      {
        headers: { Authorization: `Basic ${auth}` },
        cache: "no-store",
      }
    );

    return await res.json();
  }

  export default async function CategoryPage({ params }) {
    const category = await getCategoryBySlug(params.slug);

    if (!category) return <div>التصنيف غير موجود</div>;

    const products = await getProductsByCategoryId(category.id);

    return (
<main style={{ padding: '2rem' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
      منتجات {category.name}
    </h1>

    {products.length === 0 ? (
      <p style={{ textAlign: 'center' }}>لا توجد منتجات</p>
    ) : (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          // justifyContent: 'center', // يخليهم متجمعين في الوسط
        }}
      >
        {products.map((product) => (
          <div style={{ flex: '0 0 250px' }} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    )}
  </div>
</main>

    );
  }
