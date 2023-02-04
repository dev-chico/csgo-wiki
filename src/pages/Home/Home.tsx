import { Suspense } from "react";
import { Jumbotron } from "./Jumbotron/Jumbotron";
import { Loader } from "../../components/Loader/Loader";
import backgroundImage from "../../assets/imgs/background.png";
import "./Home.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="home">
        <Jumbotron />
        <img
          src={backgroundImage}
          alt="Imagem de fundo"
          className="background"
        />

        <div className="social-medias">
          <Link to="#">
            <FaInstagram size={28} color="#FFF" />
          </Link>
          <Link to="#">
            <FaYoutube size={28} color="#FFF" />
          </Link>
          <Link to="#">
            <FaFacebook size={28} color="#FFF" />
          </Link>
          <Link to="#">
            <FaTwitter size={28} color="#FFF" />
          </Link>
          <Link to="#">
            <FaTwitch size={28} color="#FFF" />
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
