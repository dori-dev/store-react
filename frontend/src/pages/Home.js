import React from "react";
import products from "../products";
import Product from "../components/Product/Product";

function Home() {
  return (
    <div>
      <h1>محصولات</h1>
      <div className="container">
        <div className="row">
          {products.map((item) => {
            return (
              <div className="col col-12 col-sm-12 col-md-6 col-lg-4" key={item._id}>
                <Product product={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
