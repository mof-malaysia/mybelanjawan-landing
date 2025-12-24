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

const notices = [
  <>Fungsi Pelaporan Prestasi Belanjawan 2025 telah tersedia untuk pengemaskinian oleh semua Kementerian.</>,
  <>
    Selaras dengan peraturan yang ditetapkan dalam Pekeliling Perbendaharaan (PB) 1.2 Anggaran Perbelanjaan Persekutuan 2025, <b>tarikh akhir pelaporan prestasi KPI Outcome dan PI Output bagi Suku Ketiga 2025 </b> adalah pada <b><u>31 Oktober 2025</u></b>.
  </>
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
            <NoticeBanner title="Pengumuman">
              <div className="grid gap-2 py-2 px-6 justify-between">
                {notices.map((notice, idx) => (
                  <div key={idx} className="flex gap-2">
                    <p>{idx+1}.</p>
                    <p>
                      {notice}
                    </p>
                  </div>
                ))}
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
