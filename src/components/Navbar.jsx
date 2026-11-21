
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">CHANDNI<span>.</span></h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-btn">
        Let's Connect
      </a>
    </nav>
  );
}

export default Navbar;
