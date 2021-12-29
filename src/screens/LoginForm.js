import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  CircularProgress,
} from "@chakra-ui/core";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../utils/mockApi";
import ErrorMessage from "../components/ErrorMessage";
function LoginForm() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await axios.get("/api/users");
    console.log("Response is:", res);
  };

  useEffect(() => {
    getData();
  }, []);
  let navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const registration = () => {
    navigate("/registration");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`Number is: ${number}`);
    setIsLoading(true);
    try {
      await userLogin({ number });
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setError("User is not registered");
      setIsLoading(false);
      setNumber("");
    }
  };
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        mt={8}
      >
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>

        <Box my={4} px={8} textAlign="left">
          <form onSubmit={handleSubmit}>
            {error && <ErrorMessage message={error} />}
            <FormControl isRequired mt={6}>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                placeholder="Enter your Mobile Number"
                onChange={(event) => setNumber(event.currentTarget.value)}
              />
            </FormControl>

            {/* <Button type="submit" variantColor="teal" variant="outline"  mt={8} >
                Login
              </Button> */}
            {/* <ButtonGroup variant='outline' spacing='6' mt={6}>
              <Button variantColor="teal" variant="outline">Login</Button>
              <Button variantColor="teal" variant="outline">Register</Button>
              </ButtonGroup> */}

            <Stack direction="row" spacing={4} mt={8}>
              <Button
                type="submit"
                variantColor="teal"
                variant="solid"
                border={0}
                px={10}
              >
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                  "Login"
                )}
              </Button>
              <Button
                variantColor="teal"
                variant="outline"
                onClick={registration}
              >
                Registration
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default LoginForm;
