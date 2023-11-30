import History from "../../components/Home/History";
import Banner from "../../components/Home/banNer";
import { ItemMoview } from "../../components/common/ItemMovie";
// import { Player } from "../../components/common/Player";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="col-span-2  ">
        <div>
          <Banner/>
          {/* <Player url="https://youtu.be/ygvNCEbMusE" height="560px" /> */}
        </div>
      </div>
      <div className="relative flex flex-col gap-10">
        <div className="w-full h-full rounded-lg mt-5">
          <p className="mb-4 text-24 font-bold border-b-4 border-Primary inline-block">
            Watching History
          </p>
          <History />
        </div>
        <div className="w-full h-full rounded-lg">
          <p className="mb-4 text-24 font-bold border-b-4 border-Primary inline-block">
            Top Rated
          </p>
          <ItemMoview />
        </div>
        <div className="w-full h-full rounded-lg">
          <p className="mb-4 text-24 font-bold border-b-4 border-Primary inline-block">
            Best of Action
          </p>
          <ItemMoview />
        </div>
      </div>
    </div>
  );
}
