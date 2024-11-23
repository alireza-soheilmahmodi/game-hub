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

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const currentSortOrder = sortOrderList.find(
    (order) => order.value === sortOrder
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
              onClick={() => onSelectSortOrder(order.value)}
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
