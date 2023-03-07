import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Item } from "../types/interfaces";
import fetchData from "../hooks/useGetData";
import ProductCard from "../components/productCard";
import Grid from "../components/grid";
import SortFilter from "../components/sortFilter";
import Pagination from "../components/pagination";

function App() {
  const router = useRouter();

  const queryPage = router.query.page ?? 1
  const querySort = router.query.sort ?? 1

  const [products, setProducts] = useState<Item[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    const fetchProductData = async () => {
      const { data, totalPages } = await fetchData(querySort, queryPage);
      setProducts(data);
      setTotalPages(totalPages);
    };

    fetchProductData();
  }, [queryPage, querySort]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    void router.push(`/?sort=${event.target.value}&page=1`);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(parseInt(queryPage) - 1, 0);
    void router.push(`/?sort=${querySort}&page=${prevPage}`);
  };

  const handleNextPage = () => {
    const nextPage = Math.min(parseInt(queryPage) + 1, parseInt(queryTotalPages) - 1);
    void router.push(`/?sort=${querySort}&page=${nextPage}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <SortFilter sort={querySort} handleSortChange={handleSortChange} />
      <Grid columns={3}>
        {Array.isArray(products) &&
          products.map((item: Item) => (
            <ProductCard key={item.id} item={item} />
          ))}
      </Grid>
      <Pagination
        page={queryPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}

export default App;
