import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
