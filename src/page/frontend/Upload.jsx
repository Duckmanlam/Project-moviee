import  { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a temporary URL for the selected image
    setUploadedImageUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('https://tho.com:7220/api/Files/UploadFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUploadStatus('File uploaded successfully.');
        setUploadedImageUrl(response.data.imageUrl);
      }
    } catch (error) {
      setUploadStatus('Error uploading file.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
      <p>{uploadStatus}</p>
      {uploadedImageUrl && <img src={uploadedImageUrl} alt="Uploaded" />}
    </div>
  );
};

export default FileUpload;
