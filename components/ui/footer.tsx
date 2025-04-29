import Image from "next/image";

import { FunctionComponent, ReactNode } from "react";

interface FooterProps {
  title?: ReactNode;
  children?: ReactNode;
}

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
              © {new Date().getFullYear()} MyBelanjawan
            </p>
          </div>
        </div>
        <div className="flex gap-6 text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Footer;
