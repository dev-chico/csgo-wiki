import { ReactNode } from "react";
import { FaSteam } from "react-icons/fa";
import "./Card.scss";

interface ICardProps {
  name: string;
  image: string;
  description?: string;
  children?: ReactNode;
}

export function Card({ description, image, name, children }: ICardProps) {
  const steamMarket = "https://steamcommunity.com/market/search?appid=730&q=";

  function linkFormat(name: string) {
    return name.replace(/[^a-z0-9]/gi, "");
  }

  return (
    <div className="card">
      <img src={image} alt={name} />

      <main>
        <div className="content">
          <h2 className="name">{name}</h2>
          <p className="description">{description && description}</p>

          {children && (
            <div className="children-card">
              <div className="divider top" />
              {children}
            </div>
          )}
        </div>

        <div className="divider" />

        <a
          href={`${steamMarket}${linkFormat(name)}`}
          className="btn-steam"
          target="_blank"
        >
          Ver na loja
          <FaSteam size={20} className="icon" />
        </a>
      </main>
    </div>
  );
}
