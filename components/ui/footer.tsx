import Image from "next/image";

import { FunctionComponent, ReactNode } from "react";
import At from "./at";

interface FooterProps {
  title?: ReactNode;
  children?: ReactNode;
}

const links = [{
  title: "Penafian",
  href: "/penafian",
}, {
  title: "Dasar Privasi",
  href: "/dasar-privasi",
}, {
  title: "Polisi Keselamatan",
  href: "/polisi-keselamatan",
}];

const Footer: FunctionComponent<FooterProps> = ({ title, children }) => {
  return (
    <div className="bg-background border-t border-outline pt-12 pb-16 z-10">
      <div className="flex w-full container mx-auto max-md:flex-col max-md:gap-8 md:justify-between">
        <div className="flex gap-4">
          {/* LOGO */}
          <div className="mt-1 w-12">
            <Image
              src="/jata_logo.png"
              width={48}
              height={36}
              alt="jata negara"
            />
          </div>
          <div>
            <div className="mb-2 font-bold uppercase">{title}</div>
            <p className="text-dim text-sm">
              HAK CIPTA TERPELIHARA © {new Date().getFullYear()} KEMENTERIAN KEWANGAN
            </p>
            <div className="flex pt-1">
              {links.map((link, idx) => (
                <>
                  <At
                    href={link.href}
                    variant="reset"
                    className="text-dim text-sm font-normal hover:underline w-fit"
                    external={false}
                  >
                    <span>{link.title}</span>
                    {idx < links.length - 1 && <span className="px-2">|</span>}
                  </At>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-6 text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Footer;
