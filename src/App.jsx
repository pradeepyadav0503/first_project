import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wishlist from "./Routes/Wishlist";
import Cart from "./Routes/Cart";
import Order from "./Routes/Order";
import { Provider } from "react-redux";
import store from './Redux/Store'

function App() {
  return (
    <>
     <Provider store={store}>
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element ={<Wishlist/>} />
          <Route path="/cart" element = {<Cart/>} />
          <Route path="/order" element ={<Order/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
     </Provider>
    </>
  );
}

export default App;
