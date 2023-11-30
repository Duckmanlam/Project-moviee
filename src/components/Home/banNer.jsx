// import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
// import axiosClient from "../../API/ClientAxios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
export default function Banner() {
  // const [banner, setBanner] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosClient.get("/home");
  //       if (response.success) {
  //         setBanner(response.result.getMovieHomeDTO);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const [randomIndex, setRandomIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newIndex = Math.floor(Math.random() * banner.length);
  //     setRandomIndex(newIndex);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [banner.length]);

  return (
    <div className="relative w-full max-h-[35rem] h-full overflow-hidden rounded">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" autoplay>
        <SwiperSlide>
          <ReactPlayer
            url="https://youtu.be/ygvNCEbMusE"
            playing={true}
            loop={true}
            muted={false}
            width="100%"
            height="560px"
          />
        </SwiperSlide>
        <SwiperSlide> <ReactPlayer
          url="https://youtu.be/ygvNCEbMusE"
          playing={true}
          loop={true}
          muted={false}
          width="100%"
          height="560px"
        /></SwiperSlide>
      </Swiper>
      <div className="absolute left-10 z-50">
        <p>Title</p>

      </div>
      {/* <ReactPlayer
        url="https://youtu.be/ygvNCEbMusE"
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">title</h1>
          <p className="text-lg">description</p>
        </div>
      </div> */}
    </div>
  );
}
