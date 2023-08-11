import "./globals.css";

import NavBar from "../../Components/utils/NavBar";
import Footer from "../../Components/utils/Footer";

export const metadata = {
  title: "زلابية",
  description: "متخًصصون في الزلابية بكل صوصاتها ",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </head>

      <body>
        <NavBar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
