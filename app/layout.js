
import { CartProvider } from "./context/CartContext";
import { Geist, Geist_Mono, Imprima } from "next/font/google";
import Header from "./header/page";
import "./globals.css";
import Footer from "./footer/page";
import Navbar from "./navBar/page";
import SearchBar from "./searchbar/page";
import { cookies } from 'next/headers'
import { verifyJwt } from "@/lib/jwt";



export async function GET() {
  const token = cookies().get('token')?.value

  if (!token) {
    return Response.json({ user: null }, { status: 401 })
  }

  const user = verifyJwt(token) // تحقق من التوكن

  return Response.json({ user })
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "fursati",
  description: "uniforms store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">

      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <CartProvider>
        <Header /> {/* تأكد أن الهيدر موجود */}
        <Navbar />
        <main>{children}</main> {/* يجب وضع children هنا لعرض محتوى الصفحات */}
        <Footer />

        </CartProvider>
      </body>
    </html>
  );
}
