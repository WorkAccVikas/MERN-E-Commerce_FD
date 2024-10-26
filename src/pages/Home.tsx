import { Link } from "react-router-dom";
import ProductCard from "../components/Product-Card";

function Home() {
  console.log("Home Page render");

  const addToCartHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to={"/search"} className="findMore">
          More
        </Link>
      </h1>

      <main>
        {/* <ProductCard
          productId="100"
          name="Macbook"
          price={70000}
          stock={156}
          handler={addToCartHandler}
          photo="https://i.gadgets360cdn.com/products/large/macbook-air-m1-2020-db-800x600-1607604365.png"
        /> */}

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
      </main>
    </div>
  );
}

export default Home;
