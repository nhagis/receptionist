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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../utils/mockApi";
import ErrorMessage from "../components/ErrorMessage";
function LoginForm() {
  const [users, setUsers] = useState([]);

  // const getData = async () => {
  //   const res = await axios.get("/api/users");
  //   console.log("Response is:", res.data);
  // };

  //   const login =()=>{
  //     axios.post("http://localhost:6969/Login",user)
  //     .then(res=>{alert(res.data.message)
  //     setLoginUser(res.data.user)
  // }

  let navigate = useNavigate();
  const [number, setNumber] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setNumber({});
    };
  }, []);

  const registration = () => {
    navigate("/registration");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`Number is: ${number}`);
    setIsLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/users/login", {
        number,
      });
      console.log("Response is:", res);
      // console.log("Resoponse is: ", res);
      if (res.data.message === "login sucess") {
        console.log("Sucessfull");
        const { name, address, number } = await res.data.user;
        navigate("/home", {
          state: { name: name, address: address, number: number },
        });
        setNumber({});
      } else {
        console.log("Failed");
        setError("User is not registered");
        setNumber({});
      }
      // await userLogin({ number });
      setIsLoading(false);
      // navigate("/home");
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
