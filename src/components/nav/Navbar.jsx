import { Link, Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="listbox">
          <li><Link to="/new-portfolio">
            Home
          </Link></li>
          <li><Link to="/new-portfolio/about-me">
            About Me
          </Link></li>
          <li><Link to="/new-portfolio/skill">
            Skills
          </Link></li>
          <li><Link to="/new-portfolio/project">
            Projects
          </Link></li>
          <li><Link to="/new-portfolio/contact">
            Contact
          </Link></li>
        </ul>
      </nav>
      <Outlet />
    </>)
};
export default NavBar;
