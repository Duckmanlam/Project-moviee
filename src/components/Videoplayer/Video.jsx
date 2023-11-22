import ReactPlayer from 'react-player';

export default function Video() {
  const videoUrl = 'https://firebasestorage.googleapis.com/v0/b/stream-api-82345.appspot.com/o/webs%2F1700288782.mp4?alt=media'; // Thay đổi URL video tùy thuộc vào nhu cầu của bạn

  return (
    <div className='video-wrapper'>
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width='100%'
      />
    </div>
  );
}
