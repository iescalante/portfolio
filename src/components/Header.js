const Header = () => {
  return (
    <header>
      <a href="#home" className="nav-bar home">
        Ivan Escalante
      </a>
      <nav className="nav-bar">
        <div className="hamburger">
          <div></div>
        </div>
        <ul className="nav-bar menu">
          <li className="nav-bar links">
            <a href="#about">About</a>
          </li>
          <li className="nav-bar links">
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li className="nav-bar links">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-bar links">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
