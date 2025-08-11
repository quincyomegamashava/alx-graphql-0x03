import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "@/graphql/queries";

export default function Home() {
  const { data, loading, error } = useQuery(GET_EPISODES, {
    variables: { page: 1 }
  });

  if (loading) return <p className="text-center mt-8">Loading episodes...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">Error: {error.message}</p>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Rick and Morty Episodes</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.episodes.results.map((episode: any) => (
          <li key={episode.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{episode.name}</h2>
            <p className="text-gray-500">{episode.air_date}</p>
            <span className="text-sm text-blue-600 font-mono">{episode.episode}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
