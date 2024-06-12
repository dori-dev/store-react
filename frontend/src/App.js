import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="btn btn-danger">Hello</h2>
      </div>
      hello
      <Footer />
    </div>
  );
};

export default App;
