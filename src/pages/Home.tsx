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
          photo="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/719C6bJv8jL._SX679_.jpg"
        /> */}

        {Array.from({ length: 5 }, (_, i) => i).map((item) => (
          <ProductCard
            key={item}
            productId="100"
            name="Macbook"
            price={70000}
            stock={156}
            handler={addToCartHandler}
            photo="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/719C6bJv8jL._SX679_.jpg"
          />
        ))}
      </main>
    </div>
  );
}

export default Home;
