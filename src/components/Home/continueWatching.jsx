import { Link } from "react-router-dom";
import useFetch from "../../hook/useFetch";

export default function Continuewatching() {
  const BASE_URL = "https://inshortsapi.vercel.app/news?category=all";
  const { data: users, loading, error } = useFetch(BASE_URL);
  return (
    <div>
      <h1>Custom React Hook (Data Fetching)</h1>
      {loading && <h3>loading...</h3>}
      {error && <h3>Error: Something went wrong</h3>}
      {users.map((e) => {
        return (
          <Link to={e.url} key={e.id}>
            <span>Name: {e.author}</span>
            <img src={e.imageUrl} alt="" />
          </Link>
        );
      })}
    </div>
  );
}
