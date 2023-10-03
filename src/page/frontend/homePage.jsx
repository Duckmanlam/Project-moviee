import Banner from "../../components/Home/banNer";
import Continuewatching from "../../components/Home/continueWatching";
import Topmovies from "../../components/Home/topMovies";

export default function Homepage() {
  return (
    <div className="ml-8 grid grid-cols-3 gap-4 mt-12">
      <div className="col-span-2  ">
        <div>
          <Banner />
          
        </div>
        <div className="mt-8">
          <Continuewatching />
        </div>
      </div>
      <div className="col-span-1 ml-8 ">
        <Topmovies/>
      </div>
    </div>
  );
}
 