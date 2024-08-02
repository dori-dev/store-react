import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product/Product";
import { productListAction } from "../action/productAction";

function Home() {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.productList);
  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      <h1>محصولات</h1>
      {loading ? (
        <h2>درحال دریافت مخصولات...</h2>
      ) : (
        <div className="container">
          <div className="row">
            {products.map((item) => {
              return (
                <div
                  className="col col-12 col-sm-12 col-md-6 col-lg-4"
                  key={item._id}
                >
                  <Product product={item} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
