import { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root width="300px" borderRadius={10} overflow="hidden" gap="10">
        <Image src={getCroppedImageUrl(game.background_image)} />
        <Card.Body>
          <Heading>{game.name}</Heading>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {game.parent_platforms.map(({ platform }) => (
              <span style={{ margin: "5px" }}>{platform.name} </span>
            ))}
            <CriticScore score={game.metacritic} />
          </div>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
