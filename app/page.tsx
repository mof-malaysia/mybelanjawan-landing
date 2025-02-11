import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Book, HelpCircle, BarChart, Laptop, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function Page() {
  const sites = [
    {
      title: "Aplikasi MyBelanjawan",
      description: "Aplikasi utama untuk perancangan + pemantauan bajet",
      href: "https://app.mybelanjawan.dev",
      icon: Laptop,
    },
    {
      title: "Dokumentasi Sistem",
      description: "Panduan pengguna interaktif dan berintegrasi",
      href: "https://docs.mybelanjawan.dev",
      icon: Book,
    },
    {
      title: "Helpdesk",
      description: "Wujudkan tiket untuk tindakan pasukan MyBelanjawan",
      href: "https://helpdesk.mybelanjawan.dev",
      icon: HelpCircle,
    },
    {
      title: "Status Sistem",
      description: "Uptime sistem serta log insiden yang telus",
      href: "https://status.mybelanjawan.dev",
      icon: BarChart,
    },
    {
      title: "Portal Latihan",
      description: "Lihat dan muat turun dokumen latihan",
      href: "https://training.mybelanjawan.dev",
      icon: GraduationCap,
    },
  ]

  return (
    <div className="min-h-dvh bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <main className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 mb-4">
            Ekosistem MyBelanjawan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selamat datang ke MyBelanjawan. Pilih perkhidmatan yang anda perlu.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site) => (
            <Link key={site.href} href={site.href} className="group">
              <Card className="h-full transition-all group-hover:shadow-lg bg-white border border-gray-200 flex flex-col items-center text-center p-4">
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                    <site.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                    {site.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{site.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}