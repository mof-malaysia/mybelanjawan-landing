import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dasar Privasi | MyBelanjawan",
  description:
    "Dasar privasi ini menerangkan penggunaan dan perlindungan maklumat yang dikemukakan oleh pengunjung melalui aplikasi Sistem MyBelanjawan",
  alternates: {
    canonical: "https://mybelanjawan.gov.my/dasar-privasi",
  },
};

export default function DasarPrivasiPage() {
  return (
    <div className="pt-20">
      <div className="container h-32 flex items-center justify-center border-b border-gray-300">
        <h1 className="text-4xl font-bold text-center">Dasar Privasi</h1>
      </div>

      <div className="space-y-6 justify-center min-h-80 p-24 px-24">
        <p>
          Dasar privasi ini menerangkan penggunaan dan perlindungan maklumat
          yang dikemukakan oleh pengunjung melalui aplikasi Sistem MyBelanjawan
          di&nbsp;
          <a
            href="https://www.mybelanjawan.gov.my"
            className="text-blue-700 text-decoration-line"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.mybelanjawan.gov.my
          </a>
          .
        </p>
      </div>
    </div>
  );
}
