import { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Xử lý sự kiện khi người dùng chọn file
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Xử lý sự kiện khi người dùng nhấn nút để đăng tải file
  const handleFileUpload = async () => {
    try {
      if (!selectedFile) {
        console.error('Vui lòng chọn một file để đăng tải.');
        return;
      }

      setLoading(true); // Set loading state to true

      const formData = new FormData();
      formData.append('file', selectedFile);

      console.log('Request Payload:', formData);
      console.log('Request Headers:', {
        'Content-Type': 'multipart/form-data',
      });

      // Gửi yêu cầu POST sử dụng axios
      const response = await axios.post('https://streamapi.com:3000/list-model/upload', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Xử lý phản hồi từ API (response.data chứa dữ liệu từ server)
      console.log('File đã được đăng tải thành công:', response.data);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error('Lỗi khi đăng tải file:', error);
      if (error.response) {
        console.error('Response Data:', error.response.data);
      }
    } finally {
      setLoading(false); // Set loading state back to false, whether successful or not
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} disabled={loading}>
        {loading ? 'Đang tải...' : 'Đăng tải File'}
      </button>
    </div>
  );
};

export default Test;
