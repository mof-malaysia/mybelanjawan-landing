import Image from "next/image";
import At from "./at";

const Header: React.FC = () => {
  return (
    <div className="w-screen fixed bg-white top-0 border-b h-16 z-20 flex items-center print:hidden">
      <div className="container relative mx-auto flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex w-max cursor-pointer gap-4">
            <At
              href="/"
              className="flex items-center gap-4 justify-center container mx-auto"
            >
              <Image
                src="/jata_logo.png"
                width={36}
                height={27}
                alt="datagovmy_logo"
              />
              <h3>MyBelanjawan</h3>
            </At>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
