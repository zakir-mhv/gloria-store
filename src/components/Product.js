import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context";

function Product({ product }) {
  const { id, title, price, description, image } = product;
  const { addToCart } = useContext(ProductContext)
  
  return (
    <div className="col-9 col-lg-3 my-3">

      <div className="card card-border">
        <div>
          <Link to={`details/${id}`}>
            <div>
              <img className="card-img-top img-box" src={image} alt="product" />
            </div>
          </Link>
        </div>
        <div className="card-body card-body-box">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <h4 className="card-text mb-0">{price}$</h4>
          <span className="material-icons btn btn-success" style={{fontSize: "1rem"}} onClick={() => {
            addToCart(id)
          }}>add_shopping_cart</span>
        </div>

      </div>

    </div>
  );
}

export default Product;