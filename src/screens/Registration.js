import React, { useState } from "react";
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

function Registration() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
    }
  };
  const cancellation = () => {
    navigate("/");
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
          <Heading>Registration</Heading>
        </Box>

        <Box my={4} px={8} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input placeholder="Muhammad Anas" />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com" />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Mobile Number</FormLabel>
              <Input placeholder="03365567718" />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Address</FormLabel>
              <Input placeholder="House.No # 9, Street.No # 14, G-9/1 Islamabad" />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Age</FormLabel>
              <Input type="password" placeholder="24" />
            </FormControl>

            {/* <Flex align="center" justifyContent="center">
              <Button
                type="submit"
                variantColor="teal"
                variant="outline"
                mt={8}
              >
                Register Now
              </Button>
            </Flex> */}

            <Stack direction="row" spacing={4} mt={8}>
              <Button
                type="submit"
                variantColor="teal"
                variant="solid"
                border={0}
              >
                {isLoading ? (
                  <CircularProgress isIndeterminate size="24px" color="teal" />
                ) : (
                  "Register Now"
                )}
              </Button>
              <Button
                variantColor="teal"
                variant="outline"
                onClick={cancellation}
                px={10}
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Registration;
