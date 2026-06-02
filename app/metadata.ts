import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://al9wel.netlify.app"),

  title: {
    default: "Salem Ahmed Alswil | Frontend Developer",
    template: "%s | Salem Ahmed Alswil",
  },

  description:
    "Salem Ahmed Alswil (AL9WEL) is a Frontend Developer from Yemen specializing in React, Next.js, TypeScript, Tailwind CSS, and modern web applications.",

  keywords: [
    "Salem Ahmed Alswil",
    "Salem Alswil",
    "Salem Ahmed",
    "سالم احمد الصويل",
    "سالم الصويل",
    "سالم احمد",
    "AL9WEL",
    "al9wel",
    "Frontend Developer",
    "Frontend Developer Yemen",
    "React Developer",
    "React Developer Yemen",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "Salem Ahmed Alswil",
      url: "https://al9wel.netlify.app",
    },
  ],

  creator: "Salem Ahmed Alswil",
  publisher: "Salem Ahmed Alswil",

  alternates: {
    canonical: "https://al9wel.netlify.app",
  },

  openGraph: {
    title: "Salem Ahmed Alswil | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript and modern web applications.",

    url: "https://al9wel.netlify.app",
    siteName: "Salem Ahmed Alswil Portfolio",

    images: [
      {
        url: "/portflio.png",
        width: 1200,
        height: 630,
        alt: "Salem Ahmed Alswil Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Salem Ahmed Alswil | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript and modern web applications.",
    creator: "@al9wel1",
    images: ["/portflio.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
