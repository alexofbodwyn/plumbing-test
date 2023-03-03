import { useRouter } from "next/router";
import React, { useState } from "react";
import { Item } from "../types/interfaces";
import useGetData from "../hooks/useGetData";
import ProductCard from "../components/productCard";
import Grid from "../components/grid";
import SortFilter from "../components/sortFilter";
import Pagination from "../components/pagination";
import Loader from "../components/loader";

function App() {
  const [sort, setSort] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const { data, totalPages } = useGetData(sort, page);

  React.useEffect(() => {
    setLoading(!data);
  }, [data]);

  const router = useRouter();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(parseInt(event.target.value));
    setPage(1);
    void router.push(`/?sort=${event.target.value}&page=0`);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(page - 1, 0);
    setPage(prevPage);
    void router.push(`/?sort=${sort}&page=${prevPage}`);
  };

  const handleNextPage = () => {
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage);
    void router.push(`/?sort=${sort}&page=${nextPage}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <SortFilter sort={sort} handleSortChange={handleSortChange} />
          <Grid columns={3}>
            {Array.isArray(data) &&
              data.map((item: Item) => (
                <ProductCard key={item.id} item={item} />
              ))}
          </Grid>
          <Pagination
            page={page}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
