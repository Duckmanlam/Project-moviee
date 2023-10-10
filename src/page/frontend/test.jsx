import  { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function ChunkedUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      const chunkSize = 1024 * 1024; // 1 MB chunk size (you can adjust this)
      const numberOfChunks = Math.ceil(file.size / chunkSize);
      const chunks = [];

      // Split the file into chunks
      for (let i = 0; i < numberOfChunks; i++) {
        const start = i * chunkSize;
        const end = Math.min((i + 1) * chunkSize, file.size);
        const chunk = file.slice(start, end);
        chunks.push(chunk);
      }

      // Upload each chunk
      chunks.forEach(async (chunk, index) => {
        const formData = new FormData();
        formData.append('file', chunk);

        try {
          // Send each chunk to the server
          await axios.post('https://streamapi.com:5041/UploadMP4', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          console.log(`Chunk ${index + 1} uploaded successfully.`);
        } catch (error) {
          console.error(`Error uploading chunk ${index + 1}:`, error);
        }
      });

      // After all chunks are uploaded, inform the server to combine them
      axios.post('/api/combine-chunks', { totalChunks: numberOfChunks })
        .then((response) => {
          console.log('Video uploaded successfully:', response.data);
          // Handle any further processing or display success message
        })
        .catch((error) => {
          console.error('Error combining chunks:', error);
        });
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <h2>Chunked Upload</h2>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag  drop a video file here, or click to select a file</p>
      </div>
    </div>
  );
}

export default ChunkedUpload;
