import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get<Game>(`games/${slug}`).then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGame;
