import type { Metadata } from "next";
import { metadata } from "./metadata";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export { metadata };
// export const metadata: Metadata = {
//   title: "AL9WEL",
//   description: "Modren Portfolio Mady By AL9WEL",
// };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "AL9WEL",
    jobTitle: "Frontend Developer",
    url: "https://al9wel.netlify.app/",
    sameAs: [
      "https://github.com/al9wel",
      "https://www.linkedin.com/in/al9wel/",
      "https://twitter.com/al9wel1",
      "https://wa.me/+967736584524"
    ],
  };
  return (
    <html lang="en">
      <head>
        <Script
          id="ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
