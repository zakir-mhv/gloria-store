import React, { useState, useEffect } from "react";

const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const allCategories = ["all", ...categories];
  const [cart, setCart] = useState([]);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async categoryName => {
    if (categoryName === "all") {
      fetchProducts();
    } else {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${categoryName}`
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const addToCart = id => {
    const product = cart.find(item => item.id === id);

    if(product) {
      setCart(cart.map((item) =>
      item.id === product.id ? { ...product, quantity: product.quantity + 1 } : item
    ));
    } else {
      const product = products.find(item => item.id === id);
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (id, deleteFully) => {
    const product = cart.find(item => item.id === id);

    if(product.quantity === 1 || deleteFully) {
      setCart(cart.filter(item => item.id !== id))
    } else {
      setCart(cart.map((item) =>
      item.id === product.id ? { ...product, quantity: product.quantity - 1 } : item
    ));
    }
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <ProductContext.Provider
      value={{
        loading,
        allCategories,
        products,
        fetchProductsByCategory,
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
