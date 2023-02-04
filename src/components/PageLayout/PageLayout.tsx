import { ReactNode, useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Loader } from "../../components/Loader/Loader";
import "./PageLayout.scss";

interface IPageLayoutProps {
  children: ReactNode;
  title: string;
  hasData: boolean;
  initialLoading: boolean;
  fetchingMoreData: boolean;
}

export function PageLayout({
  children,
  title,
  hasData,
  fetchingMoreData,
  initialLoading,
}: IPageLayoutProps) {
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", getPageYAfterScroll);
    return () => window.removeEventListener("scroll", getPageYAfterScroll);
  }, []);

  function backToTop() {
    window.scrollTo(0, 0);
  }

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <div className="pageLayout">
      <h1 className="title">{title}</h1>
      <main className="pageLayout--content">
        {!hasData && <h2 className="no-data">Sem dados.</h2>}
        {children && <div className="children">{children}</div>}
        {fetchingMoreData && <Loader size="small" />}
      </main>

      <button
        type="button"
        className={`back-to-top ${pageYPosition > 400 && "visible"}`}
        onClick={backToTop}
      >
        <FaArrowUp size={28} color="#FFF" />
      </button>
    </div>
  );
}
