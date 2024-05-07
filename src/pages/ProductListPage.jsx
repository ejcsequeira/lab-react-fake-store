import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    const listPage = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error))
    }
    listPage();
  }, []);

  return (
    <div className="ProductListPage ">
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <Link to={`/products/details/${product.id}`} key={product.id}>
            <li className="list-items">
              <h2>{product.title}</h2>
              <h2>${product.price}</h2>
              <h2>{product.description}</h2>
              <h2>{product.category}</h2>
              <img src={product.image} alt="" />
              <br />
              <br />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}


export default ProductListPage;
