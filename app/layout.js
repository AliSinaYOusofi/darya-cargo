import localFont from "next/font/local";
import "./globals.css";

// the fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// geistMono locals
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Darya Cargo - Reliable International Shipping & Logistics Solutions",
  description: "Darya Cargo offers fast, reliable, and affordable international shipping and logistics services. We specialize in cargo transport, freight forwarding, and supply chain management worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Darya Cargo - International Shipping & Logistics Solutions</title>
        <meta
          name="description"
          content="Darya Cargo offers reliable international shipping, logistics, freight forwarding, and supply chain solutions."
        />
        <meta
          name="keywords"
          content="Darya Cargo, international shipping, logistics, freight forwarding, supply chain, cargo transport"
        />
        <meta name="author" content="Darya Cargo" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

