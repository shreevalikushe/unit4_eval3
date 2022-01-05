import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        justifyContent: "center"
      }}
    >
      <Link to="/">Home Page</Link>
      <Link to="/search">Search Page</Link>
      <Link to="/login">Login Page</Link>
    </div>
  );
}
export default Navbar;
