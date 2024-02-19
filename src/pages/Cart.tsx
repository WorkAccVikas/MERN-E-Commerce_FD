import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CartItemCard from "../components/CartItem";

const cartItem = [
  {
    productId: "231",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/719C6bJv8jL._SX679_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
  {
    productId: "232",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71BLkd39VKL._SY741_.jpg",
    name: "Kurti",
    price: 800,
    quantity: 9,
    stock: 70,
  },
  {
    productId: "232",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71BLkd39VKL._SY741_.jpg",
    name: "Kurti",
    price: 800,
    quantity: 9,
    stock: 70,
  },
  {
    productId: "232",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71BLkd39VKL._SY741_.jpg",
    name: "Kurti",
    price: 800,
    quantity: 9,
    stock: 70,
  },
  {
    productId: "232",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71BLkd39VKL._SY741_.jpg",
    name: "Kurti",
    price: 800,
    quantity: 9,
    stock: 70,
  },
  {
    productId: "232",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71BLkd39VKL._SY741_.jpg",
    name: "Kurti",
    price: 800,
    quantity: 9,
    stock: 70,
  },
  {
    productId: "232",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71BLkd39VKL._SY741_.jpg",
    name: "Kurti",
    price: 800,
    quantity: 9,
    stock: 70,
  },
  {
    productId: "232",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71BLkd39VKL._SY741_.jpg",
    name: "Kurti",
    price: 800,
    quantity: 9,
    stock: 70,
  },
  {
    productId: "232",
    photo:
      "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71BLkd39VKL._SY741_.jpg",
    name: "Kurti",
    price: 800,
    quantity: 9,
    stock: 70,
  },
];

const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges;

function Cart() {
  console.log("Cart Page render");

  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      {/* Main Section */}
      <main>
        {cartItem.length > 0 ? (
          cartItem.map((item, index) => (
            <CartItemCard key={index} cartItem={item} />
          ))
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>

      {/* Aside Section */}
      <aside>
        <p>SubTotal : ₹{subTotal}</p>
        <p>Shipping Charges : ₹{shippingCharges}</p>
        <p>Tax : ₹{tax}</p>
        <p>
          Discount : <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total : ₹{total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon{" "}
              <VscError
                onClick={() => setCouponCode("")}
                className="cursor-pointer"
              />
            </span>
          ))}

        {cartItem.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
}

export default Cart;
