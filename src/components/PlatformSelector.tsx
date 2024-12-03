import usePlatforms from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platform = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  return (
    <div>
      <MenuRoot>
        <MenuTrigger>
          <Button variant="outline" size="sm">
            select: {selectedPlatformId ? platform?.name : "Platform"}
          </Button>
        </MenuTrigger>
        <MenuContent style={{ position: "absolute" }}>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              onClick={() => setSelectedPlatformId(platform.id)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default PlatformSelector;
