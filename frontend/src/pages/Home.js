import React from "react";
import products from "../products";
import Product from "../components/Product/Product";

function Home() {
  return (
    <div>
      <h1>محصولات</h1>
      <div class="container">
        <div class="row">
          {products.map((item) => {
            return (
              <div class="col col-12 col-sm-12 col-md-6 col-lg-4">
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
