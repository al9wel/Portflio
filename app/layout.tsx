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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Salem Ahmed Alswil",

    alternateName: [
      "Salem Alswil",
      "AL9WEL",
      "al9wel",
      "سالم احمد الصويل",
      "سالم الصويل",
      "سالم احمد"
    ],

    jobTitle: "Frontend Developer",

    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS and modern web applications.",

    nationality: "Yemeni",

    address: {
      "@type": "PostalAddress",
      addressCountry: "YE",
      addressLocality: "Aden",
    },

    url: "https://al9wel.netlify.app",

    image: "https://al9wel.netlify.app/portflio.png",

    sameAs: [
      "https://github.com/al9wel",
      "https://www.linkedin.com/in/al9wel/",
      "https://twitter.com/al9wel1"
    ],

    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Frontend Development",
      "Web Development",
      "Software Engineering"
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="YE" />
        <meta name="geo.placename" content="Aden" />
        <meta name="geo.position" content="12.7855;45.0187" />
        <meta name="ICBM" content="12.7855,45.0187" />

        <Script
          id="ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
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
