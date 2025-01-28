import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeProvider";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header>
        <nav
          style={{
            background: theme === "dark" ? "black" : "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          {/* Navigation Links */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <NavLink
              to="/"
              style={{
                color: theme === "dark" ? "white" : "black",
                textDecoration: "none",
              }}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={{
                color: theme === "dark" ? "white" : "black",
                textDecoration: "none",
              }}
              end
            >
              About
            </NavLink>
          </div>

          {/* Inactive Link */}
          <Link
            to="/"
            style={{
              color: theme === "dark" ? "white" : "black",
              textDecoration: "none",
            }}
          >
            NoActive
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: theme === "dark" ? "white" : "black",
              color: theme === "dark" ? "black" : "white",
              border: "none",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Switch Mode
          </button>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
