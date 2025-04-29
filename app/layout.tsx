import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Header from '@/components/ui/header';
import Footer from "@/components/ui/footer";
import At from "@/components/ui/at";
import MaintenanceBanner from "@/components/ui/maintenance-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyBelanjawan",
  description: "Ekosistem perkhidmatan MyBelanjawan",
};

const footerLinks = [{
  title: "Laman Utama Sistem MyBelanjawan",
  href: "https://mybelanjawan.dev",
}, {
  title: "Dokumentasi Sistem",
  href: "https://docs.mybelanjawan.dev",
}, {
  title: "Video Panduan Pengguna",
  href: "https://docs.mybelanjawan.dev/docs/video-panduan-pengguna",
}, {
  title: "Helpdesk",
  href: "https://helpdesk.mybelanjawan.dev",
}, {
  title: "Status",
  href: "https://status.mybelanjawan.dev",
}];

export default function RootLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <div className="container">
            <MaintenanceBanner />
            {children}
          </div>
          <Footer title="Kementerian Kewangan Malaysia">
            <div className="grid gap-3 w-[25em]">
              {footerLinks.map((link) => (
                <>
                  <At
                    href={link.href}
                    variant="anchor"
                    external
                  >
                    {link.title}
                  </At>
                </>
              ))}
            </div>
          </Footer>
        </body>
      </html>
    </>
  );
}
