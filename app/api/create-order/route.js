import { NextResponse } from "next/server";
import woocommerceApi from "@/lib/woocommerce";

export async function POST(request) {
  try {
    const body = await request.json();

    const orderData = {
      payment_method: "cod",
      payment_method_title: "الدفع عند الاستلام",
      set_paid: false,
      billing: {
        first_name: body.firstName,
        last_name: body.lastName,
        address_1: body.address,
        city: body.city,
        state: body.state,
        postcode: body.postcode,
        country: body.country,
        email: body.email,
        phone: body.phone,
      },
      shipping: {
        first_name: body.firstName,
        last_name: body.lastName,
        address_1: body.address,
        city: body.city,
        state: body.state,
        postcode: body.postcode,
        country: body.country,
      },
      line_items: body.cartItems.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
    };

    const { data } = await woocommerceApi.post("orders", orderData);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating order:", error.response?.data || error.message);
    return NextResponse.json({ error: "حدث خطأ أثناء إنشاء الطلب" }, { status: 500 });
  }
}
