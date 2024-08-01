import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/products/${id}`
      );
      setProduct(response.data);
    };
    sendRequest();
  }, [id]);

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
