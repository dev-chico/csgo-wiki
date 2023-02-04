import { useEffect, useState } from "react";

export function useFetch(endpoint: string) {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 8;

  function loadData() {
    setLoading(true);
    fetch(
      `http://localhost:3002/${endpoint}?_page=${page}&_limit=${itemsPerPage}`,
      {
        method: "GET",
      }
    )
      .then(async (response) => {
        setTotalPage(
          Number(response.headers.get("X-Total-Count")) / itemsPerPage
        );
        const json = await response.json();
        setData([...data, ...json]);
      })
      .catch((err) => console.log("ERROR: ", err))
      .finally(() => setLoading(false));
  }

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      page === totalPage ||
      loading
    ) {
      return;
    }

    setPage(page + 1);
  }

  useEffect(() => {
    loadData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return { loading, data, page };
}
