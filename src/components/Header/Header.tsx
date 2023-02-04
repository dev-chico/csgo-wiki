import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import paths from "../../constants/paths";
import "./Header.scss";

export function Header() {
  const location = useLocation();

  function setActiveClass(path: string) {
    if (location.pathname.includes(path)) {
      return "active";
    }
    return "";
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
