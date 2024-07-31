import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h5>{product.name}</h5>
        </Link>
        <p className="card-text">{product.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>{product.price}</span>
          <span className="mx-1">toman</span>
        </li>
      </ul>
    </div>
  );
};

export default Product;
