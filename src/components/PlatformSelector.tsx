import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatform";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data } = usePlatforms();

  return (
    <div>
      <MenuRoot>
        <MenuTrigger>
          <Button variant="outline" size="sm">
            select: {selectedPlatform ? selectedPlatform.name : "Platform"}
          </Button>
        </MenuTrigger>
        <MenuContent style={{ position: "absolute" }}>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              onClick={() => onSelectPlatform(platform)}
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
