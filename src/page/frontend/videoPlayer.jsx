import TopMovies from "../../components/Home/topMovies";
import MoreInfo from "../../components/Videoplayer/MoreInfo";

export default function VideoPlayer() {
  return (
    <div className="ml-8 grid grid-cols-3 gap-4 mt-4 ">
      <div className="col-span-2  ">
        <div className="mt-4">
          <MoreInfo/>
        </div>
      </div>
      <div className="col-span-1 ml-8 ">
        <TopMovies/>
      </div>
    </div>
  )
}
