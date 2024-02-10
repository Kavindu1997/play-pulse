import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import useData from "./useData";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
  });

export default usePlatforms;

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

// const usePlatforms = () =>
//   useQuery({
//     queryKey: ["platforms"],
//     queryFn: () =>
//       apiClient
//         .get<FetchResponse<Platform>>("/platforms/lists/parents")
//         .then((res) => res.data),
//     staleTime: 24 * 60 * 60 * 1000, //24h
//   });
