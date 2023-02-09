import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import paths from "../../constants/paths";
import "./Header.scss";

export function Header() {
  const location = useLocation();

  function specialCharacterRemover(string: string) {
    return string.replace(/[^a-zA-Z0-9]/g, "");
  }

  function setActiveClass(path: string) {
    if (
      specialCharacterRemover(path) ===
      specialCharacterRemover(location.pathname)
    ) {
      return "active";
    }
  }

  return (
    <header className="header">
      <main className="list-links">
        <Link to={paths.home} className={setActiveClass(paths.home)}>
          <FaHome />
        </Link>
        <Link to={paths.agents} className={setActiveClass(paths.agents)}>
          Agents
        </Link>
        <Link to={paths.cases} className={setActiveClass(paths.cases)}>
          Cases
        </Link>
        <Link to={paths.graffiti} className={setActiveClass(paths.graffiti)}>
          Graffiti
        </Link>
        <Link to={paths.music} className={setActiveClass(paths.music)}>
          Music kits
        </Link>
        <Link to={paths.skins} className={setActiveClass(paths.skins)}>
          Skins
        </Link>
        <Link to={paths.stickers} className={setActiveClass(paths.stickers)}>
          Stickers
        </Link>
      </main>
    </header>
  );
}
