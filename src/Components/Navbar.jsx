import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>My Library</h1>
      <Link to="/">Home</Link>
      <Link to="/mybooks">My BOoks</Link>
    </div>
  );
};

export default Navbar;
