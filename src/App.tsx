import { Flex, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId: number | undefined;
  platformId: number | undefined;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList
          selectedGenreId={gameQuery.genreId}
          onSelectedGenre={(genre: Genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
        />
      </GridItem>

      <GridItem area="main">
        <Flex gap={5} marginBottom={2}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={(platform: Platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
