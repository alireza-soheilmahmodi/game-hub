import NavBar from "@/components/NavBar";
import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div style={{ padding: "20px" }}>
        <Heading>oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "this page does not exist"
            : "an unexpected error occurred"}
        </Text>
      </div>
    </>
  );
};

export default ErrorPage;
