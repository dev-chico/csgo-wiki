import { BrowserRouter } from "react-router-dom";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}
