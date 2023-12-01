import { useEffect, useState } from "react";
import History from "../../components/Home/History";
import Banner from "../../components/Home/banNer";
import { ItemMoview } from "../../components/common/ItemMovie";
import axiosClient from "../../API/ClientAxios";
// import { Player } from "../../components/common/Player";
export default function Homepage() {
  // const [toprated, setToprated] = useState([]);
  const [bestaction, setBestAction] = useState([]);
  const [homepage, setHomepage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get('/home');
        if (response.success) {
          // setToprated(response.result.getMovieHomeDTO);
          setBestAction(response.result.ratingDTOHome);
          setHomepage(response.result.watchingHistoryHome)
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="col-span-2  ">
        <div>
          <Banner />
          
        </div>
      </div>
      <div className="relative flex flex-col gap-10">
        <div className="w-full h-full rounded-lg mt-5">
          <p className="mb-4 text-24 font-bold border-b-4 border-Primary inline-block">
            Watching History
          </p>
          <History data={homepage}  />
        </div>
        {/* <div className="w-full h-full rounded-lg">
          <p className="mb-4 text-24 font-bold border-b-4 border-Primary inline-block">
            Top Rated
          </p>
          <ItemMoview data={toprated} />
        </div> */}
        <div className="w-full h-full rounded-lg">
          <p className="mb-4 text-24 font-bold border-b-4 border-Primary inline-block">
            Best Of Action
          </p>
          <ItemMoview data={bestaction} />
        </div>
      </div>
    </div>
  );
}
