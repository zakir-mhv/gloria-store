import { useContext } from "react";
import { ProductContext } from "../context";

function Categories() {
  const { allCategories, fetchProductsByCategory } = useContext(ProductContext);

  return (
    <div className="text-center mt-3">
      {allCategories.map((category, index) => {
        return (
          <button
            type="button"
            className="btn btn-sm btn-outline-success my-3 mx-2"
            key={index}
            onClick={() => fetchProductsByCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
