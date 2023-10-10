import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const VideoCarousel = () => {
  const videoUrls = [
    'https://www.youtube.com/watch?v=KL_yIf5uiJo',
    'https://www.youtube.com/watch?v=AnotherVideoID',
    // Thêm nhiều URL video khác nếu cần
  ];

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      emulateTouch={true}
      showArrows={true}          // Hiển thị mũi tên điều hướng
      showIndicators={false}    // Tắt chỉ số (dots)
      itemWidth={300}           // Điều chỉnh kích thước của mỗi slide
      useKeyboardArrows={true}  // Sử dụng phím mũi tên bàn phím để điều hướng
    >
      {videoUrls.map((url, index) => (
        <div key={index} className="carousel-item">
          <ReactPlayer url={url} />
        </div>
      ))}
    </Carousel>
  );
};

export default VideoCarousel;
