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

  console.log(cartItems);

  return (
    <div>
      <h1>سبد خرید </h1>
    </div>
  );
};

export default Cart;
