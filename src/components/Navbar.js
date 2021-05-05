import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Created my logo at LogoMakr.com
import { useContext } from "react";
import { ProductContext } from "../context";

function Navbar() {
  const { cart } = useContext(ProductContext)
  const cartItemCount = cart.length;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
        <Link to="/" className="navbar-brand">
          <img src={logo} width="100" alt="logo" />
        </Link>
        <Link to="/" className="nav-link ml-lg-5 ml-2 text-success font-weight-bold">
          Products
        </Link>
        <Link to="/cart" className="nav-link ml-auto">
          <button className="btn btn-success d-flex justify-content-between">
            <span className="material-icons mr-1">shopping_cart</span>
            <span className="badge badge-light mt-1">{cartItemCount}</span>
          </button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
