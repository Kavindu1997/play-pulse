import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres, error, isLoading };
// };
