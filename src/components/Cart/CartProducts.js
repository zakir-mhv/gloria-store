import {  useContext } from "react";
import { ProductContext } from "../../context";

function CartProducts( props ) {
  const { addToCart, removeFromCart } = useContext(ProductContext);
  const {id, title, price, image, quantity} = props.product;

  return (
      <div className="row justify-content-center border-bottom mb-2 py-2">
        <div className="col-10 col-lg-2 mb-2">
          <img src={image} alt="product" style={{height: "5rem", objectFit: "contain"}}/>
        </div>
        <div className="col-10 col-lg-2 mb-0">
          <p>{title}</p>
        </div>
        <div className="col-10 col-lg-2 mb-0">
          <p>{price}$</p>
        </div>
        <div className="col-10 col-lg-2 mb-3">
          <span className="btn btn-secondary" onClick={() => removeFromCart(id)}>-</span>
          <span className="btn btn-secondary mx-1">{quantity}</span>
          <span className="btn btn-secondary" onClick={() => addToCart(id)}>+</span>
        </div>
        <div className="col-10 col-lg-2 mb-3">
          <span className="material-icons btn btn-danger" onClick={() => removeFromCart(id, "deleteFully")}>delete</span>
        </div>
        <div className="col-10 col-lg-2 mb-2">
          <span className="d-lg-none">Product Total: </span><span>{(price * quantity).toFixed(2)}$</span>
        </div>
      </div>
  )
}

export default CartProducts;
