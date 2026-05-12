import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        background: "#111",
      }}
    >
      <h2 style={{ color: "white" }}>Sportski Turniri</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/teams" style={{ color: "white", textDecoration: "none" }}>
          Teams
        </Link>

        <Link
          to="/tournaments"
          style={{ color: "white", textDecoration: "none" }}
        >
          Tournaments
        </Link>

        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
