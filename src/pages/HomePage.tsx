import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
    >
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList />
      </GridItem>

      <GridItem area="main">
        <Flex gap={5} marginBottom={2}>
          <PlatformSelector />
          <SortSelector />
        </Flex>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
