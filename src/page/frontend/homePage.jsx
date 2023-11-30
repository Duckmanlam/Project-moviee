import { ItemMoview } from "../../components/common/ItemMovie";
import { Player } from "../../components/common/Player";
// import Trending from "../../components/Home/trending";
import { getMovieHomeDTO } from "../../data";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="col-span-2  ">
        <div>
          <Player url="https://youtu.be/ygvNCEbMusE" height="560px" />

        </div>
        {/* <div className="mt-4">
          <Trending />
        </div> */}
      </div>
      <div className="relative flex flex-col gap-10">
        <div className="w-full h-full rounded-lg">
          <p className="mb-4 text-24 font-bold border-b-4 border-Primary inline-block">
            Top Rated
          </p>
          <ItemMoview data={getMovieHomeDTO} />
        </div>
        <div className="w-full h-full rounded-lg">
          <p className="mb-4 text-24 font-bold border-b-4 border-Primary inline-block">
            Best of Action
          </p>
          <ItemMoview data={getMovieHomeDTO} />
        </div>
      </div>
    </div>
  );
}
