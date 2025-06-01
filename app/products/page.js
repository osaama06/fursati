// import Image from "next/image";
// import ProductCard from "../productCard/page";



// async function getProduct(slug) {
//   const consumerKey = process.env.WOO_CONSUMER_KEY;
//   const secretKey = process.env.WOO_SECRET_KEY;
//   const auth = Buffer.from(`${consumerKey}:${secretKey}`).toString("base64");

//   const res = await fetch(
//     `https://orq.mzi.mybluehost.me/website_0b57e4c7/wp-json/wc/v3/products?slug=${slug}`,
//     {
//       headers: {
//         Authorization: `Basic ${auth}`,
//       },
//       cache: "no-store", // تحديث البيانات دائمًا عند الطلب
//     }
//   );

//   const products = await res.json();
//   return products.length > 0 ? products[0] : null;
// }

// export default async function ProductPage({ params }) {
//   const product = await getProduct(params.slug);

//   if (!product) {
//     return <p>❌ المنتج غير موجود</p>;
//   }

//   return (
//     <>
//     {}

//     </>

//     // <div className="product-page">
//     //   <h1>{product.name}</h1>
//     //   {product.images?.length > 0 && (
//     //     <Image
//     //       src={product.images[0].src}
//     //       alt={product.name}
//     //       width={500}
//     //       height={500}
//     //     />
//     //   )}
//     //   <p>السعر: {product.price} {product.currency}</p>
//     //   <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
//     // </div>



//   );
// }



async function getProducts() {
  try {
  const consumerKey = process.env.WOO_CONSUMER_KEY;
  const secretKey = process.env.WOO_SECRET_KEY;
  const url = `https://orq.mzi.mybluehost.me/website_e6a5b6e4/wp-json/wc/v3/products?status=publish&per_page=100`;
  const auth = Buffer.from(`${consumerKey}:${secretKey}`).toString("base64");

  const res = await fetch(url,

    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      cache: "no-store",
    }
  );



    if (!res.ok) throw new Error("حدث خطأ أثناء جلب المنتجات");

    return await res.json();
  } catch (error) {
    console.error("خطأ في جلب المنتجات:", error);
    return [];
  }
}



import Link from "next/link";
import ProductCard from "../productCard/page";

export default async function ProductsPage() {
  const products = await getProducts();

  if (products.length === 0) {
    return <p>⚠ لا توجد منتجات متاحة حاليًا.</p>;
  }

  // console.log("🚀 المنتجات:", products);


  return (
    <div style={styles.container}>
      <h1 style={styles.title}>جميع المنتجات</h1>
      <div style={styles.grid}>





        {products.map((product) => (
          // تم تمرير كل منتج كمكون إلى ProductCard
          <ProductCard key={product.id} product={product} />
        ))}


      </div>
    </div>
  );
}

// 💡 أنماط CSS داخل الكود (Inline Styles)
const styles = {
  container:{
    textAlign:'center',
    maxWidth:"1200px",
    margin:'0 auto'


  },
  grid: {
    // display: "grid",
    // gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // ⬅️ أقل عرض 250px
    // gap: "10px",
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  title:{
    fonSize:'25px',
    padding:'10px'

  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#0070f3",
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
  },
};
