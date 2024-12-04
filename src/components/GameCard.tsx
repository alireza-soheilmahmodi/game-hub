import { Game } from "@/entities/Game";
import { Box, Card, Heading, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .10s ease-in",
      }}
    >
      <Card.Root borderRadius={10} overflow="hidden" height="full">
        <Image src={getCroppedImageUrl(game.background_image) || undefined} />
        <Card.Body>
          <HStack justify="space-between">
            <Heading>
              <Link to={"/games/" + game.slug}>{game.name}</Link>
            </Heading>
            {game.metacritic && <CriticScore score={game.metacritic} />}
          </HStack>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {game.parent_platforms.map(({ platform }) => (
              <span style={{ margin: "5px" }} key={platform.name}>
                {platform.name}
              </span>
            ))}
          </div>
        </Card.Body>
      </Card.Root>
    </Box>
  );
};

export default GameCard;
