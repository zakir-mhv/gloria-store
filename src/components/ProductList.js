import { useContext } from "react";
import { ProductContext } from "../context";

import Loading from "./Loading";
import Categories from "./Categories";
import Product from "./Product";

function ProductList() {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
          <Loading />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Categories />
        <div className="row justify-content-center justify-content-lg-start mb-5">
          {products.map(product => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
