import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin } from "../Redux/actions/authActions";
import { Button, Flex, Input, VStack } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(signin(email, password, navigate));
  };
  return (
    <Flex h="90vh" justify={"center"} align={"center"}>
      <VStack w={"50%"} gap={"4"} border={"1px solid grey"} borderRadius={"md"}>
        <Input
          w={"80%"}
          m={5}
          type="text"
          placeholder="Enter email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          w={"80%"}
          m={5}
          type="text"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button m={5} colorPalette={"blue"} onClick={handleLogin}>
          LOGIN
        </Button>
      </VStack>
    </Flex>
  );
};

export default Login;
