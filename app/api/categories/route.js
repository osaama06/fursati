// app/api/categories/route.js
export async function GET() {
    const auth = Buffer.from(`${process.env.WOO_CONSUMER_KEY}:${process.env.WOO_SECRET_KEY}`).toString("base64");

    const res = await fetch(
      "https://orq.mzi.mybluehost.me/website_e6a5b6e4/wp-json/wc/v3/products/categories",
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );

    const data = await res.json();
    return Response.json(data);
  }
