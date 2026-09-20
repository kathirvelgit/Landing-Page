import nextcentLogo from "../assets/Icon2.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={nextcentLogo} alt="Nextcent logo" />
          <span>Nextcent</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#community">Community</a>
          <a href="#blog">Blog</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <button className="register-btn">Register Now  →</button>
      </div>
    </header>
  );
}

export default Navbar;
