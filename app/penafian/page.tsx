import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Penafian | MyBelanjawan",
  description:
    "Kerajaan Malaysia dan Kementerian Kewangan tidak bertanggungjawab di atas kehilangan atau kerosakan disebabkan penggunaan mana-mana maklumat yang diperolehi daripada aplikasi ini",
  alternates: {
    canonical: "https://mybelanjawan.gov.my/penafian",
  },
};

export default function PenafianPage() {
  return (
    <div className="pt-20">
      <div className="container h-32 flex items-center justify-center border-b border-gray-300">
        <h1 className="text-4xl font-bold text-center">Penafian</h1>
      </div>

      <div className="space-y-6 justify-center min-h-80 p-24 px-24">
        <div className="space-y-12">
          <div className="flex">
            <span className="font-medium mr-6">1.</span>
            <p>
              Kerajaan Malaysia dan Kementerian Kewangan tidak bertanggungjawab
              di atas kehilangan atau kerosakan disebabkan penggunaan mana-mana
              maklumat yang diperolehi daripada aplikasi ini.
            </p>
          </div>
          <div className="flex">
            <span className="font-medium mr-6">2.</span>
            <p>
              Tidak dibenarkan menggunakan maklumat ini untuk tujuan
              pengiklanan, pemasaran dan penjualan produk dan perkhidmatan serta
              menyebarkan maklumat tanpa kebenaran.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
