import { useParams } from "react-router-dom";

function OrderDetails() {
  console.log("Order Details Page render");

  const { id } = useParams();

  return (
    <div>
      OrderDetails : <b>{id}</b>
    </div>
  );
}

export default OrderDetails;
