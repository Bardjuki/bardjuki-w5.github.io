import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user logged in", cred.user);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.100"]}
      borderRadius={10}
    >
      <VStack spacing={4} align={"flex-start"} w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading>Login</Heading>
          <Text>Enter your e-mail and password to login</Text>
        </VStack>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>E-mail Address</FormLabel>
            <Input
              name="email"
              rounded="none"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              rounded="none"
              variant="filled"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <HStack w="full" justify="space-between">
            <Checkbox>Remember me.</Checkbox>
            <Button variant="link" colorScheme="blue">
              Forgot Password
            </Button>
          </HStack>

          <Button
            type="submit"
            rounded="none"
            colorScheme="blue"
            w={["full", "auto"]}
            alignSelf="end"
          >
            Login
          </Button>
        </form>
        <p>
          Need to SignUp ? <Link to="/SignUp">Create New Account</Link>
        </p>
      </VStack>
    </Box>
  );
}

export default SignIn;
