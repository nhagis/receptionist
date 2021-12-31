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
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";

function Registration() {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/users/register", {
        name: name,
        email: email,
        password: password,
        number: number,
        address: address,
        age: age,
      });
      console.log("Response is:", res);
      if (res.data.message === "successfull") {
        setIsLoading(false);
        navigate("/");
      } else {
        console.log("Failed");
        setError("User Already Exists");
        setIsLoading(false);
      }
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
            {error && <ErrorMessage message={error} />}
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                placeholder="Muhammad Anas"
                onChange={(event) => setName(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="test@test.com"
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="*******"
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                placeholder="03365567718"
                onChange={(event) => setNumber(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="House.No # 9, Street.No # 14, G-9/1 Islamabad"
                onChange={(event) => setAddress(event.currentTarget.value)}
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Age</FormLabel>
              <Input
                placeholder="24"
                onChange={(event) => setAge(event.currentTarget.value)}
              />
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
