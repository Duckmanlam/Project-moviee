import { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const uploadChunk = async (chunk) => {
    const url = 'https://streamapi.com:5041/UploadMP4'; // Update with your endpoint URL
    const formData = new FormData();
    formData.append('file', chunk, chunk.name);

    return axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const uploadFile = async () => {
    const chunkSize = 12428800; // 5MB chunks
    const fileSize = selectedFile.size;
    let offset = 0;

    while (offset < fileSize) {
      const chunk = selectedFile.slice(offset, offset + chunkSize);
      await uploadChunk(chunk);
      offset += chunkSize;
    }

    alert('File uploaded successfully');
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag and drop a video file here, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      <button onClick={uploadFile} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
}
