import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Fotter from "./components/Fotter";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";
import CartScreen from "./Screen/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Fotter />
    </Router>
  
  );
};

export default App;
