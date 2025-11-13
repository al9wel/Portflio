import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AL9WEL | Frontend Developer",
  description:
    "AL9WEL is a creative Frontend Developer specializing in modern web experiences using React and Next.js. Explore my latest projects.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "Tailwind CSS",
  ],
  authors: [
    { name: "AL9WEL", url: "https://al9wel.netlify.app/" },
  ],
  openGraph: {
    title: "A9 | Frontend Developer Portfolio",
    description:
      "Explore AL9WEL creative portfolio — modern React & Next.js projects with animation, design, and performance in mind.",
    url: "https://al9wel.netlify.app/",
    siteName: "AL9WEL",
    images: [
      {
        url: "/portflio.png",
        width: 1200,
        height: 630,
        alt: "AL9WEL Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AL9WEL | Frontend Developer",
    description:
      "Modern web experiences built with React, Next.js, and creative animation.",
    creator: "@al9wel1",
    images: ["/portflio.png"],
  },
  metadataBase: new URL("https://al9wel.netlify.app/"),
  alternates: {
    canonical: "https://al9wel.netlify.app/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
