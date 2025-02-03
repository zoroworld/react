import { useEffect } from "react";
import { useState } from "react";

function NavBar() {
  const [isMobile, setIsMobile] = useState({
    sm: window.innerWidth < 768 && window.innerWidth > 300,
    md: window.innerWidth < 991 && window.innerWidth > 767,
    lg: window.innerWidth < 1400 && window.innerWidth > 990,
    xl: window.innerWidth < 1920 && window.innerWidth > 1399,
    xxl: window.innerWidth > 1920,
  });

  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Update isMobile state based on current window width
  function updateMobile() {
    const size = window.innerWidth;
    setIsMobile({
      sm: size < 768 && size > 300,
      md: size < 991 && size > 767,
      lg: size < 1400 && size > 990,
      xl: size < 1920 && size > 1399,
      xxl: size > 1920,
    });
  }

  function handleMobileTab() {
    if (!show) {
      setShow(true);
      setAnimate(true);
    } else {
      setAnimate(false);
      setTimeout(() => setShow(false), 650); // Ensures the hide animation completes
    }
  }

  useEffect(() => {
    // Add resize event listener
    window.addEventListener("resize", updateMobile);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <>
      <div className="navbar-contain">
        {isMobile.xxl && (
          <nav className="nav">
            <div className="nav-img-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                NavBar xxl
              </a>
            </div>
            <div className="nav-links">
              <ul className="nav-links-contain">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Contaact</a>
                </li>
              </ul>
            </div>
            <div className="nav-items">
              <button>Login</button>
              <button>Signup</button>
            </div>
          </nav>
        )}
        {isMobile.xl && (
          <nav className="nav">
            <div className="nav-img-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                NavBar xl
              </a>
            </div>
            <div className="nav-links">
              <ul className="nav-links-contain">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Contaact</a>
                </li>
              </ul>
            </div>
            <div className="nav-items">
              <button>Login</button>
              <button>Signup</button>
            </div>
          </nav>
        )}
        {isMobile.lg && (
          <nav className="nav">
            <div className="nav-img-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                NavBar lg
              </a>
            </div>
            <div className="nav-links">
              <ul className="nav-links-contain">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Contaact</a>
                </li>
              </ul>
            </div>
            <div className="nav-items">
              <button>Login</button>
              <button>Signup</button>
            </div>
          </nav>
        )}
        {isMobile.md && (
          <nav className="nav">
            <div className="nav-img-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                NavBar md
              </a>
            </div>
            <div className="nav-links">
              <ul className="nav-links-contain">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Contaact</a>
                </li>
              </ul>
            </div>
            <div className="nav-items">
              <button>Login</button>
              <button>Signup</button>
            </div>
          </nav>
        )}
        {isMobile.sm && (
          <nav className="nav">
            <div className="nav-img-sm-link">
              <a href="#" target="_blank" rel="noopener noreferrer">
                NavBar sm
              </a>
            </div>
            <button className="tab-button" onClick={handleMobileTab}>
              tab
            </button>
            {show && (
              <div className={`tab-content ${animate ? "show" : "hide"}`}>
                <div className="nav-sm-links">
                  <ul className="nav-links-sm-contain">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-sm-items">
                  <button>Login</button>
                  <button>Signup</button>
                </div>
              </div>
            )}
          </nav>
        )}
      </div>
    </>
  );
}

export default NavBar;
