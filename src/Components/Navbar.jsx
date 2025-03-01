import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogut = () => {
    dispatch(signOut());
  };
  return (
    <Flex
      justify={"center"}
      gap={5}
      fontSize={"bold"}
      bg={"blue"}
      color={"white"}
      font={10}
      p={5}
    >
      <h1>My Library</h1>
      <Link to="/">Home</Link>
      <Link to="/mybooks">My Books</Link>
      {user ? (
        <div>
          <Button onClick={handleLogut}>Logout</Button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <Link to="/register">Register</Link>
    </Flex>
  );
};

export default Navbar;
