import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  selectedGenreId?: number;
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenreId, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  return (
    <List.Root variant="plain">
      {data?.results.map((genre) => (
        <ListItem key={genre.id} padding={3}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background) || undefined}
            />
            <Button
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => onSelectedGenre(genre)}
              variant="plain"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
