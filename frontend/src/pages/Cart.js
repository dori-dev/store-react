import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { addToCart } from "../action/cartAction";

const Cart = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id));
    }
  }, [id, dispatch]);

  const removeFromCartHandler = (id) => {
    console.log(id);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <h2>سبد خرید</h2>
          {cartItems.length === 0 ? (
            <p>سبد خرید خالی است</p>
          ) : (
            <ul className="list-group list-group-flush">
              {cartItems.map((item) => (
                <li className="list-group-item" key={item.product}>
                  <div className="row">
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="col-3 align-self-center">{item.name}</div>
                    <div className="col-2 align-self-center">{item.price}</div>
                    <div className="col-2 align-self-center">
                      <button
                        onClick={() => removeFromCartHandler(item.product)}
                        type="button"
                        className="btn btn-danger"
                      >
                        <i className="fa fa-trash fs-5"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-4">One of two columns</div>
      </div>
    </div>
  );
};

export default Cart;
