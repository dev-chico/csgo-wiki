import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import paths from "./constants/paths";

const Home = lazy(() =>
  import("./pages/Home/Home").then(({ Home }) => ({
    default: Home,
  }))
);

const Skins = lazy(() =>
  import("./pages/Skins/Skins").then(({ Skins }) => ({
    default: Skins,
  }))
);

const Stickers = lazy(() =>
  import("./pages/Stickers/Stickers").then(({ Stickers }) => ({
    default: Stickers,
  }))
);

const Cases = lazy(() =>
  import("./pages/Cases/Cases").then(({ Cases }) => ({
    default: Cases,
  }))
);

const Agents = lazy(() =>
  import("./pages/Agents/Agents").then(({ Agents }) => ({
    default: Agents,
  }))
);

const Graffiti = lazy(() =>
  import("./pages/Graffiti/Graffiti").then(({ Graffiti }) => ({
    default: Graffiti,
  }))
);

const Musics = lazy(() =>
  import("./pages/Musics/Musics").then(({ Musics }) => ({
    default: Musics,
  }))
);

const NotFound = lazy(() =>
  import("./pages/NotFound/NotFound").then(({ NotFound }) => ({
    default: NotFound,
  }))
);

export function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.skins} element={<Skins />} />
        <Route path={paths.cases} element={<Cases />} />
        <Route path={paths.stickers} element={<Stickers />} />
        <Route path={paths.agents} element={<Agents />} />
        <Route path={paths.graffiti} element={<Graffiti />} />
        <Route path={paths.music} element={<Musics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
