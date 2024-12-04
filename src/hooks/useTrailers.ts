import { Trailer } from "@/entities/Trailer";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useTrailer = (gameId: number) =>
  useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Trailer>>(`/games/${gameId}/movies`)
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useTrailer;
