import useTrailer from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;

  if (!data?.results[0]) return null;
  return (
    <video
      style={{ width: "100%" }}
      src={data?.results[0].data[480]}
      poster={data?.results[0].preview}
      controls
    ></video>
  );
};

export default GameTrailer;
