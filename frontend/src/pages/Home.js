import React, { useState, useEffect } from "react";
import Product from "../components/Product/Product";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      const response = await axios.get("http://localhost:8000/api/products/");
      setProducts(response.data);
    };
    sendRequest();
  }, []);
  return (
    <div>
      <h1>محصولات</h1>
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
    </div>
  );
}

export default Home;
