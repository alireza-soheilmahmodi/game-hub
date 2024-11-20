import { Button } from "@/components/ui/button";
import { Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <div>
      <Button>hello</Button>
      <Box background="tomato" width="100%" padding="4" color="white">
        This is the Box
      </Box>
    </div>
  );
}

export default App;
