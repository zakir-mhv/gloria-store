import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../context";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

function Details() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { title, price, description, image } = product;

  const { addToCart } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <Loading />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container py-3">
        {/* title */}
        <div className="row justify-content-center">
          <div className="col-10 text-center my-3">
            <h3>{title}</h3>
          </div>
        </div>
        {/* product info */}
        <div className="row justify-content-center">
          <div className="col-10 col-lg-3 my-3">
            <img src={image} alt="product" className="img-fluid" />
          </div>
          <div className="col-10 col-lg-3 my-3">
            <p>{description}</p>
            <h4>{price}$</h4>
          </div>
        </div>
        {/* buttons */}
        <div className="row justify-content-center">
          <div className="col-10 col-lg-3 my-3">
            <Link to="/">
              <button className="btn btn-primary">Back to products</button>
            </Link>
          </div>
          <div className="col-10 col-lg-3 my-3">
            <button
              className="btn btn-success"
              onClick={() => {
                let strId = parseInt(id)
                addToCart(strId);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
