import { FaExclamationTriangle } from "react-icons/fa";
import "./NotFound.scss";

export function NotFound() {
  return (
    <div className="not-found">
      <FaExclamationTriangle size={124} color="#d45500" />
      <h1>Página não encontrada!</h1>
    </div>
  );
}
