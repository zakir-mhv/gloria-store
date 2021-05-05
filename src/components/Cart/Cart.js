import React, { useContext } from "react";
import { ProductContext } from "../../context";
import CartTitle from "./CartTitle";
import CartColumns from "./CartColumns";
import CartProducts from "./CartProducts";
import CartCheckout from "./CartCheckout";
import CartEmpty from "./CartEmpty";

function Cart() {
  const { cart } = useContext(ProductContext);
  const cartItemCount = cart.length;

  if (cartItemCount) {
    return (
      <div className="container">
        <CartTitle />
        <CartColumns />
        {cart.map(product => (
          <CartProducts key={product.id} product={product} />
        ))}
        <CartCheckout />
      </div>
    );
  } else {
    return <CartEmpty />;
  }
}

export default Cart;
