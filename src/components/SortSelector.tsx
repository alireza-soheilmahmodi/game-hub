import useGameQueryStore from "@/store";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

const sortOrderList = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "average rating" },
];

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrderList.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <div>
      <MenuRoot>
        <MenuTrigger>
          <Button variant="outline" size="sm">
            Order by: {currentSortOrder?.label}
          </Button>
        </MenuTrigger>
        <MenuContent style={{ position: "absolute" }}>
          {sortOrderList.map((order) => (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => setSelectedSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </div>
  );
};

export default SortSelector;
