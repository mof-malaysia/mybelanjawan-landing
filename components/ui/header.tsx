import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div className="w-screen fixed bg-white top-0 border-b h-16 z-20 flex items-center print:hidden">
      <div className="container relative mx-auto flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex w-max cursor-pointer gap-4">
            <div className="flex w-8 items-center justify-center">
              <Image
                src="/jata_logo.png"
                width={48}
                height={36}
                alt="datagovmy_logo"
              />
            </div>
            <h3>MyBelanjawan</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; 