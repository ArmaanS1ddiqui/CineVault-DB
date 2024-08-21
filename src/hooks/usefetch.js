import { useEffect, useState, useCallback } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = useCallback(
    async (page = 1) => {
      setIsLoading(true);
      const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}&page=${page}`;
      const response = await fetch(url);
      const json = await response.json();

      if (json.results.length > 0) {
        setData((prevData) => {
          // Ensure no duplicate movies
          const uniqueData = [...prevData, ...json.results].reduce(
            (acc, movie) => {
              if (!acc.some((item) => item.id === movie.id)) {
                acc.push(movie);
              }
              return acc;
            },
            []
          );
          return uniqueData;
        });
        setPageNum(page + 1);
        if (json.results.length < 20) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }

      setIsLoading(false);
    },
    [apiPath, queryTerm]
  ); // Dependencies of useCallback

  useEffect(() => {
    // Fetch initial data when the component mounts or apiPath/queryTerm changes
    setData([]);
    setPageNum(1);
    setHasMore(true);
    fetchMovies(1);
  }, [apiPath, queryTerm, fetchMovies]);

  return { data, isLoading, hasMore, fetchMore: () => fetchMovies(pageNum) };
};
