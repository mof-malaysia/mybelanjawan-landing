const MaintenanceBanner: React.FC = () => {
  return (
    <div className="bg-red-600 text-white pt-8 pb-4 mt-12" role="alert">
      <div className="text-center">
        <h1 className="font-semibold">Penyelenggaraan Sistem Aplikasi MyBelanjawan</h1>
        <p>Dimaklumkan bahawa penyelenggaraan ke atas Sistem MyBelanjawan akan dilaksanakan seperti butiran berikut:</p>
        <ul>
          <li>
            <span className="font-semibold">Tarikh/Masa Mula:</span> 29 April 2025, jam 4.30 petang
          </li>
          <li>
            <span className="font-semibold">Tarikh/Masa Tamat:</span> 30 April 2025, jam 4.30 petang
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MaintenanceBanner; 