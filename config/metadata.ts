/**
 * TODO:
 * - If gonna use it on deployment
 *    1. Uncomment import statment `keywords` for better SEO.
 *    2. Complete the metadata object with the necessary information.
 *
 * NOTE:
 * - Leave { twitter } 's values to direct SEO to the correct social media account.
 */

import { Metadata } from "next"
// import { keywords } from "./keywords"

export const metadata: Metadata = {
  title: {
    default: "Lablio by Aelluminate",
    template: "%s | Lablio by Aelluminate",
  },
  // keywords: keywords,
  manifest: "",
  generator: "Lablio",
  applicationName: "Lablio",
  description: "",
  openGraph: {
    title: "Lablio",
    description: "",
    url: "",
    siteName: "Lablio",
    images: [
      {
        url: "",
        width: 1920,
        height: 1080,
        alt: "Lablio Open Graph Image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Aelluminate",
    card: "summary_large_image",
    site: "@aelluminate",
    creator: "@aelluminate",
    creatorId: "1658936245899370503",
    description: "",
    images: [
      {
        url: "",
        width: 1920,
        height: 1080,
        alt: "Lablio Open Graph Image",
      },
    ],
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
  alternates: {
    canonical: "",
    languages: {},
  },
  verification: {
    other: {
      me: [""],
    },
  },
  appLinks: {
    web: {
      url: "",
      should_fallback: true,
    },
  },
  category: "service",
}
