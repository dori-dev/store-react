import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { productDetailAction } from "../action/productAction";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.productDetail);
  useEffect(() => {
    dispatch(productDetailAction(id));
  }, [id, dispatch]);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>
      {loading ? (
        <h2>درحال دریافت محصول...</h2>
      ) : (
        <div className="row align-items-start">
          <div className="col-4">
            <img className="img-fluid" src={product.image} alt={product.name} />
          </div>
          <div className="col-4">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h3>{product.name}</h3>
              </li>
              <li className="list-group-item">{product.price}</li>
              <li className="list-group-item">{product.description}</li>
              <li className="list-group-item"></li>
            </ul>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <button type="button" className="btn btn-primary btn-block">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
