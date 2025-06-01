// app/api/signup/route.js

export async function POST(req) {
  const body = await req.json();
  const { email, username, password } = body;

  const consumerKey = process.env.WOO_CONSUMER_KEY;
  const secretKey = process.env.WOO_SECRET_KEY;

  const auth = Buffer.from(`${consumerKey}:${secretKey}`).toString("base64");

  try {
    const response = await fetch(
      "https://orq.mzi.mybluehost.me/website_e6a5b6e4/wp-json/wc/v3/customers",
      {
        method: "POST",
        headers: {
          "Authorization": `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      }
    );

    const data = await response.json();

    if (response.ok && data.id) {
      return Response.json({ success: true, user: data });
    } else {
      return Response.json({ success: false, message: "فشل في إنشاء الحساب.", error: data }, { status: 400 });
    }
  } catch (error) {
    return Response.json({ success: false, message: "خطأ في الاتصال بالسيرفر.", error: error.message }, { status: 500 });
  }
}
