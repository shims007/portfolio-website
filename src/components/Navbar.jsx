function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>

      <div>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;