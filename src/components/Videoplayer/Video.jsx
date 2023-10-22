import ReactPlayer from 'react-player';

export default function Video() {
  const videoUrl = 'https://www.youtube.com/watch?v=-tpLfKaYD4g'; // Thay đổi URL video tùy thuộc vào nhu cầu của bạn

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
