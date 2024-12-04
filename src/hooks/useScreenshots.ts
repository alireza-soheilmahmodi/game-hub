import { Screenshot } from "@/entities/Screenshot";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) =>
  useQuery({
    queryKey: ["screenshot", gameId],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Screenshot>>(`/games/${gameId}/screenshots`)
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useScreenshots;
