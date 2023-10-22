import  { useState } from 'react';

const FileDownloader = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleOpenDownloadPage = () => {
    const downloadUrl = 'https://tho.com:7220/api/Files/DownloadVideo?filename=down.mp4';
    setIsDownloading(true); // Bắt đầu tải xuống
    simulateDownload(downloadUrl); // Mô phỏng tải xuống
  };

  const simulateDownload = (url) => {
    let startTime = Date.now(); // Thời điểm bắt đầu tải xuống
    let downloadedSize = 0; // Kích thước đã tải xuống

    const interval = setInterval(() => {
      const currentTime = Date.now(); // Thời điểm hiện tại
      const elapsedTime = (currentTime - startTime) / 1000; // Thời gian đã trôi qua (đổi sang giây)
      const downloadSpeedValue = downloadedSize / elapsedTime; // Tốc độ tải xuống (bytes/giây)
      setDownloadSpeed(downloadSpeedValue);

      if (downloadedSize >= 1000000) {
        clearInterval(interval);
        setIsDownloading(false); // Hoàn thành tải xuống
      }
    }, 500); // Cập nhật tốc độ mỗi 500ms

    // Mô phỏng việc mở trang mới để tải xuống
    setTimeout(() => {
      window.open(url, '_blank'); // Mở trang mới với URL xử lý tải xuống
    }, 1000);

    // Mô phỏng việc tải xuống
    const downloadInterval = setInterval(() => {
      downloadedSize += Math.random() * 100000; // Giả định mỗi lần tải xuống 0-100,000 bytes
      const percent = (downloadedSize / 1000000) * 100; // Giả sử dung lượng tải xuống là 1,000,000 bytes
      setDownloadProgress(percent);

      if (downloadedSize >= 1000000) {
        clearInterval(downloadInterval);
      }
    }, 100); // Cập nhật tiến trình tải xuống mỗi 100ms
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleOpenDownloadPage}
        disabled={isDownloading}
      >
        {isDownloading ? 'Downloading...' : 'Open Download Page'}
      </button>
      <div className="relative mt-4 h-4 bg-gray-300">
        <div
          className="absolute h-full bg-blue-500"
          style={{ width: `${downloadProgress}%` }}
        ></div>
      </div>
      <div className="mt-2">
        {downloadSpeed.toFixed(2)} bytes/s
      </div>
    </div>
  );
};

export default FileDownloader;
