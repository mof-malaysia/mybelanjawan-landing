import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import At from "@/components/ui/at";
import NoticeBanner from "@/components/ui/notice-banner";

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

const footerLinks = [
  {
    title: "Laman Utama Sistem MyBelanjawan",
    href: "https://mybelanjawan.gov.my",
  },
  {
    title: "Dokumentasi Sistem",
    href: "https://docs.mybelanjawan.gov.my",
  },
  {
    title: "Video Panduan Pengguna",
    href: "https://docs.mybelanjawan.gov.my/docs/video-panduan-pengguna",
  },
  {
    title: "Helpdesk",
    href: "https://helpdesk.mybelanjawan.gov.my",
  },
  {
    title: "Status",
    href: "https://status.mybelanjawan.dev",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <div className="container">
            <NoticeBanner>
              <div className="grid gap-2 py-2 px-6 justify-between text-blue-600 font-semibold">
                <div className="flex gap-2">
                  <p>1.</p>
                  <p>
                    Sistem MyBelanjawan telah dibuka untuk penyediaan Anggaran Perbelanjaaan Persekutuan Tahun 2026 bermula 5 Mei 2025. Tarikh akhir sign-off Pegawai Pengawal adalah pada 31 Mei 2025.
                  </p>
                </div>
                <div className="flex gap-2">
                  <p>2.</p>
                  <p>
                    Fungsi Pelaporan Prestasi Belanjawan 2025 telah tersedia untuk pengemaskinian oleh semua Kementerian.
                  </p>
                </div>
                <div className="flex gap-2">
                  <p>3.</p>
                  <p>
                    {`Sesi "Anda Tanya, Kami Jawab" Siri 1 akan diadakan pada 8 Mei 2025, 10.30 - 11.30 pagi melalui aplikasi zoom.`}
                  </p>
                </div>
              </div>
            </NoticeBanner>
            {children}
          </div>
          <Footer title="Kementerian Kewangan Malaysia">
            <div className="grid gap-3 w-[25em]">
              {footerLinks.map((link) => (
                <>
                  <At href={link.href} variant="anchor" external>
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
