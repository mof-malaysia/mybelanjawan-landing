import { ReactNode } from "react";
import { InfoIcon } from "lucide-react";

interface NoticeBannerProps {
  maintenanceMode?: boolean;
  title?: string;
  children?: ReactNode;
}

const renderMaintenanceInfo = () => (
  <div className="container pt-8 pb-4 mt-12">
    <div className="bg-sky-50 rounded-lg p-4">
      <div className="flex gap-2">
        <InfoIcon className="w-4 h-4 text-blue-600 my-auto" />
        <h1 className="font-semibold text-blue-600">Penyelenggaraan Sistem Aplikasi MyBelanjawan</h1>
      </div>
      <p className="pl-6">Dimaklumkan bahawa penyelenggaraan ke atas Sistem MyBelanjawan akan dilaksanakan seperti butiran berikut:</p>
      <div className="grid gap-2 pl-6 pt-4">
        <div className="bg-white border border-gray-300 rounded-lg shadow-md py-2 px-4 w-fit">
          <span className="text-gray-500">Tarikh/Masa Mula:</span> 29 April 2025, jam 4.30 petang
        </div>
        <div className="bg-white border border-gray-300 rounded-lg shadow-md py-2 px-4 w-fit">
          <span className="text-gray-500">Tarikh/Masa Tamat:</span> 30 April 2025, jam 11.59 malam
        </div>
      </div>
    </div>
  </div>
);

const NoticeBanner: React.FC<NoticeBannerProps> = ({
  maintenanceMode = false,
  title,
  children,
}) => {
  if (maintenanceMode) {
    return renderMaintenanceInfo();
  }
  
  return (
    <div className="container pt-8 pb-4 mt-12">
      <div className="bg-sky-50 rounded-lg p-4">
        {title && (
          <div className="flex gap-2">
            <InfoIcon className="w-4 h-4 text-blue-600 my-auto" />
            <h1 className="font-semibold text-blue-600">{title}</h1>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default NoticeBanner; 