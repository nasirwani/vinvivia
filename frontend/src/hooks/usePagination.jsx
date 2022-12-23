import { useEffect, useState } from "react";
export function usePagination(count, apiCall) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(true); //api check
  const [prev, setPrev] = useState(false); //api check
  const [sort, setSort] = useState({ sort: "createdAt", order: "desc" });

  useEffect(() => {
    setLoading(true);
    apiCall(count, page, sort)
      .then(({ data }) => {
        setNext(data.next);
        if (!data.next) {
          setNext(false);
        }
        if (data.previous) {
          setPrev(true);
        } else {
          setPrev(false);
        }
        setResults(data.results);
        setTotal(data.total);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, results.length, sort, sort.order]);
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const canNextPage = () => {
    return next;
  };

  const canPrevPage = () => {
    return prev;
  };

  return {
    results,
    total,
    loading,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
    setSort,
  };
}
