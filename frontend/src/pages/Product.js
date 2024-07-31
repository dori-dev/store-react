import React from "react";
import { Link, useParams } from "react-router-dom";

import products from "../products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => {
    return item._id === id;
  });
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>
      <div class="row align-items-start">
        <div class="col-4">
          <img className="img-fluid" src={product.image} alt={product.name} />
        </div>
        <div class="col-4">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h3>{product.name}</h3>
            </li>
            <li class="list-group-item">{product.price}</li>
            <li class="list-group-item">{product.description}</li>
            <li class="list-group-item"></li>
          </ul>
        </div>
        <div className="col-1"></div>
        <div class="col-3">
          <button type="button" className="btn btn-primary btn-block">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
