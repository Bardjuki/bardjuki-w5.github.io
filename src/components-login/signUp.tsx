import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user created", cred.user);
        navigate("/");
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
          <Heading>Sign Up</Heading>
          <Text>Create your account with e-mail and password</Text>
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

          <Button
            mt={3}
            type="submit"
            rounded="none"
            colorScheme="blue"
            w={["full", "auto"]}
            alignSelf="end"
          >
            Sign Up
          </Button>
        </form>
        <p>
          Need to Login ? <Link to="/">Login</Link>
        </p>
      </VStack>
    </Box>
  );
}

export default SignUp;
