import { useContext } from "react";
import { ProductContext } from "../../context";
import PayPal from "./PayPal";

function CartCheckout() {
  const { cart, clearCart } = useContext(ProductContext);
  const totalPrice = cart.reduce(
    (accumulator, product) => accumulator + product.quantity * product.price,
    0
  );
  const totalPriceStr = totalPrice.toFixed(2).toString();

  return (
    <>
      <div className="row">
        <div className="col-12 mb-3 text-right">
          <span className="d-lg-none">Total: </span>
          <h2>{totalPrice.toFixed(2)}$</h2>
          <button
            className="btn btn-outline-danger"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
        </div>
        <div className="offset-lg-9 col-lg-3">
          <PayPal total={totalPriceStr} />
        </div>
      </div>
    </>
  );
}

export default CartCheckout;
