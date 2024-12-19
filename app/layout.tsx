import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kam's Beauty",
  description: "Kams's Beauty, votre salon de beauté conplet : coiffure, onglerie, make-up et vente de produits cosmétiques. Situé au Congo Brazzaville",
  keywords: "Kam's Beauty, salon de coiffure, ong:lerie, make-up, vente de produits cosmétiques, Bacongo, Brazzaville, Congo",
  applicationName: "Kams's Beauty",
  authors: {name: "Makso Riche Isaac", url: "https://my-portfolio-ruby-theta-72.vercel.app/"},
  openGraph: {
    type: "website",
    countryName: "Congo",
    description: "Kams's Beauty, votre salon de beauté conplet : coiffure, onglerie, make-up et vente de produits cosmétiques. Situé au Congo Brazzaville",
    title: "Kam's Beauty",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
