import React from "react";
import products from "../products";

function Home() {
  return (
    <div>
      <h1>مخصولات</h1>
      <div class="container">
        <div class="row">
          {products.map((item) => {
            return (
              <div class="col col-12 col-sm-12 col-md-6 col-lg-4">
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
