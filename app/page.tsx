import {
  Book,
  HelpCircle,
  Laptop,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MyBelanjawan",
  description:
    "Aplikasi utama untuk merancang dan memantau belanjawan tahunan di peringkat Persekutuan",
  alternates: {
    canonical: "https://mybelanjawan.gov.my",
  },
};

export default function Page() {
  const sites = [
    {
      title: "Aplikasi MyBelanjawan",
      description:
        "Aplikasi utama untuk merancang dan memantau belanjawan tahunan di peringkat Persekutuan",
      href: "https://app.mybelanjawan.gov.my",
      icon: Laptop,
      imgSrc: "/ss-aplikasi.webp",
    },
    {
      title: "Dokumentasi Sistem",
      description:
        "Panduan pengguna interaktif, yang berintegrasi sepenuhnya dengan aplikasi MyBelanjawan",
      href: "https://docs.mybelanjawan.gov.my",
      icon: Book,
      imgSrc: "/ss-dokumentasi.webp",
    },
    {
      title: "Video Panduan Pengguna",
      description:
        "Panduan pengguna interaktif, yang berintegrasi sepenuhnya dengan aplikasi MyBelanjawan",
      href: "https://docs.mybelanjawan.gov.my/docs/video-panduan-pengguna",
      icon: GraduationCap,
      imgSrc: "/ss-video.webp",
    },
    {
      title: "Helpdesk",
      description:
        "Wujudkan tiket untuk tindakan pasukan kami, mengikut tahap kritikal tiket anda",
      href: "https://helpdesk.mybelanjawan.gov.my",
      icon: HelpCircle,
      imgSrc: "/ss-helpdesk.webp",
    },
    // {
    //   title: "Status Sistem",
    //   description:
    //     "Status teknikal sistem MyBelanjawan, termasuk Uptime dan log insiden bagi 90 hari terkini",
    //   href: "https://status.mybelanjawan.dev",
    //   icon: BarChart,
    //   imgSrc: "/ss-status.webp",
    // },
    {
      title: "Portal Latihan",
      description:
        "Jadual dan aturcara ToT MyBelanjawan, serta pautan untuk muat turun dokumen latihan",
      href: "https://training.mybelanjawan.gov.my",
      icon: GraduationCap,
      imgSrc: "/ss-portal-latihan.webp",
    },
    {
      title: "Buku Belanjawan 2026",
      description:
        "Salinan digital rasmi bagi Belanjawan 2026 yang telah dibentangkan di Parlimen",
      href: "https://belanjawan.mof.gov.my/ms/perbelanjaan",
      icon: GraduationCap,
      imgSrc: "/ss-buku-belanjawan-2026.webp",
    },
  ];

  return (
    <div className="min-h-dvh bg-white font-sans">
      <main className="container mx-auto px-4 pt-10 pb-16">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-gray-900 mb-4">
            Selamat Datang ke Sistem MyBelanjawan
          </h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sites.map((site, index) => (
            <Link
              key={site.href}
              href={site.href}
              className={`block md:max-w-[500px] p-2 h-full cursor-pointer no-underline ${
                index === sites.length - 1 && sites.length % 3 === 1
                  ? "lg:col-start-2"
                  : ""
              }`}
              aria-label={`Link to ${site.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {site.imgSrc ? (
                  <Image
                    alt={site.title}
                    src={site.imgSrc}
                    className="object-cover object-center w-full"
                    width={544}
                    height={306}
                  />
                ) : (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 aspect-video flex items-center justify-center">
                    <div className="p-4 rounded-2xl bg-white/80">
                      <site.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                    {site.title}
                  </h2>
                  <p className="prose mb-3 max-w-none text-gray-500">
                    {site.description}
                  </p>
                  <p className="text-sm font-mono text-gray-400">
                    {new URL(site.href).host}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
