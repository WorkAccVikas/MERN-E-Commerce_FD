import { useState } from "react";
import ProductCard from "../components/Product-Card";

function Search() {
  console.log("Search Page render");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  const addToCartHandler = () => {};

  return (
    <div className="product-search-page">
      {/* aside section */}
      <aside>
        <h2>Filters</h2>
        {/* Sort */}
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        {/* Category */}
        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">ALL</option>
            <option value="sample1">SAMPLE 1</option>
            <option value="sample2">SAMPLE 2</option>
          </select>
        </div>
      </aside>
      {/* main section */}
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Products List */}
        <div className="search-product-list">
          {Array.from({ length: 5 }, (_, i) => i).map((item) => (
            <ProductCard
              key={item}
              productId="100"
              name="Macbook"
              price={70000}
              stock={156}
              handler={addToCartHandler}
              photo="https://i.gadgets360cdn.com/products/large/macbook-air-m1-2020-db-800x600-1607604365.png"
            />
          ))}
        </div>

        {/* Pagination Buttons */}
        <article>
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={!isPrevPage}
          >
            Prev
          </button>
          <span>{page} of 4</span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!isNextPage}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
}

export default Search;
