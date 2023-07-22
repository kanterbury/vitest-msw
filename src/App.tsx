import "./App.css";
import useSWR from "swr";

export const fetcher = async (_url: string) => {
  const res = await fetch("https://example.com");
  if (!res.ok) throw new Error("Error");
  const json = await res.json();
  return json;
};

function App() {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  if (error) {
    return <p>Error</p>;
  }

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{data.username}</p>
    </div>
  );
}

export default App;
