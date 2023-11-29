import Banner from "../../components/Home/banNer";
import Topmovies from "../../components/Home/topMovies";
import Trending from "../../components/Home/trending";

export default function Homepage() {
  return (
    <div className="ml-8 grid grid-cols-3 gap-4 mt-4 ">
      <div className="col-span-2  ">
        <div className="min-h-[25rem]">
          <Banner />
        </div>
        <div className="mt-4">
          <Trending />
        </div>
      </div>
      <div className="col-span-1 ml-8 ">
        <Topmovies />
      </div>
    </div>
  );
}
