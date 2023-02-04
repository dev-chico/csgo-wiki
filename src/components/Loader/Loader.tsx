import "./Loader.scss";

interface ILoaderProps {
  size?: "small" | "large";
}

export function Loader({ size }: ILoaderProps) {
  return (
    <div className={`loader ${size === "small" && "small"}`}>
      <div className="spin"></div>
      <h2>Carregando</h2>
    </div>
  );
}
