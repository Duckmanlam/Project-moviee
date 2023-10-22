import  { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function Banner() {
  const data = {
    thumbnailUrl: "https://lh3.google.com/u/0/d/11FFJXZYLfM5VUcqUpvZnSP6HCdqSCXon=w1920-h963-iv1",
    videoUrls: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" // Add your video URLs here
    ],
    titles: ["MS. Marvel", "We Are Going On Bullrun "], // Add your titles here
    descriptions: [
      "he Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
      "he Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car." // Add your descriptions here
    ]
  };

  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * data.videoUrls.length);
      setRandomIndex(newIndex);
    }, 5000); // Change the interval as needed (in milliseconds)
    return () => clearInterval(interval);
  }, [data.videoUrls.length]);

  return (
    <div className="relative">
      <ReactPlayer
        url={data.videoUrls[randomIndex]}
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', filter: 'brightness(60%)' }}
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-32 h-full font-bold drop-shadow-xl">
          {data.titles[randomIndex]}
        </p>
        <p className="text-Grayscale60 text-[12px] mt-4 drop-shadow-xl w-3/4">
          {data.descriptions[randomIndex]}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
        <button className="bg-red-500 px-6 py-2 rounded-md text-white text-lg font-semibold hover:bg-red-600 transition-colors">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}
