import { Card } from "../components/Card";
import { useFetch } from "../hooks/usefetch";
import { useEffect } from "react";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies, isLoading, hasMore, fetchMore } = useFetch(apiPath);

  useEffect(() => {
    document.title = `CineVault | ${title}`;
  }, [title]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasMore && (
          <div className="flex justify-center mt-5">
            <button
              onClick={fetchMore}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
